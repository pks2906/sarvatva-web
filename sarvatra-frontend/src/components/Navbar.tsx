import { useState, useEffect } from 'react';
import logo from '../assets/navbar-logo.svg';
import darkLogo from '../assets/navbar-logo-dark.svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`font-gotu fixed flex px-4 py-2 items-center justify-between top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'text-black bg-white bg-opacity-85 backdrop-blur-sm' : 'backdrop-blur-sm text-white'}`}>
      <img src={scrolled ? darkLogo : logo} alt="sarvatva" width={63}/>
      <div className='md:hidden'>
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`hidden md:flex space-x-2 md:gap-x-4 text-sm md:text-md`}>
        <Link to={'/'}>
          <p className={`py-4 md:px-4 text-[18px] rounded transition-all ${scrolled ? 'hover:bg-black hover:bg-opacity-10' : 'hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]'}`}>Vedic Treasures</p>
        </Link>
        <Link to={'/about'}>
          <p className={`py-4 md:px-4 text-[18px] rounded transition-all ${scrolled ? 'hover:bg-black hover:bg-opacity-10' : 'hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]'}`}>Crafting Wholeness</p>
        </Link>
        <Link to={'/contact'}>
          <p className={`py-4 md:px-4 text-[18px] rounded transition-all ${scrolled ? 'hover:bg-black hover:bg-opacity-10' : 'hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]'}`}>Let's Connect</p>
        </Link>
      </div>
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${menuOpen ? 'block bg-white bg-opacity-90 backdrop-blur-sm' : 'hidden'}`}>
        <Link to={'/'}>
          <p className={`py-4 text-center text-[18px] transition-all ${menuOpen ? 'text-black hover:bg-black hover:bg-opacity-10' : (scrolled ? 'text-black hover:bg-black hover:bg-opacity-10' : 'text-white hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]')}`}>Vedic Treasures</p>
        </Link>
        <Link to={'/about'}>
          <p className={`py-4 text-center text-[18px] transition-all ${menuOpen ? 'text-black hover:bg-black hover:bg-opacity-10' : (scrolled ? 'text-black hover:bg-black hover:bg-opacity-10' : 'text-white hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]')}`}>Crafting Wholeness</p>
        </Link>
        <Link to={'/contact'}>
          <p className={`py-4 text-center text-[18px] transition-all ${menuOpen ? 'text-black hover:bg-black hover:bg-opacity-10' : (scrolled ? 'text-black hover:bg-black hover:bg-opacity-10' : 'text-white hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]')}`}>Let's Connect</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
