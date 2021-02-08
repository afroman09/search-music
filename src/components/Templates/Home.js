import React from "react";
// import { Link } from "react-router-dom";
import TopImg from '../Img/Top-Img1.jpeg'
import Style from './Home.module.scss'
import Header from '../Molecules/Header'

const Home = () => {
  return (
    <div className={Style.container}>
      <h2>Welcom to Search Music</h2>
      <p>このアプリはあなたのお気に入りの曲を分析します</p>
      <h3>How to Search Music?</h3>
      <p>IDをコピー</p>
      <img src={TopImg} alt="画像" width="50%" height="50%"/>
      <p>Test ID : spotify:track:3wJHCry960drNlAUGrJLmz</p>
        <Header />
    </div>
  );
};

export default Home;
