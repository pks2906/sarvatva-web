import founder1 from '../assets/founder.jpg';
import founder2 from '../assets/founder2.png';
import founder3 from '../assets/founder3.png';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutTeam = () => {
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
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-0 py-8 mt-8"
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <h1 className="text-4xl font-gotu text-center">The Alchemists</h1>
      <p className='mb-8 mt-2 font-avenir text-neutral-500 text-lg text-center'>Crafting Extraordinary from the Mundane</p>
      <div className='flex flex-col md:flex-row w-full mt-4'>
        <motion.div className='w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0' variants={fadeInVariants}>
          <div className='overflow-hidden block rounded-full'>  
              <img src={founder1} alt="Tejaswi Pathak" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
          </div>
          <h1 className='font-gotu text-3xl mt-8 mb-2 text-center'>Tejaswi Pathak</h1>
          <p className='font-avenir text-xl mt-2 mb-2 text-center'>Indology Guru</p>
          <p className='font-avenir text-neutral-400 w-3/4 md:w-1/2 text-center mb-2'>National Institute of Fashion Technology, India</p>
          <p className='font-avenir px-2 text-center text-lg w-2/3'>more...</p>
        </motion.div>
        <motion.div className='w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0' variants={fadeInVariants}>
          <div className='overflow-hidden block rounded-full'>
              <img src={founder3} alt="Iteesha Agrawal" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
          </div>
          <h1 className='font-gotu text-3xl mt-8 mb-2 text-center'>Iteesha Agrawal</h1>
          <p className='font-avenir text-xl mt-2 mb-2 text-center'>Creative Mystic</p>
          <p className='font-avenir text-neutral-400 w-3/4 md:w-1/2 text-center mb-2'>National Institute of Fashion Technology, India</p>
          <p className='font-avenir px-2 text-center text-lg w-2/3'>more...</p>
        </motion.div>
        <motion.div className='w-full md:w-1/3 flex flex-col items-center' variants={fadeInVariants}>
          <div className='overflow-hidden block rounded-full'>
              <img src={founder2} alt="Ishita Srivastava" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
          </div>
          <h1 className='font-gotu text-3xl mt-8 mb-2 text-center'>Ishita Srivastava</h1>
          <p className='font-avenir text-xl mt-2 mb-2 text-center'>Design Wizard</p>
          <p className='font-avenir text-neutral-400 w-3/4 md:w-1/2 text-center mb-2'>Politecnico di Milano, Milan & National Institute of Fashion Technology, India</p>
          <p className='font-avenir px-2 text-center text-lg w-2/3'>more...</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutTeam;