import React from "react";

import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <>
      <div className="loader">
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
