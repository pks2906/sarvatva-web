import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface HeroProps {
    vidUrl: string;
    posterUrl: string;
    heading: string;
    subheading: string;
}

const HeroParallax = ({ vidUrl, posterUrl, heading, subheading }: HeroProps) => {
  return (
    <div>
        <ParallaxContent vidUrl={vidUrl} posterUrl={posterUrl} subheading={subheading} heading={heading} />
    </div>
  )
}

export default HeroParallax

interface ParallaxContentProps {
    vidUrl: string;
    posterUrl: string;
    heading: string;
    subheading: string;
}

const ParallaxContent = ({ vidUrl, posterUrl, subheading, heading }: ParallaxContentProps) => {
    return (
        <div>
            <div className='relative h-[130vh]'>
                <StickyImage vidUrl={vidUrl} posterUrl={posterUrl}/>
                <OverlayCopy heading={heading} subheading={subheading}/>
            </div>
        </div>
    );
}

interface StickyVideoProps {
    vidUrl: string;
    posterUrl: string;
}

const StickyImage = ({ vidUrl, posterUrl }: StickyVideoProps) => {
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
            className='sticky z-0 overflow-hidden'
        >
            <video 
                src={vidUrl} 
                autoPlay 
                loop 
                muted 
                playsInline
                poster={posterUrl}
                className='absolute inset-0 object-cover w-full h-full'
            />
            <motion.div 
                className='absolute inset-0 bg-neutral-950/60'
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
    
    const [fadeOpacity, setFadeOpacity] = useState(0);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setFadeOpacity(1);

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
                className={`font-gotu text-center text-4xl md:text-7xl transition-all duration-1000  ${scrolled ? 'translate-y-[-10vh]' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeOpacity }}
                transition={{ duration: 2 }}
            >
                {heading}
            </motion.p>
            <motion.p 
                className={`font-avenir text-justify font-light mx-10 md:text-center md:w-[60%] md:text-xl opacity-0 flex flex-col transition-all duration-1000 ${scrolled ? 'translate-y-[-5vh] opacity-100' : ''}`}
            >
                {subheading}
            </motion.p>
            {/* <p className='font-gotu text-center text-3xl md:text-7xl'>{heading}</p> */}
        </motion.div>
    )
}