import React, { useState, useEffect } from "react";
import { Credentials } from "../Credentials";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import ContentsView from "../Molecules/ContentsView";
import Header from "../Molecules/Header";
import SimilarPage from "../Molecules/SimilarPage";

const Search = () => {
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [trackInformation, setTracksInformation] = useState("");
  const [searchContents, setSearchContents] = useState({
    artistName: "",
    artistId: "",
    trackPreviewURL: "",
    trackImg: "",
    trackName: "",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryResult = searchParams.get("query");

  useEffect(() => {
    /* アクセスTokenを発行 START */
    // tokenを発行し、権限を付与
    // 付与されたTokenをuseStateのtokenに代入し、値を保持
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      /* アクセスTokenを発行 END */

      /* アーティスト情報を取得 START */

      axios(`https://api.spotify.com/v1/tracks/${queryResult}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      })
        .then((trackContentsReaponse) => {
          setSearchContents({
            artistName: trackContentsReaponse.data.artists[0].name,
            artistId: trackContentsReaponse.data.artists[0].id,
            trackPreviewURL: trackContentsReaponse.data.preview_url,
            trackImg: trackContentsReaponse.data.album.images[0].url,
            trackName: trackContentsReaponse.data.name,
          });
        })
        .catch((err) => {
          console.log("err:", err);
        });

      /* アーティスト情報を取得 END */

      /* 楽曲情報を取得 START */
      // 付与されたtokenを使い、ジャンルにアクセス
      // 取得したジャンルをgenreに適用
      axios(`https://api.spotify.com/v1/audio-features?ids=${queryResult}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      })
        .then((tracksReaponse) => {
          setTracksInformation(tracksReaponse.data.audio_features[0]);
        })
        .catch((err) => {
          console.log("err:", err);
        });

      /* 楽曲情報を取得 END */
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryResult,spotify.ClientId, spotify.ClientSecret]);

  return (
    <div>
      <Header />
      <ContentsView
        searchContents={searchContents}
        trackInformation={trackInformation}
        // similarInformation={similarInformation}
      />
      <h3>【 {searchContents.trackName} 】に似た曲はこちら</h3>
      <SimilarPage 
        token={token}
        trackInformation={trackInformation}
        queryResult={queryResult}
      />
      <Link to="/">
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default Search;

// クリックされたら値を取得する関数を定義し、そこにトークン以外のaxiosを記述
// APIファイルを作成し、処理を一つにまとめる？
// 呼び出しの際は関数で呼び出す
// Header→contentsViewに結果を渡すのが正しい流れ？＾
