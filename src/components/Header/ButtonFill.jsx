import React from "react";

const ButtonFill = ({ children }) => {
  return (
    <button className="btn-primary w-full md:w-auto bg-primary lg:px-[40px] inline-block py-[15px] text-white rounded-full shadow-buttonShadow lg:text-lg font-semibold lg:leading-[calc(32/18)] text-base relative isolate overflow-hidden px-[30px] md:px-[20px] md:py-[12px]">
      {children}
    </button>
  );
};

export default ButtonFill;
