import React from "react";
import { Link } from "react-router-dom";
import Style from './Footer.module.scss'

const Footer = () => {
  return (
    <div>
      <Link to="/">
          <button className={Style.btn}>HOME</button>
          </Link>
    </div>
  );
};

export default Footer;
