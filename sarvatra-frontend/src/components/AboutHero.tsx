import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import vid from '../assets/about-hero-vid.mp4';
import img from '../assets/about-hero.svg';

const AboutHero = () => {
    const [fadeHeading, setFadeHeading] = useState(0);

    useEffect(() => {
        setFadeHeading(1);
    }, []);
  return (
    <div className="relative h-screen">
        <video 
            className=" top-0 left-0 w-full h-screen sticky object-cover opacity-90"
            src={vid}
            autoPlay
            playsInline
            loop
            muted
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 bg-[#4e1b0a]/50`}>
            <motion.h1 
                className={``}
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeHeading }}
                transition={{ duration: 2 }}
            >
                <img src={img} alt="Sarvatva - The Craft of Wholeness" className="w-[80%] mx-auto md:w-full"/>
            </motion.h1>
        </div>
    </div>
  )
}

export default AboutHero