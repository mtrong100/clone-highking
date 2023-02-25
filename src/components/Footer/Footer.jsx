import React from "react";
import Contact from "./Contact";
import FooterColumn from "./FooterColumn";
import ScrollTop from "./ScrollTop";

const Footer = () => {
  return (
    <footer className="bg-lightprimary">
      <div className="wrapper">
        <Contact></Contact>
        <FooterColumn></FooterColumn>
        <ScrollTop></ScrollTop>
      </div>
    </footer>
  );
};

export default Footer;
