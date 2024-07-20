import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/about-hero-bg.svg'
import mob from '../assets/about-hero-mobile.svg'

const AboutHero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const typewriterText = "“Wholeness is a craft, nurtured and revealed through the flow of everyday living.”";
    
    const typewriterVariants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
            }
        })
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
                delay: 7.5
            }
        }
    };

  return (
    <div className='h-screen bg-[#131313] relative overflow-hidden'>
        <img src={isMobile ? mob : bg} alt='sarvatva muted logo' className='absolute top-0 left-0 h-[102.5%] object-cover'/>
        <div className='h-full flex justify-center items-center'>
            <div className='relative flex flex-col items-center justify-between text-center'>
                <motion.h1 
                    className='text-[#EDE6D6]/80 text-4xl md:text-6xl italic font-cormorant leading-[4.25rem] md:leading-[7rem] text-balance px-2 md:px-0 w-[95%] md:w-[80%]'
                    initial="hidden"
                    animate="visible"
                    variants={typewriterVariants}
                >
                    {typewriterText.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={typewriterVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                </motion.h1>
                <motion.p 
                    className='text-[#EDE6D6]/80 text-lg md:text-xl font-avenir absolute top-[115%] md:top-[125%]'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    - SARVATVA
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default AboutHero