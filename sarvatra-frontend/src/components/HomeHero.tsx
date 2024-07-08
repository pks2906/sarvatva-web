
import { useEffect, useState } from "react";
import vid from "../assets/land-vid-bg.png";

const HomeHero = () => {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className="relative h-[105vh] font-gotu bg-black">
        <img 
            className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
            src={vid}
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${scrolled ? 'bg-black bg-opacity-70' : ''}`}>
            <h1 className={`text-white text-2xl md:text-4xl transition-all duration-1000 mb-10 ${scrolled ? 'md:translate-y-[-10vh] text-white' : 'mt-72 sm:mt-40 md:mt-48'}`}>
              तद् एकम्  | That One
            </h1>
            <div className={`text-white font-avenir text-sm md:text-xl opacity-0 flex flex-col gap-y-6 md:gap-y-8 text-center w-[60%] md:w-[50%] transition-all duration-1000 ${scrolled ? 'md:translate-y-[-10vh] opacity-100' : ''}`}>
                <p>
                  Going 13.8 Billion years back in time, when all creation originated from the supreme consciousness or “That one”, our collection ponders upon what existed before the universe was born and how all creation came about. Each design is an intention, to manifest this cosmic mystery, into tangibility.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeHero;
