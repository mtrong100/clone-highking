import React from "react";
import mail from "../../assets/mail.png";
import ButtonFill from "../Header/ButtonFill";
const Contact = () => {
  return (
    <section
      id="Contact"
      className="pt-12 md:pt-[118px] pb-[98px] text-center max-w-[637px] mx-auto"
    >
      <h1 className="text-3xl md:text-[40px] font-semibold text-black leading-[calc(59/40)]">
        Subscribe to Our Newsletter For Weekly Article Update.
      </h1>
      <p className="mt-[30px] text-textcolor text-base md:text-lg font-normal leading-[calc(26/18)]">
        We have hiking-related blog so we can share our thought and rutinity in
        our blog that updated weekly. We will not spam you, we promise.
      </p>
      <div className="mt-7 md:mt-[76px] flex-col flex md:flex-row items-center gap-[19px] justify-between">
        <div className="py-4 px-6 border border-primary flex gap-4 rounded-full items-center flex-1 w-full">
          <img className="h-5" src={mail} alt="mail-icon" />
          <input
            className="bg-transparent outline-none w-full placeholder-primary"
            placeholder="Enter your e-mail address"
            type="text"
          />
        </div>
        <div className="w-full md:w-auto">
          <ButtonFill>Subscribe</ButtonFill>
        </div>
      </div>
    </section>
  );
};

export default Contact;
