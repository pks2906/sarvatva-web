import img1 from '../assets/display1.jpg';
import img2 from '../assets/display2.jpg';
import img3 from '../assets/display3.jpg';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";

const imgs = [
  img1, img2, img3
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const SLIDE_TRANSITION = {
  duration: 0.8,
  ease: "easeInOut",
};

export const LandingCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const handlePrev = () => {
    setImgIndex((pv) => (pv === 0 ? imgs.length - 1 : pv - 1));
  };

  const handleNext = () => {
    setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <motion.div
        animate={{
          translateX: `-${imgIndex * 100}vw`,
        }}
        transition={SLIDE_TRANSITION}
        className="flex"
        style={{ width: `${imgs.length * 100}vw` }}
      >
        <Images />
      </motion.div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &#8594;
      </button>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = () => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
          }}
          className="shrink-0"
        />
      ))}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="absolute bottom-4 w-full flex justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};
