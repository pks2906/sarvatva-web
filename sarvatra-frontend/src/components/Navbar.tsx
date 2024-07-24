import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/navLight.png';

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
    hidden: { opacity: 0, height: 0},
    visible: { opacity: 1, height: 'auto'}
  };

  return (
    <div className={`font-cormorant fixed flex px-4 items-center justify-between top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-[#131313] shadow-sm' : ''}`}>
      <Link to={'/'}>
      <div className='flex items-center space-x-4 font-avenir font-light text-lg'>
        <img src={logo} alt="sarvatva" width={240}/>
      </div>
      </Link>
      <div className='lg:hidden flex items-center text-[#EDE6D6]/80'>
        <button onClick={toggleMenu} className="flex items-center">
          {menuOpen ? (
            <svg className="w-6 h-6 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 14-4-4-4 4"/>
          </svg>
          ) : (
            <svg className="w-6 h-6 text-[#EDE6D6]/80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          )}
        </button>
      </div>
      <div className={`hidden lg:flex space-x-2 md:gap-x-4 text-sm md:text-md`}>
        <Link to={'/collection'}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#EDE6D6]' : 'text-[#EDE6D6]/80 hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`}>Vedic Furniture</p>
        </Link>
        <Link to={'/about'}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#EDE6D6]' : 'text-[#EDE6D6]/80 hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`}>The Craft of Wholeness</p>
        </Link>
        <Link to={'/contact'}>
          <p className={`py-4 md:px-4 text-[18px] font-semibold rounded transition-all ${scrolled ? 'hover:text-[#EDE6D6]/80 text-[#EDE6D6]' : 'text-[#EDE6D6]/80 hover:bg-black hover:bg-opacity-30 hover:text-[#EDE6D6]'}`}>Let's Connect</p>
        </Link>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`lg:hidden absolute top-[110%] w-[95%] md:w-[50%] left-0 right-0 mx-auto md:mr-6 transition bg-[#131313] shadow-lg border-[0.5px] border-[#EDE6D6]/10 rounded-md flex flex-col items-start`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <Link to={'/collection'} className='w-full'>
              <p className={`py-4 text-[18px] transition-all text-[#EDE6D6]/80 border-b-[0.5px] border-[#EDE6D6]/10 px-6`}>Vedic Furniture</p>
            </Link>
            <Link to={'/about'} className='w-full'>
              <p className={`py-4 text-[18px] transition-all text-[#EDE6D6]/80 border-b-[0.5px] border-[#EDE6D6]/10 px-6`}>The Craft of Wholeness</p>
            </Link>
            <Link to={'/contact'} className='w-full'>
              <p className={`py-4 text-[18px] transition-all text-[#EDE6D6]/80 px-6`}>Let's Connect</p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
