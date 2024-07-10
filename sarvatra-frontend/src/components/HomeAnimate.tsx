import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface HomeDynamicProps {
    image: string;
    shlok: string;
    desc: string;
}

const HomeAnimate = ({ image, shlok, desc }: HomeDynamicProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scaleDesktop = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div className="flex flex-col w-full my-10 md:my-40" ref={ref}>
      <div className="font-gotu text-[20px] md:text-[30px] mx-auto py-8 my-12 md:my-20 text-center px-4">
        <h1>{shlok}</h1>
        <p>{desc}</p>
      </div>
      <motion.div
        className="w-full h-auto md:h-[100vh] overflow-hidden"
      >
        <motion.img
          src={image}
          alt="Image"
          className="md:rounded-[40px] mx-auto w-full md:w-[900px] h-auto md:h-[750px]"
          style={{ scale: window.innerWidth < 768 ? scaleMobile : scaleDesktop }}
        />
      </motion.div>
    </div>
  );
}

export default HomeAnimate;
