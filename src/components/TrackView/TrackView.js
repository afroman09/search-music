/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const TrackView = (props) => {
  const history = useHistory();

  const [albumTrack, setAlbumTrack] = useState([]);

  const trackChange = (id) => {
    history.push(`/Search?query=${id}`);
  };

  const albumTrackPreview = (id) => {
    // album Track START
    axios(`https://api.spotify.com/v1/albums/${id}/tracks?market=ES&limit=20`, {
      method: "GET",
      headers: { Authorization: "Bearer " + props.token },
    })
      .then((tracksReaponse) => {
        setAlbumTrack(tracksReaponse.data.items);
      })
      .catch((err) => {
        console.log("err:", err);
      });
    // album Track END
  };

  return (
    <div>
      {props.track.map(({ name, id }) => (
        <div>
          <p onClick={() => trackChange(id)}>{name}</p>
        </div>
      ))}

      {props.album.map(({ images, name, id }) => (
        <div>
          <img src={images[1].url} onClick={() => albumTrackPreview(id)} />
          <p>{name}</p>
        </div>
      ))}

      {albumTrack.map(({ name, id }) => (
        <div>
          <p onClick={() => trackChange(id)}>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TrackView;
