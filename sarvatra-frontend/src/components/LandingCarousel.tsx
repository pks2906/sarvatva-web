import img1 from '../assets/carousel1.jpg';
import img2 from '../assets/carousel2.jpg';
import img3 from '../assets/carousel3.jpg';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const imgs = [
  img1, img2, img3
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 7;

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
      <TextOverlay />
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white backdrop-blur-sm bg-opacity-10 text-white px-4 py-2 rounded-md shadow-lg hover:bg-opacity-20 transition-all"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white backdrop-blur-sm bg-opacity-30 text-white px-4 py-2 rounded-md shadow-lg hover:bg-opacity-20 transition-all"
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

const TextOverlay = () => {
    return (
      <div className="absolute inset-0 top-[35%] left-[10%] text-white flex flex-col">
        <h1 className='font-staatliches text-6xl tracking-[0.125em] text-opacity-80'>VEDIC FURNITURE</h1>
        <p className='font-avenir font-light md:w-[30%] text-[20px] my-10'>Every piece is a sculptural artpiece. Each design is an intention, to manifest the cosmic mystery, into tangibility through organic forms and tactile textures, blending art with functionality.</p>
        <Link to={'/collection'}>
            <button className='md:w-[200px] border font-light text-sm font-avenir px-4 py-2 rounded-md backdrop-blur-sm hover:bg-white hover:text-black transition-all tracking-widest'>
                VIEW COLLECTION
            </button>
        </Link>
      </div>
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
            idx === imgIndex ? "bg-neutral-50" : "bg-white bg-opacity-30"
          }`}
        />
      ))}
    </div>
  );
};
