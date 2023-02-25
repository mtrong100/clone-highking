import React from "react";

const ScrollTop = () => {
  return (
    <a
      href="#top"
      className="w-16 h-16 flex items-center justify-center rounded-full fixed right-4 z-99 bottom-2 bg-primary"
    >
      <i className="text-xl fa-solid fa-arrow-up text-white"></i>
    </a>
  );
};

export default ScrollTop;
