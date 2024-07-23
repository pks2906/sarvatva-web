import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomSelector = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="cursor-pointer bg-transparent font-avenir font-bold py-2 border-b border-[#EDE6D6]/80 text-[#EDE6D6]/80 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value ? (value === 'email' ? 'Email' : 'WhatsApp') : 'Mode of Communication'}</span>
        <span className="ml-2">
        <svg className={`w-5 h-5 text-[#EDE6D6]/80 ${isOpen ? 'rotate-180' : 'before:'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
        </svg>
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full font-avenir mt-1 bg-[#EDE6D6] border-[0.5px] border-[#131313]/10 rounded-md shadow-lg z-10"
          >
            <li
              className="cursor-pointer py-2 text-[#131313]/80 border-b-[0.25px] border-neutral-400 px-4 hover:bg-[#131313]/10"
              onClick={() => handleSelect('email')}
            >
              Email
            </li>
            <li
              className="cursor-pointer py-2 px-4 text-[#131313]/80 hover:bg-[#131313]/10"
              onClick={() => handleSelect('whatsapp')}
            >
              WhatsApp
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelector;
