import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/about-hero-bg.svg';
import mob from '../assets/about-hero-mobile.svg';

const AboutHero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: i * 1
            }
        })
    };

    const typewriterTextMobile = [
        "“Wholeness is a craft, ",
        "nurtured and revealed ",
        "through the flow of ",
        "everyday living.”"
    ];

    const typewriterTextDesktop = [
        "“Wholeness is a craft, nurtured and revealed",
        "through the flow of everyday living.”"
    ];

    const typewriterText = isMobile ? typewriterTextMobile : typewriterTextDesktop;

    return (
        <div className='h-screen bg-[#131313] relative overflow-hidden'>
            <img src={isMobile ? mob : bg} alt='sarvatva muted logo' className='absolute top-0 left-0 h-[102.5%] object-cover'/>
            <div className='h-full flex justify-center items-center'>
                <div className='relative flex flex-col items-center justify-between text-center gap-y-6 md:gap-y-2'>
                    {typewriterText.map((text, index) => (
                        <motion.h1
                            key={index}
                            className='text-[#EDE6D6]/80 text-4xl md:text-6xl font-light italic font-cormorant px-4 md:px-8 w-full md:w-9/10'
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={fadeInVariants}
                        >
                            {text}
                        </motion.h1>
                    ))}
                    <motion.p
                        className='text-[#EDE6D6]/80 text-lg md:text-xl font-avenir absolute top-[115%] md:top-[125%]'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        custom={typewriterText.length}
                    >
                        - SARVATVA
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
