/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import Style from "./ContentsView.module.scss";

const ContentsView = (props) => {


  return (
    <div className={Style.container}>
      <img className={Style.img} src={props.searchContents.trackImg} />
      <div className={Style.textContents}>
        <h3>{props.searchContents.artistName}</h3>
        <h3>{props.searchContents.trackName}</h3>
      </div>
      <ReactAudioPlayer
        className={Style.audio}
        src={props.searchContents.trackPreviewURL}
        controls
      />
      <div className={Style.wrapper}>
        <ul>
          <li>
            danceability(踊りやすさ) : {props.trackInformation.danceability}
          </li>
          <li>energy(曲の過激さ) : {props.trackInformation.energy}</li>
          <li>key(楽曲のキー) : {props.trackInformation.key}</li>
          <li>
            loudness(音量・音圧（db）の平均値) :{" "}
            {props.trackInformation.loudness}
          </li>
          <li>
            mode(調性 メジャー=1、マイナー=0) : {props.trackInformation.mode}
          </li>
          <li>valence(明るさ) : {props.trackInformation.valence}</li>
          <li>tempo(BPM) : {props.trackInformation.tempo}</li>
        </ul>
      </div>
      <h3>【 {props.searchContents.trackName} 】に似た曲はこちら</h3>
      <div className={Style.wrapper}>
        <p>{props.similarInformation.firstTrack.name}</p>
        <ReactAudioPlayer
          className={Style.audio}
          src={props.similarInformation.firstTrack.preview_url}
          controls
        />
        <p>{props.similarInformation.secondTrack.name}</p>
        <ReactAudioPlayer
          className={Style.audio}
          src={props.similarInformation.secondTrack.preview_url}
          controls
        />
        <p>{props.similarInformation.thirdTrack.name}</p>
        <ReactAudioPlayer
          className={Style.audio}
          src={props.similarInformation.thirdTrack.preview_url}
          controls
        />
      </div>
      <Link to="/">
        <button className={Style.btn}>HOME</button>
      </Link>
    </div>
  );
};

export default ContentsView;
