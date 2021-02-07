import React from "react";
import { Link } from "react-router-dom";
import TopImg from '../Img/Top-Img1.jpeg'

const Home = () => {
  return (
    <div>
      <h2>Welcom to Search Music</h2>
      <p>このアプリはあなたのお気に入りの曲を分析します</p>
      <h3>How to Search Music?</h3>
      <p>IDをコピーしよう</p>
      <img src={TopImg} alt="画像" width="50%" height="50%"/>
      <p>Test ID : 7wjmwD5nIYWVnHiR3X3PTO</p>
      <Link to="/Search">
        <button>START</button>
      </Link>
    </div>
  );
};

export default Home;
