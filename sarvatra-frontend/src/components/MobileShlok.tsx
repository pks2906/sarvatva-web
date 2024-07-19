import React from 'react';
import { motion, Variants } from 'framer-motion';
import left from "../assets/shlok/desktop/left-border.svg";
import right from "../assets/shlok/desktop/right-border.svg";
import text1 from "../assets/shlok/mobile/text1.svg"; 
import text2 from "../assets/shlok/mobile/text2.svg"; 
import text3 from "../assets/shlok/mobile/text3.svg";
import text41 from "../assets/shlok/mobile/text4_1.svg";
import text42 from "../assets/shlok/mobile/text4_2.svg";
import dot from "../assets/shlok/desktop/dot.svg";
import text51 from "../assets/shlok/mobile/text5_1.svg";
import text52 from "../assets/shlok/mobile/text5_2.svg";
import text6 from "../assets/shlok/mobile/text6.svg";
import text7 from "../assets/shlok/mobile/text7.svg";
import text8 from "../assets/shlok/mobile/text8.svg";
import text9 from "../assets/shlok/mobile/text9.svg";
import text10 from "../assets/shlok/mobile/text10.svg";

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

const MobileShlok: React.FC = () => {
  return (
    <div className="flex h-[350px] w-[350px] mx-auto">
      <div className="flex gap-x-2">
        <motion.img
          src={left}
          alt="left border"
          width={55}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        />
        <div className="flex flex-col items-center justify-center gap-y-2">
          <motion.img
            src={text1}
            alt="text 1"
            width={230}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text2}
            alt="text 2"
            width={210}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text3}
            alt="text 3"
            width={215}
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <div className="flex gap-x-2">
            <div className="flex flex-col gap-y-3">
              <motion.img
                src={text41}
                alt=""
                width={43}
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
              <motion.img
                src={text51}
                alt=""
                width={65}
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
            </div>
            <motion.img
              src={dot}
              alt="dot"
              width={58}
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <div className="flex flex-col items-end gap-y-3">
              <motion.img
                src={text42}
                alt=""
                width={72}
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
              <motion.img
                src={text52}
                alt=""
                width={38}
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
            </div>
          </div>
          <motion.img
            src={text6}
            alt="text6"
            width={210}
            custom={7}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text7}
            alt="text7"
            width={242}
            custom={8}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text8}
            alt="text8"
            width={242}
            custom={9}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text9}
            alt="text9"
            width={210}
            custom={10}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <motion.img
            src={text10}
            alt="text 10"
            width={160}
            custom={11}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
        </div>
        <motion.img
          src={right}
          alt="right border"
          width={55}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        />
      </div>
    </div>
  );
};

export default MobileShlok;
