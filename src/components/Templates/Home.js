import React from "react";
import { Link } from "react-router-dom"
import TopImg1 from '../Img/Top-Img1.jpeg'
import Style from './Home.module.scss'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div className={Style.container}>
      <Header />
      <h1>Welcom to Search Music</h1>
      <p>このアプリはあなたのお気に入りの曲を分析し、
        <br />
        分析結果を元におすすめの曲を提案します</p>
      <h2>How to Search Music?</h2>
      <div className={Style.imgcontainer}>
      <img className={Style.img} src={TopImg1} alt="画像"/>
      <img className={Style.img} src={TopImg1} alt="画像"/>
      </div>
    <Link to="/ArtistSearch">
      <button className={Style.btn}>アーティスト検索</button>
      </Link>
      <Link to="/TrackIdSearch">
      <button className={Style.btn}>トラックID検索</button>
      </Link>
    </div>
  );
};

export default Home;
