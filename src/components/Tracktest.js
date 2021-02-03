import React, { useEffect, useState } from "react";
import { Credentials } from "./Credentials";
import axios from "axios";

const Tracktest = () => {
  const spotify = Credentials();

  console.log("RENDERING APP.JS");

  const [token, setToken] = useState("");
  const [artists, setArtists] = useState({ artistsName: "", artistsId: "" });

  useEffect(() => {
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

      // / 付与されたtokenを使い、アーティストにアクセス
      axios("https://api.spotify.com/v1/artists/1GQptL2kOEsfMXerW4OjMT", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((artistsReaponse) => {
        setArtists({
          artistsName: artistsReaponse.data.name,
          artistsId: artistsReaponse.data.id,
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(artists);
  return (
    <div>
      <h2>{artists.artistsName}</h2>
      <h2>{artists.artistsId}</h2>
    </div>
  );
};

export default Tracktest;
