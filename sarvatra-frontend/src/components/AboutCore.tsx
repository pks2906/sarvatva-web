import reconnect from '../assets/reconnect.jpg';
import engrave from '../assets/engrave.jpg';
import mind from '../assets/mind.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCore = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const fadeIn = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  return (
    <div ref={ref} className="min-h-screen flex flex-col items-center justify-center mb-28 sm:mt-8 mt-20">
      <h1 className="text-4xl font-gotu mb-16 text-center">The Core</h1>
      <div className="flex flex-col md:flex-row w-full mt-4">
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center py-8 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden block rounded-full">
            <img
              src={reconnect}
              alt="Men with traditional makeup"
              className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
            />
          </div>
          <h1 className="font-gotu text-2xl my-8 text-center">ReConnecting</h1>
          <p className="font-avenir font-light opacity-80 px-2 text-center text-lg w-2/3">
            with our roots through the route of Ancient Indian Vedas.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center py-8 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden block rounded-full">
            <img
              src={engrave}
              alt="Men with traditional makeup"
              className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
            />
          </div>
          <h1 className="font-gotu text-2xl my-8 text-center">ReImagining</h1>
          <p className="font-avenir font-light opacity-80 px-2 text-center text-lg w-2/3">
            spaces through fusion of craftsmanship, design & technology.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center py-8 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden block rounded-full">
            <img
              src={mind}
              alt="Men with traditional makeup"
              className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
            />
          </div>
          <h1 className="font-gotu text-2xl my-8 text-center">ReDiscovering</h1>
          <p className="font-avenir font-light opacity-80 px-2 text-center text-lg w-2/3">
            paths to well-being during these unprecedented times.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCore;
