import React from 'react';
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
      delay: i * 0.3, // delay between each animation
      duration: 0.5,  // duration of the animation
    },
  }),
};

const DesktopShlok: React.FC = () => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex gap-x-8">
        <motion.img
          src={left}
          alt="left shlok border"
          className='h-[100%]'
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        />
        <div className="flex flex-col items-center justify-center w-[100%] gap-y-3">
          <motion.img
            src={text1}
            alt="shlok 1"
            className='w-[100%] h-[10%]'
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text2}
            alt="shlok 1"
            className='w-[100%] h-[10%]'
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <div className="flex w-[100%] items-center justify-evenly">
            <div className="flex flex-col gap-y-3">
              <motion.img
                src={text31}
                alt="shlok 3-1"
                className='w-[100%]'
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
              <motion.img
                src={text41}
                alt="shlok 4-1"
                className='w-[100%]'
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
                className='w-[100%]'
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
              <motion.img
                src={text42}
                alt="shlok 4-2"
                className='w-[100%]'
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
            className='w-[100%] h-[10%]'
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text6}
            alt="shlok 6"
            className='w-[100%] h-[10%]'
            custom={7}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text7}
            alt="shlok 7"
            className='w-[100%] h-[10%]'
            custom={8}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
        </div>
        <motion.img
          src={right}
          alt="right shlok border"
          className='h-[100%]'
          custom={9}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        />
      </div>
    </div>
  );
}

export default DesktopShlok;
