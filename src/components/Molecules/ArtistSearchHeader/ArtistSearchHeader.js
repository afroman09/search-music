import React, { useState, useEffect } from "react";
import Style from "../SearchInput/SearchInput.module.scss";
import { Credentials } from "../../Credentials";
import axios from "axios";
import ArtistView from "../../Organisms/ArtistView/ArtistView";

const ArtistSearchHeader = () => {
  const [artistTerm, setArtistTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artistTerm === "") {
      alert(" IDを入力してください");
    }
  };

  const spotify = Credentials();

  const [token, setToken] = useState("");

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
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotify.ClientId, spotify.ClientSecret]);

  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit} className={Style.wrapper}>
        <input
          type="text"
          placeholder="アーティスト名を入力してください"
          // 値が変更されるたびにstateを更新
          onChange={(e) => setArtistTerm(e.target.value)}
          value={artistTerm}
        />
      </form>
      <ArtistView token={token} artistTerm={artistTerm} />
    </div>
  );
};

export default ArtistSearchHeader;
