/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import Style from "./SimilarPage.module.scss";

const SimilarPage = (props) => {
  const [similarFirstTrack, setSimilarFirstTrack] = useState({
    firstTrackName: "",
    firstTrackArtists: "",
    firstTrackImg: "",
    firstTrackPreview_url: "",
  });

  const [similarSecondTrack, setSimilarSecondTrack] = useState({
    secondTrackName: "",
    secondTrackArtists: "",
    secondTrackImg: "",
    secondTrackPreview_url: "",
  });

  const [similarThirdTrack, setSimilarThirdTrack] = useState({
    thirdTrackName: "",
    thirdTrackArtists: "",
    thirdTrackImg: "",
    thirdTrackPreview_url: "",
  });

  const handleClick = () => {
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
          firstTrackArtists: firstrReaponse.data.tracks[0].album.artists[0].name,
          firstTrackImg: firstrReaponse.data.tracks[0].album.images[1].url,
          firstTrackPreview_url: firstrReaponse.data.tracks[0].preview_url,
        })
        setSimilarSecondTrack({
          secondTrackName: firstrReaponse.data.tracks[1].name,
          secondTrackArtists: firstrReaponse.data.tracks[1].album.artists[0].name,
          secondTrackImg: firstrReaponse.data.tracks[1].album.images[1].url,
          secondTrackPreview_url: firstrReaponse.data.tracks[1].preview_url,
        })
        setSimilarThirdTrack({
          thirdTrackName: firstrReaponse.data.tracks[2].name,
          thirdTrackArtists: firstrReaponse.data.tracks[2].album.artists[0].name,
          thirdTrackImg: firstrReaponse.data.tracks[2].album.images[1].url,
          thirdTrackPreview_url: firstrReaponse.data.tracks[2].preview_url,
        })
      })
      .catch((err) => {
        console.log("err:", err);
      });
    /* 似ている曲を取得 END */
  };

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button onClick={handleClick} className={Style.btn}>表示</button>
      <div className={Style.container}>
        <p className={Style.wrapper}>
        <img src={similarFirstTrack.firstTrackImg} />
        <div>{similarFirstTrack.firstTrackName}</div>
        <div>{similarFirstTrack.firstTrackArtists}</div>
        <ReactAudioPlayer
          className={Style.audio}
          src={similarFirstTrack.firstTrackPreview_url}
          controls
        />
        </p>
        <p className={Style.wrapper}>
        <img src={similarSecondTrack.secondTrackImg} />
        <div>{similarSecondTrack.secondTrackName}</div>
        <div>{similarSecondTrack.secondTrackArtists}</div>
        <ReactAudioPlayer
          className={Style.audio}
          src={similarSecondTrack.secondTrackPreview_url}
          controls
        />
        </p>
        <p className={Style.wrapper}>
        <img src={similarThirdTrack.thirdTrackImg} />
        <div>{similarThirdTrack.thirdTrackName}</div>
        <div>{similarThirdTrack.thirdTrackArtists}</div>
        <ReactAudioPlayer
          className={Style.audio}
          src={similarThirdTrack.thirdTrackPreview_url}
          controls
        />
        </p>
      </div>
    </div>
  );
};

export default SimilarPage;
