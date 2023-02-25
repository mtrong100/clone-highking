import React from "react";
// import images
import star from "../../assets/Star.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { userAvatar } from "../../Data.jsx";

const Reviews = () => {
  return (
    <section className="mb-[118px]" id="Testimonials">
      <div className="wrapper">
        <p className="text-center text-xl text-primary font-medium mb-[10px]">
          Happy Hikers
        </p>
        <h1 className="text-center font-semibold text-black text-5xl md:text-6xl">
          Client’s Say About Us
        </h1>

        <div className="mt-[104px]">
          <Swiper
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 1,
              },
            }}
            style={{ paddingBottom: "100px" }}
            className="mySwiper"
          >
            {userAvatar.map((item, id) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col justify-center shadow-xl rounded-md h-[360px] py-8 px-4 border border-red">
                  <div className="w-20 h-20 mx-auto">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={item.image}
                      alt="user"
                    />
                  </div>
                  <h3 className="text-center font-semibold text-2xl text-black">
                    {item.name}
                  </h3>
                  <p className="text-center text-lg text-red font-normal mb-5">
                    Happy Client
                  </p>
                  <p className="text-center text-lg text-textcolor font-normal mb-3 max-w-[612px] mx-auto">
                    {item.reply}
                  </p>
                  <div className="flex gap-1 justify-center">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
