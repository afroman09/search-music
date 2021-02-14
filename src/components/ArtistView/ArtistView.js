import React, { useState, useEffect } from "react";
import axios from "axios";
import TrackView from "../TrackView/TrackView";

const ArtistView = (props) => {
  const [artistInformation, setArtistInformation] = useState([]);
  const [track, setTrack] = useState([]);

  useEffect(() => {
    /* アーティスト情報を取得 START */

    setTrack([]);
    setArtistInformation([]);

    axios(
      `https://api.spotify.com/v1/search?q=${props.term}&type=artist&limit=20`,
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

    /* アーティスト情報を取得 END */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.term]);

  const trackView = (id) => {
    axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
      method: "GET",
      headers: { Authorization: "Bearer " + props.token },
    })
      .then((tracksReaponse) => {
        setTrack(tracksReaponse.data.tracks);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <div>
      {artistInformation.map(({ name, id }) => (
        <div>
          <p onClick={() => trackView(id)}>{name}</p>
        </div>
      ))}

      <TrackView track={track} />
    </div>
  );
};

export default ArtistView;
