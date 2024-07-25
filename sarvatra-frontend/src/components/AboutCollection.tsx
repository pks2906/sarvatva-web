import DesktopShlok from './DesktopShlok';
import { useEffect, useState } from "react";
import MobileShlok from './MobileShlok';
import { motion } from "framer-motion";

const AboutCollection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (isMobile || isTablet) {
    return (
      <div className='h-[100vh] bg-[#131313] flex justify-center mx-auto'>
        <div className='relative flex flex-col items-center'>
          <div className='flex h-[40vh] w-[90%] mt-20'>
            <MobileShlok />
          </div>
          <div className='flex flex-col justify-center h-[40vh] mx-auto w-[80%] md:w-[60%] gap-y-[28px] text-center'>
            <motion.p
              className='font-cormorant text-balance md:text-xl leading-[1.5rem] text-[#EDE6D6]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda.
            </motion.p>
            <motion.p
              className='font-cormorant text-balance md:text-xl leading-[1.5rem] text-[#EDE6D6]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              The collection narrates the story of how creation began from that one Supreme Consciousness.
            </motion.p>
            <motion.p
              className='font-cormorant text-balance md:text-xl leading-[1.5rem] text-[#EDE6D6]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              The seven exquisite creation takes us on a journey 13.8 Billion years back in time whence a desire manifested into the profound creation we call the Cosmos.
            </motion.p>
          </div>
        </div>
        <div onClick={scrollToNext} className='absolute bottom-0 flex flex-col items-center w-full mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
          <svg className="w-8 h-8 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
          <svg className="w-8 h-8 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className='h-screen bg-[#131313] flex items-center justify-center'>
      <div className='flex mx-auto flex-col md:flex-row items-center justify-center'>
        <div className='flex flex-col items-center text-start justify-center w-[90%] md:w-[40%] mx-auto md:mb-0 mb-10'>
          <motion.p
            className='font-cormorant md:text-xl md:w-[80%] mb-4 md:mb-[30px] text-balance md:leading-9 leading-[1.75rem] text-[#EDE6D6]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda.
          </motion.p>
          <motion.p
            className='font-cormorant text-balance md:text-xl md:w-[80%] mb-4 md:mb-[30px] md:leading-9 leading-[1.75rem] text-[#EDE6D6]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The collection narrates the story of how creation began from that one Supreme Consciousness.
          </motion.p>
          <motion.p
            className='font-cormorant text-balance md:text-xl md:w-[80%] mb-4 md:mb-[30px] md:leading-9 leading-[1.75rem] text-[#EDE6D6]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The seven exquisite creation takes us on a journey 13.8 Billion years back in time whence a desire manifested into the profound creation we call the Cosmos.
          </motion.p>
        </div>
        <div className='w-full md:w-[60%] min-w-[300px] flex items-center justify-center'>
          <DesktopShlok />
        </div>
      </div>
      <div onClick={scrollToNext} className='absolute bottom-3 flex flex-col items-center w-full mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
        <svg className="w-10 h-10 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
        </svg>
        <svg className="w-10 h-10 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default AboutCollection;
