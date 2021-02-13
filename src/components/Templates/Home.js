import React from "react";
import TopImg1 from '../Img/Top-Img1.jpeg'
import Style from './Home.module.scss'
import Header from '../Header/Header.js'

const Home = () => {
  return (
    <div className={Style.container}>
      <h1>Welcom to Search Music</h1>
      <p>このアプリはあなたのお気に入りの曲を分析し、
        <br />
        分析結果を元におすすめの曲を提案します</p>
      <h2>How to Search Music?</h2>
      <div className={Style.imgcontainer}>
      <img className={Style.img} src={TopImg1} alt="画像"/>
      <img className={Style.img} src={TopImg1} alt="画像"/>
      </div>
      <p>【　ヨルシカ / ただ君に晴れ 】Track ID : spotify:track:3wJHCry960drNlAUGrJLmz</p>
      <p>【　Laszlo / Supernova 】Track ID : spotify:track:4zIAj6F6UhV88Yat35oFNA</p>
      <p>【　BTS / Dynamite 】Track ID : spotify:track:4saklk6nie3yiGePpBwUoc</p>
      <p>【　LiSA / 紅蓮花 】Track ID : spotify:track:0qMip0B2D4ePEjBJvAtYre</p>
      <p>【　[Alexandros] / For Freedom 】Track ID : spotify:track:2IkJBK1hHGkfalA0hCbsui</p>
      <p>【　YOASOBI / 夜に駆ける 】Track ID : spotify:track:6MCjmGYlw6mQVWRFVgBRvB</p>
        <Header />
    </div>
  );
};

export default Home;
