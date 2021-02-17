import React from "react";
import { Link } from "react-router-dom";
import TopImg1 from "../../Atoms/assets/Img/Top-Img1.jpeg";
import TopImg2 from "../../Atoms/assets/Img/Top-Img2.jpeg";
import TopImg3 from "../../Atoms/assets/Img/Top-Img3.jpeg";
import Style from "./Home.module.scss";
import Header from "../../Molecules/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className={Style.container}>
        <div className={Style.title}>
          <h1>Welcom to SearchMusic</h1>
          <p>
            このアプリはあなたのお気に入りの曲を分析し、
            <br />
            分析結果を元におすすめの曲を提案します
          </p>
        </div>
        <h2>Search Musicの使い方</h2>
        <div className={Style.leftcontainer}>
          <img className={Style.img} src={TopImg2} alt="画像" />
          <div className={Style.textArea}>
            <h3>アーティスト検索</h3>
            <p>
              アーティストのアルバム一覧から
              <br />
              楽曲検索が可能
            </p>
            <Link to="/ArtistSearch">
              <button className={Style.btn}>アーティスト検索</button>
            </Link>
          </div>
        </div>
        <div className={Style.rightcontainer}>
          <div className={Style.righttextArea}>
            <h3>トラックID検索</h3>
            <p>
              トラックIDで検索することで、
              <br />
              楽曲情報へダイレクトにアクセス可能
            </p>
            <Link to="/TrackIdSearch">
              <button className={Style.btn}>トラックID検索</button>
            </Link>
          </div>
          <img className={Style.img} src={TopImg1} alt="画像" />
        </div>
        <div className={Style.textcontainer}>
        <h2>分析情報について</h2>
          Spotify社が独自に分析している数値となります。
          <br />
          <img className={Style.img} src={TopImg3} alt="画像" />
          <ul>
            <li>danceability : 踊りやすさ(1に近づくほど踊りやすい)</li>
            <li>energy : 曲の過激さ(1に近づくほど過激) </li>
            <li>key : 楽曲のキー</li>
            <li>loudness: 音量・音圧（db）の平均値</li>
            <li>mode : 調性 (メジャー=1、マイナー=0)</li>
            <li>valence : 明るさ(1に近いほど明るい)</li>
            <li>tempo : BPM(曲の速さ)</li>
          </ul>
        </div>
      </div>
      <p className={Style.copyright}>SearchMusic 2021 ALL Rights Reserved</p>
    </>
  );
};

export default Home;
