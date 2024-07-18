import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import vid from '../assets/about-hero-vid.mp4';

const AboutHero = () => {
    const [scrolled, setScrolled] = useState(false);
    const [fadeHeading, setFadeHeading] = useState(0);

    useEffect(() => {
        setFadeHeading(1);

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className="relative h-[130vh] font-gotu bg-[#4e1b0a]">
        <video 
            className=" top-0 left-0 w-full h-[100vh] sticky object-cover opacity-90"
            src={vid}
            autoPlay
            playsInline
            loop
            muted
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${scrolled ? 'bg-[#301105] bg-opacity-70' : ''}`}>
            <motion.h1 
                className={`text-[#B65217] mt-44 md:mt-6 text-4xl md:text-7xl transition-all duration-1000 mb-10 ${scrolled ? 'md:translate-y-[-10vh] text-white' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeHeading }}
                transition={{ duration: 2 }}
            >
                सर्वत्वा | Wholeness
            </motion.h1>
            <motion.div className={`text-white font-avenir md:text-xl opacity-0 flex flex-col gap-y-6 md:gap-y-8 text-justify w-[60%] md:w-[50%] transition-all duration-1000 ${scrolled ? 'md:translate-y-[-10vh] opacity-100' : ''}`}>
                <p>
                    Sarvatva is inspired by the Vedas and the profound knowledge they offer about metaphysical concepts such as the fundamental nature of reality, existence, and consciousness. 
                </p>
                <p>
                    Deeply rooted in this ancient wisdom, our vedic furniture collections are a harmonious fusion of age old indian craftsmanship and contemporary aesthetics. 
                </p>
                <p>
                    Each Sarvata creation is an invitation to reconnect with the supreme consciousness and feel the wholeness within.
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutHero