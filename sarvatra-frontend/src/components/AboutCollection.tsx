import DesktopShlok from './DesktopShlok';
import { useEffect, useState } from "react";
import MobileShlok from './MobileShlok';
import { motion } from "framer-motion"

const AboutCollection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
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

    if (isMobile) {
        return(
            <div className='h-[100vh] bg-[#131313] flex justify-center mx-auto'>
                <div className='relative flex flex-col items-center'>
                    <div className='flex h-[40vh] w-[90%] mt-20'>
                        <MobileShlok />
                    </div>
                    <div className='flex flex-col justify-center h-[40vh] mx-auto w-[80%] gap-y-[28px] text-center'>
                        <motion.p 
                            className='font-cormorant text-balance leading-[1.5rem] text-[#EDE6D6]'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda. 
                        </motion.p>
                        <motion.p 
                            className='font-cormorant text-balance leading-[1.5rem] text-[#EDE6D6]'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                        Our Collection ponders upon the mystery of what existed before creation of Cosmos and how the creation came about. 
                        </motion.p>
                    </div>
                </div>
                <div onClick={scrollToNext} className='absolute bottom-0 flex flex-col items-center w-full mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
                    <svg className="w-8 h-8 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                    <svg className="w-8 h-8 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                </div>
            </div>
        )
    }
  return (
    <div className='h-screen bg-[#131313] flex items-center justify-center'>
        <div className='flex mx-auto'>
            <div className='flex flex-col items-center text-start justify-center w-[40%] mx-auto'>
                <motion.p 
                    className='font-cormorant md:text-2xl md:w-[65%] mb-[30px] text-balance md:leading-9 leading-[1.75rem] text-[#EDE6D6]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda. 
                </motion.p>
                <motion.p 
                    className='font-cormorant text-balance md:text-2xl md:w-[65%] mb-[40px] md:leading-9 leading-[1.75rem] text-[#EDE6D6]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Our Collection ponders upon the mystery of what existed before creation of Cosmos and how the creation came about. 
                </motion.p>
            </div>
            <div className='w-[60%] min-w-[500px] flex items-center justify-center'>
                <DesktopShlok />
            </div>
        </div>
        <div onClick={scrollToNext} className='absolute bottom-3 flex flex-col items-center w-full mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
            <svg className="w-10 h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
            </svg>
            <svg className="w-10 h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
            </svg>
        </div>
    </div>
  )
}

export default AboutCollection