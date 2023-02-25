import React from "react";
import { about } from "../../Data.jsx";

const About = () => {
  return (
    <section className="mt-[80px] mb-[76px]" id="Location">
      <div className="wrapper">
        <ul className="bg-white lg:grid-cols-3 grid-cols-1 grid shadow-aboutShadow p-[66px] gap-[102px]">
          {about.map((item, id) => (
            <li key={id}>
              <img src={item.icon} alt="" className="h-[76px] mb-[28px]" />
              <h3 className="text-black font-semibold text-xl mb-[12px]">
                {item.title}
              </h3>
              <p className="text-textcolor font-normal text-lg">{item.desc}</p>
              <button className="text-lg text-red font-normal hover:underline">
                Read More
              </button>
            </li>
          ))}
        </ul>
        <p className="text-lg text-textcolor text-center mb-[56px]">
          Don’t hesitate to contact us to get better Information.
          <span className="text-lg text-red font-bold italic">
            EXPLORE ALL TREKKING.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
