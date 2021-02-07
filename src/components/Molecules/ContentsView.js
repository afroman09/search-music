/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ContentsView = props => {
  return (
    <div>
      <img src={props.searchContents.trackImg} />
      <p>
        {props.searchContents.artistName}
        {props.searchContents.trackPreviewURL}
        {props.searchContents.trackName}
      </p>
      <p>
        {props.trackInformation.danceability}
        {props.trackInformation.mode}
        {props.trackInformation.trackKey}
      </p>
    </div>
  );
};

export default ContentsView;
