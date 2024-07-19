import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AboutRightProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
}

const AboutRight = ({ imgSrc, title, para1, para2 }: AboutRightProps) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const typewriterVariants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.15,
            }
        })
    };

  return (
    <div ref={ref} className="h-[120vh] md:h-[100vh] bg-[#131313]">
        <div className="flex flex-col md:flex-row  items-center text-[#EDE6D6]/80">
            <img 
                src={imgSrc} 
                alt="image" 
                className="h-[50vh] w-[100vw] md:h-[100vh] md:w-[50%] object-cover"
            />
            <div className='flex h-[70vh] justify-center items-center w-[90%] md:w-[50%]'>
                <div className="flex flex-col w-[90%] md:w-[75%] items-center md:mt-0 px-6 py-4">
                    <motion.h1 
                        className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] w-[100%] md:w-[75%]'
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {title.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={typewriterVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[12.5%] md:mt-[28px] leading-[1.5rem] md:leading-9 md:w-[75%]'>{para1}</p>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[12.5%] md:mt-[28px] leading-[1.5rem] md:leading-9  md:w-[75%]'>{para2}</p>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default AboutRight