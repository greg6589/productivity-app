import React from "react";

import FadeLoader from "react-spinners/FadeLoader";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={style.loader}>
        <FadeLoader
          color={"white"}
          height={20}
          size={500}
          speedMultiplier={1}
        />
      </div>
    </>
  );
};

export default Loader;
