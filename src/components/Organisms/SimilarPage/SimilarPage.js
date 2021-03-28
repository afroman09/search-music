import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Style from "./SimilarPage.module.scss";
import ReactAudioPlayer from "react-audio-player";

const SimilarPage = (props) => {
  const [similarTrack, setSimilarTrack] = useState([]);
  const history = useHistory();

  // tokenが変更されるたびに更新
  useEffect(() => {
    /* 似ている曲を取得 START */
    axios(`https://api.spotify.com/v1/recommendations?limit=10&market=US`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + props.token,
      },
      params: {
        seed_tracks: props.queryResult,
        target_danceability: props.trackInformation.danceability,
        target_energy: props.trackInformation.energy,
        target_key: props.trackInformation.key,
        target_loudness: props.trackInformation.loudness,
        target_mode: props.trackInformation.mode,
        min_popularity: 0,
        target_tempo: props.trackInformation.tempo,
        target_time_signature: props.trackInformation.signature,
        target_valence: props.trackInformation.valence,
      },
    })
      .then((similarReaponse) => {
        setSimilarTrack(similarReaponse.data.tracks);
      })
      .catch((err) => {
        console.log("err:", err);
      });
    /* 似ている曲を取得 END */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.token]);

  // クリックされたらIDを取得し、メインコンテンツを変更
  const contentsChange = (id) => {
    history.push(`/Search?query=${id}`);
  };

  return (
    <div>
      <div className={Style.container}>
        {similarTrack.map(({ id, artists, name, album, preview_url }) => (
          <div
            className={Style.wrapper}
            key={id}
            onClick={() => contentsChange(id)}
          >
            <img src={album.images[1].url} alt="アルバム画像" />
            <div className={Style.textArea}>
              <p className={Style.artistsName}>{artists[0].name}</p>
              <p className={Style.trackName}>{name}</p>
            </div>
            <ReactAudioPlayer
              className={Style.audio}
              src={preview_url}
              controls
              loop={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPage;
