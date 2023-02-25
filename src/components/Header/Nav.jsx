import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <a href="/">
        <img src={Logo} alt="logo" className="h-9 cursor-pointer" />
      </a>
      <ul className="md:flex hidden items-center gap-[30px]">
        <NavLinks></NavLinks>
      </ul>
      <i
        onClick={() => setOpen(!open)}
        className="fa-solid fa-bars text-3xl md:hidden"
      ></i>

      {/* mobile nav */}
      <ul
        className={`fixed top-0 z-99 right-0 bottom-0 bg-white shadow-2xl w-[250px] md:hidden flex flex-col gap-8 pt-6 px-5 transition-all ${
          open ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex justify-between items-center mb-6">
          <a href="/">
            <img src={Logo} alt="logo" className="h-9 cursor-pointer" />
          </a>
          <i
            onClick={() => setOpen(!open)}
            className="fa-solid fa-xmark text-3xl"
          ></i>
        </div>
        <NavLinks></NavLinks>
        <ButtonFill>Sign in</ButtonFill>
        <ButtonOutline>Sign up</ButtonOutline>
      </ul>
    </nav>
  );
};

export default Nav;
