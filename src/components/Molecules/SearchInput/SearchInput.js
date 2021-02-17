import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Style from "./SearchInput.module.scss";
import Header from "../Header/Header";

const SearchInput = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") {
      alert("IDを入力してください");
    } else if (term.startsWith("s")) {
      const ret = term.replace("spotify:track:", "");
      history.push(`/Search?query=${ret}`);
    } else {
      history.push(`/search?query=${term}`);
    }
  };

  return (
    <>
      <Header />
      <div className={Style.container}>
        <form onSubmit={handleSubmit} className={Style.wrapper}>
          <input
            type="text"
            placeholder="Track IDを入力してください"
            // 値が変更されるたびにstateを更新
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          <button className={Style.btn} type="submit">
            検索
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchInput;
