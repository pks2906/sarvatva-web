// Hero.js
import React, { useState, useEffect } from 'react';
import vid from '../assets/about-hero-vid.mp4';

interface HeroProps {
    setScrollBlocked: (blocked: boolean) => void;
}

const AboutHero = ({ setScrollBlocked }: HeroProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    if (currentScrollY > window.innerHeight / 10) {
      setScrolled(true);
      setScrollBlocked(false); // Allow scrolling past Hero section
    } else {
      setScrolled(false);
      setScrollBlocked(true); // Block scrolling
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${scrolled ? 'opacity-50' : 'opacity-100'}`}
        style={{
          background: `url('path/to/your/video-poster.jpg') center center/cover no-repeat`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <video
          className="w-full h-full object-cover"
          src={vid}
          autoPlay
          loop
          muted
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className={`text-center transition-all duration-300 ${scrolled ? 'transform -translate-y-16' : 'transform translate-y-0'}`}>
          <h1 className="text-white text-5xl font-bold">Hero Title</h1>
          <p className={`text-white mt-4 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            This is the paragraph that appears after scrolling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
