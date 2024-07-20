import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import darkLogo from '../assets/logoDark.png';

const ContactHeader = () => {
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
    hidden: { opacity: 0},
    visible: { opacity: 1}
  };

  return (
    <div className={`font-cormorant fixed flex px-4 items-center justify-between top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-white/[12.5%] backdrop-blur-sm shadow-lg' : ''}`}>
      <Link to={'/'}>
      <div className='flex items-center space-x-4 font-avenir font-light text-lg'>
        <img src={darkLogo} alt="sarvatva" width={240}/>
      </div>
      </Link>
      <div className={`md:hidden flex items-center text-[#131313]`}>
        <button onClick={toggleMenu} className="flex items-center">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`hidden md:flex space-x-2 md:gap-x-4 text-sm md:text-md`}>
        <Link to={'/collection'}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#131313]' : 'text-[#131313] hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`}>Vedic Furniture</p>
        </Link>
        <Link to={'/about'}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#131313]' : 'text-[#131313] hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`}>The Craft of Wholeness</p>
        </Link>
        <Link to={'/contact'}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#131313]' : 'text-[#131313] hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`}>Let's Connect</p>
        </Link>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`md:hidden absolute top-[110%] right-2 transition bg-white/90 backdrop-blur shadow-lg border-[0.5px] rounded-md flex flex-col items-start px-6`}
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
              <p className={`py-4 text-center text-[18px] transition-all text-black hover:bg-black hover:bg-opacity-10`}>The Craft of Wholeness</p>
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

export default ContactHeader;
