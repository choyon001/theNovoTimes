import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center  items-center ">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;
