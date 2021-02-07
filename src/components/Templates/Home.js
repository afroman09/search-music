import React, { useState, useEffect } from "react";
import Dropdown from "../Atoms/Dropdown";
import Listbox from "../Organisms/Listbox";
import Detail from "../Organisms/Detail";
import { Credentials } from "../Credentials";
import Search from './Search'
import axios from "axios";
import { Link } from 'react-router-dom'

const Home = () => {
  const spotify = Credentials();

  console.log("RENDERING APP.JS");

  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []})
  const [trackDetail, setTrackDetail] = useState(null)

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

      // 付与されたtokenを使い、ジャンルにアクセス
      // 取得したジャンルをgenreに適用
      axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreReaponse) => {
        setGenres({
          selectedGenres: genres.selectedGenres,
          listOfGenresFromAPI: genreReaponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenres, spotify.ClientId, spotify.ClientSecret]);

  // 取得したデータを各値に代入
  const genreChanged = (val) => {
    setGenres({
      selectedGenres: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      {
        method: "GET",
        headers: { 'Authorization': "Bearer " + token },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });
    });

    console.log(val);
  };

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + token
      }
    })
    .then(tracksResponse => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items
      })
    });
  }

  const listboxClicked = val => {

    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter(t => t.track.id === val);

    setTrackDetail(trackInfo[0].track)
  }

  return (
    <form onSubmit={buttonClicked}>
      <div className="container">
        <Dropdown
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenres}
          changed={genreChanged}
        />
        <Dropdown
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged}
        />
        <button type="submit">search</button>
        <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}/>
        {trackDetail && <Detail {...trackDetail} />}
      </div>
      <Link to='/Search'>Search</Link>
    </form>
  );
}

export default Home;
