import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
    const [fadeHeading, setFadeHeading] = useState(0);

    useEffect(() => {
        setFadeHeading(1);
    }, []);
  return (
    <div className="relative h-screen">
        
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000`}>
            <motion.h1 
                className={``}
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeHeading }}
                transition={{ duration: 2 }}
            >
                
            </motion.h1>
        </div>
    </div>
  )
}

export default AboutHero