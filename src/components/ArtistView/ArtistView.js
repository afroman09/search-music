import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackView from "../TrackView/TrackView";

const ArtistView = (props) => {
  const [artistInformation, setArtistInformation] = useState([]);
  // const [topTrack, setTopTrack] = useState([]);
  const [album, setAlbum] = useState([]);

  /* アーティスト情報を取得 START */

  const getArtist = () => {
    // setTopTrack([]);
    setArtistInformation([]);
    setAlbum([]);

    axios(
      `https://api.spotify.com/v1/search?q=${props.artistTerm}&type=artist&limit=20`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + props.token },
      }
    )
      .then((artistContentsReaponse) => {
        setArtistInformation(artistContentsReaponse.data.artists.items);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  /* アーティスト情報を取得 END */

  useEffect(
    () => {
      if (props.artistTerm === "") {
        console.log("no-data");
      } else {
        getArtist();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.artistTerm]
  );

  const trackView = (id) => {
    // // Top Track START
    // axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
    //   method: "GET",
    //   headers: { Authorization: "Bearer " + props.token },
    // })
    //   .then((tracksReaponse) => {
    //     setTopTrack(tracksReaponse.data.tracks);
    //   })
    //   .catch((err) => {
    //     console.log("err:", err);
    //   });
    // // Top Track END

    // GET ALBUM START

    axios(
      `https://api.spotify.com/v1/artists/${id}/albums?market=ES&limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + props.token },
      }
    )
      .then((tracksReaponse) => {
        setAlbum(tracksReaponse.data.items);
      })
      .catch((err) => {
        console.log("err:", err);
      });
    // GET ALBUM END

    // 検索候補をリセット
    setArtistInformation([]);

  };

  return (
    <div>
      {artistInformation.map(({ name, id }) => (
        <div>
          <p onClick={() => trackView(id)}>{name}</p>
        </div>
      ))}

      <TrackView /*track={topTrack}*/ album={album} token={props.token} />
    </div>
  );
};

export default ArtistView;
