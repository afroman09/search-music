import React from "react";
import { Link } from "react-router-dom";

const ReturnBtn = () => {
  return (
    <div>
      <Link to="/Search">
        <button>←</button>
      </Link>
    </div>
  );
};

export default ReturnBtn;
