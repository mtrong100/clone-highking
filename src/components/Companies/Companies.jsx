import React from "react";
import { companies } from "../../Data.jsx";

const Companies = () => {
  return (
    <section>
      <div className="wrapper">
        <p className="text-center text-xl text-primary font-medium mb-[10px]">
          Safe Journey
        </p>
        <h1 className="text-center font-semibold text-black text-5xl md:text-6xl">
          Trusted by Big Companies
        </h1>
        <ul className="flex flex-wrap gap-14 my-[100px] justify-center">
          {companies.map((item, id) => (
            <li key={id}>
              <img src={item.image} className="h-8 md:h-10" alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Companies;
