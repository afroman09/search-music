/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import Header from "../Molecules/Header";
import { Credentials } from "../Credentials";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  // test
  const spotify = Credentials();

  const [token, setToken] = useState("");
  const [trackContents, setTracksContents] = useState({
      tracksId: '',
      tracksData: ''
  });
  const [tracks, setTracks] = useState('')

  const location = useLocation();

  useEffect(() => {

    
        const searchParams = new URLSearchParams(location.search);
        const queryResult = searchParams.get("query");
        console.log(queryResult);


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

      // 付与されたtokenを使い、ジャンルにアクセス
      // 取得したジャンルをgenreに適用
      // eslint-disable-next-line no-undef
      axios(`https://api.spotify.com/v1/audio-features?ids=${queryResult}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((tracksReaponse) => {
        setTracksContents({
            tracksId: tracksReaponse.data.id,
            tracksData: tracksReaponse.data,
        }
        )
      });
      searchTrack();
    });
  }, [location.search, spotify.ClientId, spotify.ClientSecret]);

  // test end

  const searchTrack = (val) => {
    axios(
        `https://api.spotify.com/v1/tracks?ids=${tracks.tracksId}"`,
        {
          method: "GET",
          headers: { 'Authorization': "Bearer " + token },
        }
      ).then((tracksReaponse) => {
         setTracks(tracksReaponse.data)
      });
  
      console.log(val);
  }

  return (
    <div>
      <Header />
      {/* {artists.name} */}
    </div>
  );
};

export default Search;