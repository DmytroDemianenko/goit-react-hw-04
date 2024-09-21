import React from "react";
import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Watch
        visible={true}
        height="60"
        width="60"
        radius="35"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
