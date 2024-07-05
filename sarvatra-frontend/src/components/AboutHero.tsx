import { useEffect, useState } from "react";
import vid from '../assets/about-hero-vid.mp4';

const AboutHero = () => {
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
    <div className="relative h-[105vh] font-gotu">
        <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={vid}
            autoPlay
            loop
            muted
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${scrolled ? 'bg-black bg-opacity-70' : ''}`}>
            <h1 className={`text-[#B65217] text-2xl md:text-4xl transition-all duration-700 mb-10 ${scrolled ? 'md:translate-y-[-10vh] text-white' : 'mt-72 md:mt-32'}`}>
                सर्वत्वा | Wholeness
            </h1>
            <div className={`text-white text-sm md:text-xl opacity-0 flex flex-col gap-y-6 md:gap-y-8 text-justify w-[60%] md:w-[50%] transition-all duration-700 ${scrolled ? 'md:translate-y-[-10vh] opacity-100' : ''}`}>
                <p>
                    Sarvatva is inspired by the Vedas and the profound knowledge they offer about metaphysical concepts such as the fundamental nature of reality, existence, and consciousness. 
                </p>
                <p>
                    Deeply rooted in this ancient wisdom, our vedic furniture collections are a harmonious fusion of age old indian craftsmanship and contemporary aesthetics. 
                </p>
                <p>
                    Each Sarvata creation is an invitation to reconnect with the supreme consciousness and feel the wholeness within.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutHero