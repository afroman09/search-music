/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Style from "./MainContents.module.scss";

const ContentsView = (props) => {

  return (
    <div className={Style.container}>
      <div className={Style.maincontents}>
        <img className={Style.img} src={props.searchContents.trackImg}/>
        <div className={Style.textArea}>
          <p className={Style.textContents}>
            <div className={Style.artistsName}>
              {props.searchContents.artistName}
            </div>
            <div className={Style.trackName}>
              {props.searchContents.trackName}
            </div>
          </p>
          <ul>
            <li>danceability : {props.trackInformation.danceability} 踊りやすさ(1に近づくほど踊りやすい)</li>
            <li>energy : {props.trackInformation.energy} 曲の過激さ(1に近づくほど過激) </li>
            <li>key : {props.trackInformation.key}  (楽曲のキー)</li>
            <li>loudness: {props.trackInformation.loudness} (音量・音圧（db）の平均値)</li>
            <li>mode : {props.trackInformation.mode} (調性 メジャー=1、マイナー=0)</li>
            <li>valence : {props.trackInformation.valence} 明るさ(1に近いほど明るい)</li>
            <li>tempo : {props.trackInformation.tempo} BPM(曲の速さ)</li>
          </ul>
          <ReactAudioPlayer
            className={Style.audio}
            src={props.searchContents.trackPreviewURL}
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default ContentsView;
