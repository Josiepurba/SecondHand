import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import poster from "../img/Baner.jpg";
import poster1 from "../img/Baner.jpg";

const featuredProducts = [poster, poster1, poster, poster1];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="relative w-full select-none">
      <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-between px-3">
        <button
          className="cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100"
          onClick={handleOnPrevClick}
        ></button>
        <button
          className="cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100"
          onClick={handleOnNextClick}
        ></button>
      </div>
    </div>
  );
}
