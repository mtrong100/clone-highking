import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="btn-secondary w-full md:w-auto bg-transparent border border-primary lg:px-[40px] inline-block py-[15px] text-primary rounded-full shadow-buttonShadow lg:text-lg text-base font-semibold md:leading-[calc(32/18)] relative overflow-hidden transition-all px-[30px] md:px-[20px] md:py-[12px]">
      {children}
    </button>
  );
};

export default ButtonOutline;
