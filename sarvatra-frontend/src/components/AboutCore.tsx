import reconnect from '../assets/reconnect.jpg';
import engrave from '../assets/engrave.jpg';
import mind from '../assets/mind.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutCore = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center"
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <h1 className="text-4xl font-gotu mb-12 text-center">The Core</h1>
      <div className="flex flex-col md:flex-row w-full mt-4">
        <motion.div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0" variants={fadeInVariants}>
          <div className="overflow-hidden block rounded-full">
            <img
              src={reconnect}
              alt="Men with traditional makeup"
              className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
            />
          </div>
          <h1 className="font-gotu text-3xl my-8 text-center">ReConnecting</h1>
          <p className="font-avenir px-2 text-center text-lg w-2/3">
            with our roots through the route of Ancient Indian Vedas.
          </p>
        </motion.div>
        <motion.div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0" variants={fadeInVariants}>
          <div className="overflow-hidden block rounded-full">
            <img
              src={engrave}
              alt="Men with traditional makeup"
              className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
            />
          </div>
          <h1 className="font-gotu text-3xl my-8 text-center">ReImagining</h1>
          <p className="font-avenir px-2 text-center text-lg w-2/3">
            spaces through fusion of craftsmanship, design & technology.
          </p>
        </motion.div>
        <motion.div className="w-full md:w-1/3 flex flex-col items-center" variants={fadeInVariants}>
          <div className="overflow-hidden block rounded-full">
            <img
              src={mind}
              alt="Men with traditional makeup"
              className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
            />
          </div>
          <h1 className="font-gotu text-3xl my-8 text-center">ReDiscovering</h1>
          <p className="font-avenir px-2 text-center text-lg w-2/3">
            paths to well-being during these unprecedented times.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutCore;