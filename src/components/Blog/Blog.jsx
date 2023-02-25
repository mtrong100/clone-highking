import React from "react";
import ButtonFill from "../Header/ButtonFill";

const Blog = ({ blogContent, alternative }) => {
  return (
    <section id="Blogs">
      <div className="wrapper">
        <div
          className={`flex md:flex-row ${
            alternative ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col gap-5 md:gap-[80px] justify-between items-center mb-[130px]`}
        >
          <div className="flex-1">
            <img src={blogContent.image} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black mb-3 leading-normal">
              {blogContent.heading}
            </h1>
            <p className="text-[22px] text-textcolor font-normal mb-8 leading-relaxed">
              {blogContent.caption}
            </p>
            <ButtonFill>Contact Us</ButtonFill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
