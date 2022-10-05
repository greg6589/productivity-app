import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <FadeLoader
          color={"rgb(175, 94, 94)"}
          height={20}
          size={500}
          speedMultiplier={1}
        />
      </div>
    </>
  );
};

export default Loader;
