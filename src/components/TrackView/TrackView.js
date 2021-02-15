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
    // track情報とともにアルバム画像も反映
  };

  return (
    <div className={Style.container}>
        {/* {props.track.map(({ name, id }) => (
            <div onClick={() => trackChange(id)} className={Style.topTrack}>{name}</div>
        ))} */}
        {albumTrack.map(({ name, id }) => (
            <div onClick={() => trackChange(id)} className={Style.albumTrack}>{name}</div>
        ))}
      <div className={Style.album}>
        {props.album.map(({ images, name, id }) => (
          <div className={Style.wrapper} onClick={() => albumTrackPreview(id)} >
            <img src={images[1].url}/>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackView;
