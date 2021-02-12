/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import Style from "./SimilarPage.module.scss";

const SimilarPage = (props) => {
  const [similarFirstTrack, setSimilarFirstTrack] = useState({
    firstTrackName: "",
    firstTrackId: "",
    firstTrackArtists: "",
    firstTrackImg: "",
    firstTrackPreview_url: "",
  });

  const [similarSecondTrack, setSimilarSecondTrack] = useState({
    secondTrackName: "",
    secondTrackId: "",
    secondTrackArtists: "",
    secondTrackImg: "",
    secondTrackPreview_url: "",
  });

  const [similarThirdTrack, setSimilarThirdTrack] = useState({
    thirdTrackName: "",
    thirdTrackId: "",
    thirdTrackArtists: "",
    thirdTrackImg: "",
    thirdTrackPreview_url: "",
  });

  const handleClick = () => {

    resetSimilarTrackURL();

    /* 似ている曲を取得 START */
    axios(`https://api.spotify.com/v1/recommendations?limit=3&market=US`, {
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
      .then((firstrReaponse) => {
        setSimilarFirstTrack({
          firstTrackName: firstrReaponse.data.tracks[0].name,
          firstTrackId: firstrReaponse.data.tracks[0].id,
          firstTrackArtists:
            firstrReaponse.data.tracks[0].album.artists[0].name,
          firstTrackImg: firstrReaponse.data.tracks[0].album.images[1].url,
          firstTrackPreview_url: firstrReaponse.data.tracks[0].preview_url,
        });
        setSimilarSecondTrack({
          secondTrackName: firstrReaponse.data.tracks[1].name,
          secondTrackId: firstrReaponse.data.tracks[1].id,
          secondTrackArtists:
            firstrReaponse.data.tracks[1].album.artists[0].name,
          secondTrackImg: firstrReaponse.data.tracks[1].album.images[1].url,
          secondTrackPreview_url: firstrReaponse.data.tracks[1].preview_url,
        });
        setSimilarThirdTrack({
          thirdTrackName: firstrReaponse.data.tracks[2].name,
          thirdTrackId: firstrReaponse.data.tracks[2].id,
          thirdTrackArtists:
            firstrReaponse.data.tracks[2].album.artists[0].name,
          thirdTrackImg: firstrReaponse.data.tracks[2].album.images[1].url,
          thirdTrackPreview_url: firstrReaponse.data.tracks[2].preview_url,
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
    /* 似ている曲を取得 END */
  };

  // トラックURLを初期化
  const resetSimilarTrackURL = () => {
    setSimilarFirstTrack({firstTrackPreview_url: ""}) ,
    setSimilarSecondTrack({secondTrackPreview_url: ""}) ,
    setSimilarThirdTrack({thirdTrackPreview_url: ""}) 
  }

  return (
    <div>
      <button onClick={handleClick} className={Style.btn}>
        表示
      </button>
      <div className={Style.container}>
        <div className={Style.wrapper}>
          <img src={similarFirstTrack.firstTrackImg} />
          <p className={Style.textArea}>
          <div className={Style.artistsName}>{similarFirstTrack.firstTrackArtists}</div>
          <div className={Style.trackName}>{similarFirstTrack.firstTrackName}</div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarFirstTrack.firstTrackPreview_url}
            controls
          />
        </div>
        <div className={Style.wrapper}>
          <img src={similarSecondTrack.secondTrackImg} />
          <p className={Style.textArea}>
          <div className={Style.artistsName}>{similarSecondTrack.secondTrackArtists}</div>
          <div className={Style.trackName}>{similarSecondTrack.secondTrackName}</div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarSecondTrack.secondTrackPreview_url}
            controls
          />
        </div>
        <div className={Style.wrapper}>
          <img src={similarThirdTrack.thirdTrackImg} />
          <p className={Style.textArea}>
          <div className={Style.artistsName}>{similarThirdTrack.thirdTrackArtists}</div>
          <div className={Style.trackName}>{similarThirdTrack.thirdTrackName}</div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarThirdTrack.thirdTrackPreview_url}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default SimilarPage;
