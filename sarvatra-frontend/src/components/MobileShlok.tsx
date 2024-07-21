// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import left from "../assets/shlok/desktop/left-border.svg";
// import right from "../assets/shlok/desktop/right-border.svg";
// import text1 from "../assets/shlok/mobile/text1.svg"; 
// import text2 from "../assets/shlok/mobile/text2.svg"; 
// import text3 from "../assets/shlok/mobile/text3.svg";
// import text41 from "../assets/shlok/mobile/text4_1.svg";
// import text42 from "../assets/shlok/mobile/text4_2.svg";
// import dot from "../assets/shlok/desktop/dot.svg";
// import text51 from "../assets/shlok/mobile/text5_1.svg";
// import text52 from "../assets/shlok/mobile/text5_2.svg";
// import text6 from "../assets/shlok/mobile/text6.svg";
// import text7 from "../assets/shlok/mobile/text7.svg";
// import text8 from "../assets/shlok/mobile/text8.svg";
// import text9 from "../assets/shlok/mobile/text9.svg";
// import text10 from "../assets/shlok/mobile/text10.svg";

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   visible: (i: number) => ({
//     opacity: 1,
//     transition: {
//       delay: i * 0.3, 
//       duration: 0.5,  
//     },
//   }),
// };

// const MobileShlok: React.FC = () => {
//   return (
//     <div className="flex h-[80%] w-[100%] justify-center">
//       <div className="flex">
//         <motion.img
//           src={left}
//           alt="left border"
//           width={45}
//           className='h-[100%]'
//           custom={0}
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         />
//         <div className="flex flex-col items-center justify-center gap-y-[0.1rem]">
//           <motion.img
//             src={text1}
//             alt="text 1"
//             className='w-[85%] h-[10%]'
//             custom={1}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <motion.img
//             src={text2}
//             alt="text 2"
//             className='w-[85%] h-[10%]'
//             custom={2}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <motion.img
//             src={text3}
//             alt="text 3"
//             className='w-[85%] h-[10%]'
//             custom={3}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <div className="flex justify-evenly h-[20%] w-[85%] my-[0.1rem]">
//             <div className="flex flex-col gap-y-[0.1rem]">
//               <motion.img
//                 src={text41}
//                 alt=""
//                 className='h-[45%]'
//                 custom={4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeIn}
//               />
//               <motion.img
//                 src={text51}
//                 alt=""
//                 className='h-[45%]'
//                 custom={6}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeIn}
//               />
//             </div>
//             <motion.img
//               src={dot}
//               alt="dot"
//               className='h-[90%] my-[0.1rem]'
//               custom={5}
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//             />
//             <div className="flex flex-col items-center gap-y-[0.2rem]">
//               <motion.img
//                 src={text42}
//                 alt=""
//                 className='h-[40%]'
//                 custom={4}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeIn}
//               />
//               <motion.img
//                 src={text52}
//                 alt=""
//                 className='h-[40%]'
//                 custom={6}
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeIn}
//               />
//             </div>
//           </div>
//           <motion.img
//             src={text6}
//             alt="text6"
//             className='w-[85%] h-[9%]'
//             custom={7}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <motion.img
//             src={text7}
//             alt="text7"
//             className='w-[85%] h-[10%]'
//             custom={8}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <motion.img
//             src={text8}
//             alt="text8"
//             className='w-[85%] h-[10%]'
//             custom={9}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <motion.img
//             src={text9}
//             alt="text9"
//             className='w-[85%] h-[10%]'
//             custom={10}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//           <motion.img
//             src={text10}
//             alt="text 10"
//             className='w-[85%] h-[10%]'
//             custom={11}
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//           />
//         </div>
//         <motion.img
//           src={right}
//           alt="right border"
//           width={45}
//           className='h-[100%]'
//           custom={12}
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         />
//       </div>
//     </div>
//   );
// };

// export default MobileShlok;

import React, { useState, useEffect } from 'react';
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
      delay: i * 0.3, 
      duration: 0.5,  
    },
  }),
};

const MobileShlok: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const images = [left, right, text1, text2, text3, text41, text42, dot, text51, text52, text6, text7, text8, text9, text10];

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
        setIsLoading(false);
      });
  }, [images]);

  return (
    <div className="flex h-[80%] w-[100%] justify-center">
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <div></div>
        </div>
      ) : (
        <div className="flex">
          <motion.img
            src={left}
            alt="left border"
            width={45}
            className='h-[100%]'
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
          <div className="flex flex-col items-center justify-center gap-y-[0.1rem]">
            <motion.img
              src={text1}
              alt="text 1"
              className="w-[85%] h-[10%]"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text2}
              alt="text 2"
              className="w-[85%] h-[10%]"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text3}
              alt="text 3"
              className="w-[85%] h-[10%]"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <div className="flex justify-evenly h-[20%] w-[85%] my-[0.1rem]">
              <div className="flex flex-col gap-y-[0.1rem]">
                <motion.img
                  src={text41}
                  alt=""
                  className="h-[45%]"
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
                <motion.img
                  src={text51}
                  alt=""
                  className="h-[45%]"
                  custom={6}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
              </div>
              <motion.img
                src={dot}
                alt="dot"
                className="h-[90%] my-[0.1rem]"
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              />
              <div className="flex flex-col items-center gap-y-[0.2rem]">
                <motion.img
                  src={text42}
                  alt=""
                  className="h-[40%]"
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                />
                <motion.img
                  src={text52}
                  alt=""
                  className="h-[40%]"
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
              className="w-[85%] h-[9%]"
              custom={7}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text7}
              alt="text7"
              className="w-[85%] h-[10%]"
              custom={8}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text8}
              alt="text8"
              className="w-[85%] h-[10%]"
              custom={9}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text9}
              alt="text9"
              className="w-[85%] h-[10%]"
              custom={10}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
            <motion.img
              src={text10}
              alt="text 10"
              className="w-[85%] h-[10%]"
              custom={11}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
          </div>
          <motion.img
            src={right}
            alt="right border"
            width={45}
            className="h-full flex-shrink-0"
            custom={12}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          />
        </div>
      )}
    </div>
  );
};

export default MobileShlok;
