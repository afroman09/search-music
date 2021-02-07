import React, { useState, useEffect } from "react";
import Header from "../Molecules/Header";
import { Credentials } from "../Credentials";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ContentsView from "../Molecules/ContentsView";
import ReturnBtn from "../Atoms/ReturnBtn";

const Search = () => {
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [trackInformation, setTracksInformation] = useState({
    danceability: "",
    mode: "",
    trackKey: "",
  });
  const [searchContents, setSearchContents] = useState({
    artistName: "",
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
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      /* アクセスTokenを発行 END */

      /* 楽曲情報を取得 START */
      // 付与されたtokenを使い、ジャンルにアクセス
      // 取得したジャンルをgenreに適用
      axios(`https://api.spotify.com/v1/audio-features?ids=${queryResult}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      })
        .then((tracksReaponse) => {
          setTracksInformation({
            danceability: tracksReaponse.data.audio_features[0].danceability,
            name: tracksReaponse.data.audio_features[0].mode,
            key: tracksReaponse.data.audio_features[0].key,
          });
        })
        .catch((err) => {
          console.log("err:", err);
        });

      /* 楽曲情報を取得 END */

      /* アーティスト情報を取得 START */

      axios(`https://api.spotify.com/v1/tracks/${queryResult}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      })
        .then((trackContentsReaponse) => {
          setSearchContents({
            artistName: trackContentsReaponse.data.artists[0].name,
            trackPreviewURL: trackContentsReaponse.data.preview_url,
            trackImg: trackContentsReaponse.data.album.images[0].url,
            trackName: trackContentsReaponse.data.name,
          });
        })
        .catch((err) => {
          console.log("err:", err);
        });

      /* アーティスト情報を取得 END */
    });
  }, [location.search, queryResult, spotify.ClientId, spotify.ClientSecret]);

  return (
    <div>
      <Header />
      <ContentsView
        searchContents={searchContents}
        trackInformation={trackInformation}
      />
      <ReturnBtn />
    </div>
  );
};

export default Search;
