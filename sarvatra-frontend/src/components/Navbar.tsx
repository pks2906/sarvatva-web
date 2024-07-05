import { useState, useEffect } from 'react';
import logo from '../assets/navbar-logo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed flex px-4 py-2 items-center justify-between top-0 left-0 w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <img src={logo} alt="sarvatva" />
      <div className='flex space-x-2'>
        <p>Collection</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Navbar;
