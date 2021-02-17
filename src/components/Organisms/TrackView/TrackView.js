/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Style from "./TrackView.module.scss";

const TrackView = (props) => {
  const history = useHistory();
  const [albumTrack, setAlbumTrack] = useState([]);
  const [albumImg, setAlbumImg] = useState("")

  const trackChange = (id) => {
    history.push(`/Search?query=${id}`);
  };

  useEffect(() => {
    // AlbumTrackのリセット
    setAlbumTrack([])
    setAlbumImg('')
  }, [props.album])

  const albumTrackPreview = (id) => {

    // track情報とともにアルバム画像も反映

    axios(`https://api.spotify.com/v1/albums/${id}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + props.token },
    })
      .then((albumReaponse) => {
        setAlbumImg(albumReaponse.data.images[1].url);
      })
      .catch((err) => {
        console.log("err:", err);
      });

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
        <div className={Style.albumPreview}>
        <div className={Style.imgWrapper}>
          <img src={albumImg}></img>
        </div>
      <div className={Style.trackContents}>
        {albumTrack.map(({ name, id }) => (
          <li onClick={() => trackChange(id)} className={Style.albumTrack} key={id}>
            {name}
          </li>
        ))}
      </div>
      </div>
      <div className={Style.album}>
        {props.album.map(({ images, name, id }) => (
          <div
            className={Style.wrapper}
            onClick={() => albumTrackPreview(id)}
            key={id}
          >
            <img src={images[1].url} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackView;
