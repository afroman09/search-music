import React from "react";
import { Link } from "react-router-dom";
import Style from './Footer.module.scss'

const Footer = () => {
  return (
    <div>
      <Link to="/">
          <button className={Style.btn}>ホームへ戻る</button>
          </Link>
    </div>
  );
};

export default Footer;
