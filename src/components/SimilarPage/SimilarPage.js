/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

  const [similarFourthTrack, setSimilarFourthTrack] = useState({
    fourthTrackName: "",
    fourthTrackId: "",
    fourthTrackArtists: "",
    fourthTrackImg: "",
    fourthTrackPreview_url: "",
  });

  const [similarFifthTrack, setSimilarFifthTrack] = useState({
    fifthTrackName: "",
    fifthTrackId: "",
    fifthTrackArtists: "",
    fifthTrackImg: "",
    fifthTrackPreview_url: "",
  });

  const history = useHistory();

  // tokenが変更されるたびに更新
  useEffect(() => {

    resetSimilarTrackURL();

    /* 似ている曲を取得 START */
    axios(`https://api.spotify.com/v1/recommendations?limit=5&market=US`, {
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
        setSimilarFourthTrack({
          fourthTrackName: firstrReaponse.data.tracks[3].name,
          fourthTrackId: firstrReaponse.data.tracks[3].id,
          fourthTrackArtists:
            firstrReaponse.data.tracks[3].album.artists[0].name,
          fourthTrackImg: firstrReaponse.data.tracks[3].album.images[1].url,
          fourthTrackPreview_url: firstrReaponse.data.tracks[3].preview_url,
        });
        setSimilarFifthTrack({
          fifthTrackName: firstrReaponse.data.tracks[4].name,
          fifthTrackId: firstrReaponse.data.tracks[4].id,
          fifthTrackArtists:
            firstrReaponse.data.tracks[4].album.artists[0].name,
          fifthTrackImg: firstrReaponse.data.tracks[4].album.images[1].url,
          fifthTrackPreview_url: firstrReaponse.data.tracks[4].preview_url,
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.token])

  // トラックURLを初期化
  const resetSimilarTrackURL = () => {
    setSimilarFirstTrack({ firstTrackPreview_url: "" }),
      setSimilarSecondTrack({ secondTrackPreview_url: "" }),
      setSimilarThirdTrack({ thirdTrackPreview_url: "" });
      setSimilarFourthTrack({ fourthTrackPreview_url: "" });
      setSimilarFifthTrack({ fifthTrackPreview_url: "" });
  };

  // クリックされたらIDを取得し、メインコンテンツを変更
  const contentsChange = (id) => {
    if (id === similarFirstTrack.firstTrackId) {
      history.push(`/Search?query=${id}`);
    } else if (id === similarSecondTrack.secondTrackId) {
      history.push(`/Search?query=${id}`);
    } else if (id === similarThirdTrack.thirdTrackId) {
      history.push(`/Search?query=${id}`);
    } else if (id === similarFourthTrack.fourthTrackId) {
      history.push(`/Search?query=${id}`);
    } else if (id === similarFifthTrack.fifthTrackId) {
      history.push(`/Search?query=${id}`);
    }
  };

  return (
    <div>
      {/* <button onClick={handleClick} className={Style.btn}>
        表示
      </button> */}
      <div className={Style.container}>
        <div
          className={Style.wrapper}
          onClick={() => contentsChange(similarFirstTrack.firstTrackId) }
        >
          <img src={similarFirstTrack.firstTrackImg} alt="" />
          <p className={Style.textArea}>
            <div className={Style.artistsName}>
              {similarFirstTrack.firstTrackArtists}
            </div>
            <div className={Style.trackName}>
              {similarFirstTrack.firstTrackName}
            </div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarFirstTrack.firstTrackPreview_url}
            controls
          />
        </div>
        <div
          className={Style.wrapper}
          onClick={() => contentsChange(similarSecondTrack.secondTrackId)}
        >
          <img src={similarSecondTrack.secondTrackImg} />
          <p className={Style.textArea}>
            <div className={Style.artistsName}>
              {similarSecondTrack.secondTrackArtists}
            </div>
            <div className={Style.trackName}>
              {similarSecondTrack.secondTrackName}
            </div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarSecondTrack.secondTrackPreview_url}
            controls
          />
        </div>
        <div
          className={Style.wrapper}
          onClick={() => contentsChange(similarThirdTrack.thirdTrackId)}
        >
          <img src={similarThirdTrack.thirdTrackImg} />
          <p className={Style.textArea}>
            <div className={Style.artistsName}>
              {similarThirdTrack.thirdTrackArtists}
            </div>
            <div className={Style.trackName}>
              {similarThirdTrack.thirdTrackName}
            </div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarThirdTrack.thirdTrackPreview_url}
            controls
          />
        </div>
        <div
          className={Style.wrapper}
          onClick={() => contentsChange(similarFourthTrack.fourthTrackId)}
        >
          <img src={similarFourthTrack.fourthTrackImg} />
          <p className={Style.textArea}>
            <div className={Style.artistsName}>
              {similarFourthTrack.fourthTrackArtists}
            </div>
            <div className={Style.trackName}>
              {similarFourthTrack.fourthTrackName}
            </div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarFourthTrack.fourthTrackPreview_url}
            controls
          />
        </div>
        <div
          className={Style.wrapper}
          onClick={() => contentsChange(similarFifthTrack.fifthTrackId)}
        >
          <img src={similarFifthTrack.fifthTrackImg} />
          <p className={Style.textArea}>
            <div className={Style.artistsName}>
              {similarFifthTrack.fifthTrackArtists}
            </div>
            <div className={Style.trackName}>
              {similarFifthTrack.fifthTrackName}
            </div>
          </p>
          <ReactAudioPlayer
            className={Style.audio}
            src={similarFifthTrack.fifthTrackPreview_url}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default SimilarPage;
