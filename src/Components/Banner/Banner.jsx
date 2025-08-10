import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../../App.css";

import { motion } from "framer-motion";
import { Link } from "react-router";

const slidesData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/YTc7s0f7/banner-1.jpg",
    title: "Discover Your Next Favorite Book",

    description: "Explore a world of stories, from fantasy to non-fiction.",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/yFgXgdM7/bookstore-library-interior-with-books-racks-107791-30393.jpg",
    title: "Discover and Share Great  Books",
    description:
      "Read community reviews and upvote your favorites. Help others find the next great read",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/xK3ThQZS/The-Bookshelf.jpg",
    title: "Track Your Reading Progress",
    description:
      "Stay motivated with visual progress tracking and reach your reading goals faster.",
  },
];

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="md:h-[540px] mt-[50px] md:mt-[81px] md:container mx-auto rounded-br-md rounded-bl-2xl h-[350px]"
    >
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {slidesData.map(({ id, image, title, description }) => (
          <SwiperSlide key={id}>
            <div
              className="relative rounded-br-md rounded-bl-md bg-no-repeat bg-cover bg-center flex justify-center items-center "
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-br-md rounded-bl-md"></div>

              {/* Content */}
              <div className="h-full z-50 md:mt-67 mt-35 flex flex-col justify-center items-center p-4">
                <div className="  text-white">
                  <h1 className="md:text-[40px] text-2xl  font-bold">
                    {title}
                  </h1>
                  <p className="md:mt-4 mt-2 md:text-[20px] text-[15px] font-medium">
                    {description}
                  </p>
                  <Link to={"/Bookshelf"}>
                    <button className="md:px-5 md:py-3 px-3 py-2 mt-2 bg-[#2198D4] hover:bg-[#26AAED] text-white md:text-[20px] text-[17px] font-semibold rounded-4xl">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;
