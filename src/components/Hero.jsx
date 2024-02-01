import React, { useEffect, useState } from "react";
import { Slide } from "./Slide";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderList,setSliderList ] = useState(JSON.parse(localStorage.getItem('sliderList')))
  useEffect(()=>{
    setSliderList(JSON.parse(localStorage.getItem('sliderList')))
  },[localStorage.getItem('sliderList')])

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div
      id="indicators-carousel"
      className=" w-full h-full items-center flex justify-between"
      data-carousel="static"
    >
      <button
        type="button"
        className=" flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
        data-carousel-prev
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <div className="relative h-56 overflow-hidden flex items-center rounded-lg md:h-96 ">
        {sliderList?.map((item, index) => {
          const { desc, heading, image,_id } = item;
          return (
            <Link to={`/sliderFormForm/${_id}`} key={_id}>
            <div
              className={`duration-700 ease-in-out ${
                currentSlide === index ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <Slide title={heading} desc={desc} img={image} />
            </div>
            </Link>
          );
        })}
      </div>
      <button
        type="button"
        className=" flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
        data-carousel-next
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
