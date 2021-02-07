import React from "react";

const ContentsView = (props) => {
  return (
    <div>
      <p>danceability(踊りやすさ) : {props.danceability}</p>
      <p>mode(メジャーorマイナー) : {props.mode}</p>
      <p>key(楽曲のキー) : {props.trackKey}</p>
    </div>
  );
};

export default ContentsView;
