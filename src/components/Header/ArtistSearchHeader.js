import React, { useState, useEffect } from "react";
import Style from "./Header.module.scss";
import { Credentials } from "../Credentials";
import axios from "axios";
import ArtistView from "../ArtistView/ArtistView";

const ArtistSearchHeader = () => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") {
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
  }, [term, spotify.ClientId, spotify.ClientSecret]);

  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="アーティスト名を入力してください"
          // 値が変更されるたびにstateを更新
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button className={Style.btn} type="submit">
          検索
        </button>
      </form>
      <ArtistView token={token} term={term} />
    </div>
  );
};

export default ArtistSearchHeader;
