import React, { useState, useEffect } from "react";
import Header from "../Molecules/Header";
import { Credentials } from "../Credentials";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  // test
  const spotify = Credentials();

  console.log("RENDERING APP.JS");

  const [token, setToken] = useState("");
  const [artists, setArtists] = useState({
    selectedArtists: '',
    listOfArtistsFromAPI: [],
});

  const location = useLocation();
  //   const spotifyURL = 'https://api.spotify.com/v1'

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
      axios(`https://api.spotify.com/v1/search?q=${queryResult}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
        params: {
          type: "artist",
          limit: 50,
        },
      }).then((artistsReaponse) => {
        setArtists({
            selectedArtists: artists.selectedArtists,
            listOfArtistsFromAPI: artistsReaponse.data.artists.items,
        })
      });
    });
  }, [
    artists.selectedArtists,
    spotify.ClientId,
    spotify.ClientSecret,
    location,
  ]);

  // test end

  return (
    <div>
      <Header />
      <h2>
        {artists.selectedArtists}
      </h2>
    </div>
  );
};

export default Search;