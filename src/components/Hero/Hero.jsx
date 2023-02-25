import React from "react";
import HeroImg from "../../assets/Hero.png";
import ButtonFill from "../Header/ButtonFill";
import ButtonOutline from "../Header/ButtonOutline";

const Hero = () => {
  return (
    <section id="top" className="bg-hero bg-cover bg-center pt-20">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row justify-between pt-12 lg:pt-[100px] gap-3">
          <div className="flex-1">
            <h1 className="font-semibold tracking-[0.01em] lg:text-6xl md:text-4xl text-3xl mb-[10px]">
              Be prepared for the mountains and beyond.
            </h1>
            <p className="text-lg md:text-[22px] mb-[52px] font-medium md:leading-[calc(33/22)] max-w-[459px] text-grayblue">
              Are you looking for amazing hiking travel? Don’t worry! We got it
              for you!
            </p>
            <div className="flex gap-[28px] flex-wrap">
              <ButtonFill>Contact Us</ButtonFill>
              <ButtonOutline>Watch video</ButtonOutline>
            </div>
          </div>
          <div className="flex-1">
            <img className="mt-3" src={HeroImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
