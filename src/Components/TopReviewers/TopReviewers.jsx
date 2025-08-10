import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import man2 from '../../assets/ahmudulla.avif'
import man3 from '../../assets/humaun.jpg'
import man4 from '../../assets/munjarin.avif'
import man5 from '../../assets/kh.jpg'

const testimonials = [
  {
    image: man5,
    name: "Junayed Ahmed",
    review:"45",
    Book:"Harry Potter and the Prisoner of Azkaban",
    text: `The most thrilling entry in the series! The time-turner plot was clever, and the new characters added depth`,
  },
  {
    image: man2,
    name: "Manik Khan",
    review:"42",
    Book:"The Kite Runner",
    text: `"An emotional rollercoaster. A gripping story of friendship, guilt, and redemption set against a rich cultural backdrop."`,
  },
  {
    image: man3,
    name: "Shihab Islam",
    review:"39",
    Book:"The Hobbit",
    text: `"A magical adventure filled with charm and courage. Tolkien's world is rich, immersive, and unforgettable"`,
  },
  {
    image: man4,
    name: "Rebeca-M",
    review:"32",
    Book:"A Brief History of Humankind",
    text: `"Mind-expanding and thought-provoking. This book completely changed how I view human history and civilization."`,
  },
];

const TopReviewers = () => {
  return (
    <div className="md:container md:mx-auto mt-7 md:my-15 mx-2">
      <h1 className="md:text-[36px] text-[28px] font-bold text-gray-700 text-center mb-6">Top Reviewers</h1>
      

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="pb-16 " // 👈 Added padding-bottom
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row pt-5  bg-white justify-center gap-15 text-center md:text-left">
              <img
                src={item.image}
                alt={item.name}
                className="w-42 h-42 rounded-full object-cover mx-auto md:mx-0"
              />
              <div className="text-center max-w-2xl">
                 <p className="mt-4  font-semibold text-black">
                 Name : {item.name}
                </p>
                <p className="text-yellow-800 font-bold mb-4">Review : {item.review}</p>

                <p className="text-[27px] font-semibold">One review:</p>
                <p className="font-semibold">Book Name : {item.Book}</p>
                <p className="text-black font-semibold text-lg leading-relaxed italic mb-8">
                  {item.text}
                </p>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopReviewers;