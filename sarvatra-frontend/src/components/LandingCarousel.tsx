import img1 from '../assets/revised1.jpg';
import img2 from '../assets/revised2.jpg';
import img3 from '../assets/revised4.jpg';
import mob1 from '../assets/mobile2.jpg';
import mob2 from '../assets/mobile3.jpg';
import mob3 from '../assets/mobile4.jpg';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const imgs = [
  img2, img1, img3
];

const mobileImgs = [
  mob2, mob1, mob3
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 7;

const SLIDE_TRANSITION = {
  duration: 0.8,
  ease: "easeInOut",
};

export const LandingCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  if (isMobile) {
    return (
      <div className='relative overflow-hidden h-screen'>
        <motion.div
          animate={{
            translateX: `-${imgIndex * 100}vw`,
          }}
          transition={SLIDE_TRANSITION}
          className='flex'
          style={{
            width: `${mobileImgs.length * 100}vw`
          }}
        >
          <Images imgSrc={mobileImgs}/>
        </motion.div>
        <div className='absolute top-1 w-full h-screen flex flex-col justify-between items-center'>
          <div className='mt-[35%] text-center text-[#EDE6D6] text-opacity-80 mx-auto w-[80%]'>
            <h1 className="font-cormorant text-4xl mb-4">Vedic Furniture</h1>
            <p className='font-avenir mt-8 text-balance leading-[1.5rem]'>
            Each design is an intention, to manifest <span className='font-bold'>“That One”</span>, into tangibility through <b className='font-bold'>sculptural, organic</b> and <b className='font-bold'>tactile</b> forms, harmoniously blending art with functionality.
            </p>
          </div>
          <Link to={'/collection'}>
            <button
              className='text-[10px] mb-[30%] bg-white/10 shadow-lg backdrop-blur-sm tracking-widest border-[0.5px] font-avenir font-medium border-[#EDE6D6] py-2 px-4 rounded-md text-[#EDE6D6]'
            >
              VIEW COLLECTION
            </button>
          </Link>
        </div>
        <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white backdrop-blur-sm bg-opacity-10 text-white p-1 rounded-md shadow-lg hover:bg-opacity-20 transition-all"
        onClick={handlePrev}
      >
        <svg className="w-5 h-5 text-[#ede6d6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white backdrop-blur-sm bg-opacity-10 text-white p-1 rounded-md shadow-lg hover:bg-opacity-20 transition-all"
        onClick={handleNext}
      >
        <svg className="w-5 h-5 text-[#ede6d6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
        </svg>

      </button>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
    )
  }

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
        <Images imgSrc={imgs}/>
      </motion.div>
      <TextOverlay />
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white backdrop-blur-sm bg-opacity-10 text-white p-2 rounded-md shadow-lg hover:bg-opacity-20 transition-all"
        onClick={handlePrev}
      >
        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white backdrop-blur-sm bg-opacity-10 text-white p-2 rounded-md shadow-lg hover:bg-opacity-20 transition-all"
        onClick={handleNext}
      >
        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
        </svg>
      </button>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imgSrc }: { imgSrc: string[]}) => {
  return (
    <>
      {imgSrc.map((img, idx) => (
        <div
          key={idx}
          style={{
            backgroundImage: `url(${img})`,
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
      <div className="absolute inset-0 top-[35%] left-[10%] text-[#EDE6D6] flex flex-col">
        <h1 className='font-cormorant text-6xl md:mb-[8px]'>Vedic Furniture</h1>
        <p className='font-avenir text-balance font-light md:w-[30%] text-[20px] leading-9 my-10'>
          Each design is an intention, to manifest <span className='font-bold'>“That One”</span>, into tangibility through <b className='font-bold'>sculptural, organic</b> and <b className='font-bold'>tactile</b> forms, harmoniously blending art with functionality.
        </p>
        <Link to={'/collection'}>
            <button className='md:w-[200px] font-medium text-sm font-avenir px-4 py-2 rounded-md bg-white/10 border-[0.5px] border-[#ede6d6] md:mt-[28px] hover:bg-[#ede6d6] hover:text-[#131313] shadow-lg transition-all tracking-widest backdrop-blur-sm'>
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
          className={`h-2 w-2 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-white bg-opacity-30"
          }`}
        />
      ))}
    </div>
  );
};
