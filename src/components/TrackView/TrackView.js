/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Style from "./TrackView.module.scss";

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
    <div className={Style.container}>
      <div className={Style.topTrack}>
        {props.track.map(({ name, id }) => (
          <div>
            <p onClick={() => trackChange(id)}>{name}</p>
          </div>
        ))}
      </div>
      <div className={Style.albumTrack}>
        {albumTrack.map(({ name, id }) => (
          <div>
            <p onClick={() => trackChange(id)}>{name}</p>
          </div>
        ))}
      </div>
      <div className={Style.album}>
        {props.album.map(({ images, name, id }) => (
          <div className={Style.wrapper}>
            <img src={images[1].url} onClick={() => albumTrackPreview(id)} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackView;
