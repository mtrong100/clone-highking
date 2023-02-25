import React from "react";
import { footerLink } from "../../Data.jsx";
import logo from "../../assets/logo.png";
import facebook from "../../assets/f.png";
import twitter from "../../assets/t.png";
import instagram from "../../assets/i.png";

const FooterColumn = () => {
  return (
    <section className="pb-6">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1 md:mb-6">
            <img src={logo} className="h-10" alt="logo" />
            <p className="text-xl text-textcolor font-normal max-w-[341px] mt-4 mb-12">
              We envision a world where everyone feels welcome in the American
              hiking community.
            </p>
            <div className="flex gap-4">
              <img src={facebook} className="h-[50px]" alt="" />
              <img src={twitter} className="h-[50px]" alt="" />
              <img src={instagram} className="h-[50px]" alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-wrap gap-20">
            {footerLink.map((item, id) => (
              <ul key={id} className="flex flex-col gap-2 md:gap-4">
                <h1 className="font-medium text-black text-xl leading-[calc(36/20)] mb-2">
                  {item.title}
                </h1>
                {item.links.map((link, id) => (
                  <li className="text-lg text-textcolor" key={id}>
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-20 md:mt-[100px]">
          <p className="text-base md:text-xl text-center text-textcolor font-normal">
            Copyright © 2021. All Right Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterColumn;
