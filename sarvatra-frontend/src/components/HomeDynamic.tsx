import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HomeDynamicProps {
    image: string;
    shlok: string;
    desc: string;
}

const HomeDynamic = ({ image, shlok, desc }: HomeDynamicProps) => {
  const controls = useAnimation();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [zoomPhase, setZoomPhase] = useState(0);

  const { ref, inView } = useInView({ threshold: 0.5 });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const imagePosition = imageRef.current?.getBoundingClientRect().top;

    if (imagePosition !== undefined) {
      const absoluteImagePosition = imagePosition + scrollPosition;

      if (scrollPosition >= absoluteImagePosition) {
        if (scrollPosition >= absoluteImagePosition + windowHeight) {
          setZoomPhase(2);
        } else {
          setZoomPhase(1);
        }
      } else {
        setZoomPhase(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (zoomPhase === 1) {
      controls.start("scale");
    } else if (zoomPhase === 2) {
      controls.start("zoom");
    } else {
      controls.start("initial");
    }
  }, [controls, zoomPhase]);

  return (
    <div className="flex flex-col w-full my-40">
      <div className="font-gotu text-[30px] mx-auto py-8 my-20 text-center">
        <h1>{shlok}</h1>
        <p>{desc}</p>
      </div>
      <motion.img
        ref={(el) => {
          imageRef.current = el;
          ref(el); // Use ref from useInView
        }}
        src={image}
        alt="Image"
        className=" rounded-[40px] mx-auto w-[900px] h-[750px]"
        initial="initial"
        animate={controls}
        variants={{
          initial: { scale: 1, width: "65%", height: "auto", transition: { duration: 0.5 }, borderRadius: '40px' },
          scale: { scale: 1.05, width: "100%", height: "auto", transition: { duration: 0.5 }, borderRadius: '0px' }
        }}
      />
    </div>
  );
};

export default HomeDynamic;
