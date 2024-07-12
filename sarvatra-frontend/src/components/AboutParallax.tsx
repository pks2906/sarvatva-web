import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface AboutProps {
    vidUrl: string;
    heading: string;
    subheading: string;
}

const AboutParallax = ({ vidUrl, heading, subheading }: AboutProps) => {
  return (
    <div>
        <ParallaxContent vidUrl={vidUrl} subheading={subheading} heading={heading} />
    </div>
  )
}

export default AboutParallax

interface ParallaxContentProps {
    vidUrl: string;
    heading: string;
    subheading: string;
}

const ParallaxContent = ({ vidUrl, subheading, heading }: ParallaxContentProps) => {
    return (
        <div>
            <div className='relative h-[130vh]'>
                <StickyImage vidUrl={vidUrl}/>
                <OverlayCopy heading={heading} subheading={subheading}/>
            </div>
        </div>
    );
}

interface StickyVideoProps {
    vidUrl: string;
}

const StickyImage = ({ vidUrl }: StickyVideoProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    return (
        <motion.div 
            style={{
                height: `100vh`,
                top: 0
            }}
            ref={targetRef}
            className='sticky z-0 overflow-hidden bg-[#4e1b0a]'
        >
            <video 
                src={vidUrl} 
                autoPlay 
                loop 
                muted 
                className='absolute inset-0 object-cover w-full h-full opacity-90'
            />
            <motion.div 
                className='absolute inset-0 '
                style={{
                    opacity
                }}
            />
        </motion.div>
    )
}

interface OverlayCopyProps {
    heading: string;
    subheading: string;
}

const OverlayCopy = ({ heading, subheading }: OverlayCopyProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25 , 0.5, 0.75], [0, 1, 0]);
    
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            ref={targetRef}
            style={{
                y,
                opacity
            }}
            className='absolute left-0 top-14 md:top-8 flex h-screen w-full flex-col items-center justify-center text-white'
        >
            <motion.p 
                className={`font-gotu text-[#B65217] text-center text-4xl md:text-7xl transition-all duration-1000  ${scrolled ? 'translate-y-[-10vh] text-white' : 'mt-72 sm:mt-40 md:mt-48'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                {heading}
            </motion.p>
            <motion.div 
                className={`font-avenir text-justify font-light mx-10 md:text-center md:w-[60%] md:text-xl opacity-0 flex flex-col transition-all duration-1000 ${scrolled ? 'translate-y-[-5vh] opacity-100' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                {subheading}
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
        </motion.div>
    )
}
