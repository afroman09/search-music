import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Style from "./Header.module.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") {
      alert("IDを入力してください");
    } else if (term.startsWith("s")) {
      const ret = term.replace("spotify:track:", "");
      history.push(`/Search?query=${ret}`);
    }else {
      alert('IDに誤りがあります')
    }
  };

  return (
    <div className={Style.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="IDを入力してください"
          // 値が変更されるたびにstateを更新
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button className={Style.btn} type="submit">
          検索
        </button>
      </form>
    </div>
  );
};

export default Header;
