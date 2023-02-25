import React from "react";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="fixed top-0 z-50 left-0 right-0 transition-all py-5 bg-lightprimary">
      <div className="wrapper">
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
