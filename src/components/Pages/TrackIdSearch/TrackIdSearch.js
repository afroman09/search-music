import React from "react";
import SearchInput from "../../Molecules/SearchInput/SearchInput";
import Style from "./TrackIdSearch.module.scss";
import trackSearchImg from "../../Atoms/assets/Img/trackSearch-Img1.jpeg";

const TrackIdSearch = () => {
  return (
    <div>
      <SearchInput />
      <div className={Style.container}>
        <img className={Style.img} src={trackSearchImg} alt="画像" />
        <div className={Style.textArea}>
          <h3>IDの取得方法</h3>
          <p>
            検索したい楽曲ページにアクセスし、
            <br />
            【 ... 】で詳細を開きます
            <br />
            <br />
            【 Spotify URL コピー 】を選択すれば取得可能です
          </p>
        </div>
        <div className={Style.trackId}>
        <h3>Test Track Idはこちら</h3>
        <p>
          【 ヨルシカ / ただ君に晴れ 】
          <br />
          spotify:track:3wJHCry960drNlAUGrJLmz
        </p>
        <p>
          【 Laszlo / Supernova 】
          <br />
          spotify:track:4zIAj6F6UhV88Yat35oFNA
        </p>
        <p>
          【 BTS / Dynamite 】 
          <br />
          spotify:track:4saklk6nie3yiGePpBwUoc
        </p>
        <p>
          【 LiSA / 紅蓮花 】 
          <br />
          spotify:track:0qMip0B2D4ePEjBJvAtYre
        </p>
        <p>
          【 [Alexandros] / For Freedom 】
          <br />
          spotify:track:2IkJBK1hHGkfalA0hCbsui
        </p>
        <p>
          【 YOASOBI / 夜に駆ける 】
          <br />
          spotify:track:6MCjmGYlw6mQVWRFVgBRvB
        </p>
        </div>
      </div>
    </div>
  );
};

export default TrackIdSearch;
