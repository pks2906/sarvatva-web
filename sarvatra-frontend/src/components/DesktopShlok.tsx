import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import left from "../assets/shlok/desktop/left-border.svg";
import right from "../assets/shlok/desktop/right-border.svg";
import text1 from "../assets/shlok/desktop/text1.svg"; 
import text2 from "../assets/shlok/desktop/text2.svg"; 
import text31 from "../assets/shlok/desktop/text3_1.svg";
import text41 from "../assets/shlok/desktop/text4_1.svg";
import dot from "../assets/shlok/desktop/dot.svg";
import text32 from "../assets/shlok/desktop/text3_2.svg";
import text42 from "../assets/shlok/desktop/text4_2.svg";
import text5 from "../assets/shlok/desktop/text5.svg";
import text6 from "../assets/shlok/desktop/text6.svg";
import text7 from "../assets/shlok/desktop/text7.svg";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

const DesktopShlok: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const images = [left, right, text1, text2, text31, text41, dot, text32, text42, text5, text6, text7];

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(images.map(src => loadImage(src)))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        // Handle error if necessary
        setIsLoading(false);
      });
  }, [images]);

  return (
    <div className="flex h-full w-full justify-center">
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <div></div>
        </div>
      ) : (
        <div className="flex gap-x-8">
          <motion.img
            src={left}
            alt="left shlok border"
            className="h-full"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <div className="flex flex-col items-center justify-center w-full gap-y-3">
            <motion.img
              src={text1}
              alt="shlok 1"
              className="w-full h-10"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text2}
              alt="shlok 1"
              className="w-full h-10"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <div className="flex w-full items-center justify-evenly">
              <div className="flex flex-col gap-y-3">
                <motion.img
                  src={text31}
                  alt="shlok 3-1"
                  className="w-full"
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
                <motion.img
                  src={text41}
                  alt="shlok 4-1"
                  className="w-full"
                  custom={5}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
              </div>
              <motion.img
                src={dot}
                alt="dot"
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
              <div className="flex flex-col gap-y-3">
                <motion.img
                  src={text32}
                  alt="shlok 3-2"
                  className="w-full"
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
                <motion.img
                  src={text42}
                  alt="shlok 4-2"
                  className="w-full"
                  custom={5}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
              </div>
            </div>
            <motion.img
              src={text5}
              alt="shlok 5"
              className="w-full h-10"
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text6}
              alt="shlok 6"
              className="w-full h-10"
              custom={7}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text7}
              alt="shlok 7"
              className="w-full h-10"
              custom={8}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
          </div>
          <motion.img
            src={right}
            alt="right shlok border"
            className="h-full"
            custom={9}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
        </div>
      )}
    </div>
  );
}

export default DesktopShlok;
