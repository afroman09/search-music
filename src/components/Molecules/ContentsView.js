/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import Style from "./ContentsView.module.scss";

const ContentsView = (props) => {
  return (
    <div className={Style.container}> 
      <img className={Style.img} src={props.searchContents.trackImg} />
      <p className={Style.name}>{props.searchContents.artistName}</p>
      <p>{props.searchContents.trackName}</p>
      <ReactAudioPlayer 
        className={Style.audio}
        src={props.searchContents.trackPreviewURL}
        controls
      />
      <div className={Style.wrapper}>
          <p>{props.trackInformation.danceability}</p>
          <p>{props.trackInformation.trackKey}</p>
          <p>{props.trackInformation.mode}</p>
      </div>
    </div>
  );
};

export default ContentsView;
