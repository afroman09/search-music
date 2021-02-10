import React from "react";
// import { Link } from "react-router-dom";
import TopImg from '../Img/Top-Img1.jpeg'
import Style from './Home.module.scss'
import Header from '../Header/Header.js'

const Home = () => {
  return (
    <div className={Style.container}>
      <h1>Welcom to Search Music</h1>
      <p>このアプリはあなたのお気に入りの曲を分析します</p>
      <h2>How to Search Music?</h2>
      <img className={Style.img} src={TopImg} alt="画像"/>
      <img className={Style.img} src={TopImg} alt="画像"/>
      <p>Test ID : spotify:track:3wJHCry960drNlAUGrJLmz</p>
        <Header />
    </div>
  );
};

export default Home;
