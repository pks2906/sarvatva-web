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
    <div className="relative h-[110vh]">
        <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={vid}
            autoPlay
            loop
            muted
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${scrolled ? 'bg-black bg-opacity-70' : ''}`}>
            <h1 className={`text-white text-5xl font-bold transition-all duration-700 ${scrolled ? 'mt-5 text-2xl' : ''}`}>
                Wholeness
            </h1>
            <p className={`text-white mt-10 opacity-0 transition-opacity duration-700 ${scrolled ? 'opacity-100' : ''}`}>
                Sarvatva is inspired by the Vedas and the profound knowledge they offer about metaphysical concepts such as the fundamental nature of reality, existence, and consciousness. Deeply rooted in this ancient wisdom, our vedic furniture collections are a harmonious fusion of age old indian craftsmanship and contemporary aesthetics. Each Sarvata creation is an invitation to reconnect with the supreme consciousness and feel the wholeness within.
            </p>
        </div>
    </div>
  )
}

export default AboutHero