import { useState, useEffect } from 'react';
import logo from '../assets/navbar-logo.svg';
import darkLogo from '../assets/navbar-logo-dark.svg';
import { Link } from 'react-router-dom';

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
    // Translucent background like Apple website
    <div className={`font-gotu fixed flex px-4 py-2 items-center justify-between top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <img src={scrolled ? darkLogo : logo} alt="sarvatva" width={44}/>
      <div className='flex space-x-2 md:gap-x-4 text-sm md:text-md'>
        <Link to={'/'}>
          <p className='py-2 md:px-4 hover:bg-black hover:bg-opacity-30 rounded transition-all'>Collection</p>
        </Link>
        <Link to={'/about'}>
          <p className='py-2 md:px-4 hover:bg-black hover:bg-opacity-30 rounded transition-all'>About Us</p>
        </Link>
        <Link to={'/contact'}>
          <p className='py-2 md:px-4 hover:bg-black hover:bg-opacity-30 rounded transition-all'>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
