import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/navLight.png';
import darkLogo from '../assets/logoDark.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };

  return (
    <div className={`font-cormorant fixed flex px-4 items-center justify-between top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'text-black bg-white bg-opacity-10 backdrop-blur-sm shadow-md' : 'backdrop-blur-sm text-white'}`}>
      <Link to={'/'}>
      <div className='flex items-center space-x-4 font-avenir font-light text-lg'>
        <img src={scrolled ? darkLogo : logo} alt="sarvatva" width={240}/>
      </div>
      </Link>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className="flex items-center">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`hidden md:flex space-x-2 md:gap-x-4 text-sm md:text-md`}>
        <Link to={'/collection'}>
          <p className={`py-4 md:px-4 text-[18px] rounded transition-all ${scrolled ? 'hover:bg-black hover:bg-opacity-10 text-[#EDE6D6]' : 'text-[#CFC9BD] hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]'}`}>Vedic Furniture</p>
        </Link>
        <Link to={'/about'}>
          <p className={`py-4 md:px-4 text-[18px] rounded transition-all ${scrolled ? 'hover:bg-black hover:bg-opacity-10 text-[#EDE6D6]' : 'text-[#CFC9BD] hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]'}`}>Crafting Wholeness</p>
        </Link>
        <Link to={'/contact'}>
          <p className={`py-4 md:px-4 text-[18px] rounded transition-all ${scrolled ? 'hover:bg-black hover:bg-opacity-10 text-[#EDE6D6]' : 'text-[#CFC9BD] hover:bg-black hover:bg-opacity-30 hover:text-[#F5DEB3]'}`}>Let's Connect</p>
        </Link>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`md:hidden absolute top-full left-0 w-full bg-white bg-opacity-40 backdrop-blur-sm`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <Link to={'/collection'}>
              <p className={`py-4 text-center text-[18px] transition-all text-black hover:bg-black hover:bg-opacity-10`}>Vedic Treasures</p>
            </Link>
            <Link to={'/about'}>
              <p className={`py-4 text-center text-[18px] transition-all text-black hover:bg-black hover:bg-opacity-10`}>Crafting Wholeness</p>
            </Link>
            <Link to={'/contact'}>
              <p className={`py-4 text-center text-[18px] transition-all text-black hover:bg-black hover:bg-opacity-10`}>Let's Connect</p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
