import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface ProductProps {
  title: string;
  description: string;
  src: string;
  align: string;
  mobile: string;
}

const PhoneInputField = () => {
  return (
    <div className="flex flex-col my-4">
      <PhoneInput
        country={'in'}
        inputStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          color: 'white',
          borderBottom: '1px solid #EDE6D6',
          opacity: '80%',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px',
          fontFamily: 'avenir',
          fontWeight: 'bold',
          padding: '0 40px',
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
        dropdownStyle={{
          backgroundColor: '#EDE6D6',
          color: '#131313',
          borderRadius: '10px'
        }}
        containerStyle={{
          width: '100%',
        }}
      />
    </div>
  );
};

const PopupForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
      <motion.div 
        className="bg-white bg-opacity-10 flex flex-col p-4 md:p-8 rounded-md shadow-lg w-[90%] md:w-[60%] backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="flex justify-between items-center mb-0 md:mb-8">
          <h1 className="font-staatliches text-[#EDE6D6]/80 tracking-[0.125em] font-bold text-lg md:text-xl">REQUEST MORE INFORMATION</h1>
          <button 
            className="text-[#EDE6D6]/80 font-medium text-lg md:text-xl"
            onClick={onClose}  
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 my-4">
          <input type="text" placeholder="First Name" className="bg-transparent placeholder:text-[#EDE6D6]/80 text-[#EDE6D6]/80 font-avenir font-bold py-2 border-b border-[#EDE6D6]/80"/>
          <input type="text" placeholder="Last Name" className="bg-transparent placeholder:text-[#EDE6D6]/80 text-[#EDE6D6]/80 font-avenir font-bold py-2 border-b border-[#EDE6D6]/80"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <select name="communication" id="mode" className="bg-transparent font-avenir font-bold text-start py-2 border-b border-[#EDE6D6]/80 text-[#EDE6D6]/80">
            <option value="none">Mode of Communication</option>
            <option value="email">Email</option>
            <option value="sms">WhatsApp</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <input type="email" placeholder="Email" className="font-avenir bg-transparent py-2 font-bold border-b border-[#EDE6D6]/80 text-[#EDE6D6]/80 placeholder:text-[#EDE6D6]/80"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 mb-4">
          {/* <input type="tel" placeholder="Phone No." className="font-avenir bg-transparent py-2 font-bold border-b border-white text-white placeholder:text-white"/> */}
          <PhoneInputField />
        </div>
        <div className="my-4">
          <textarea placeholder="Your Message" className="placeholder:text-[#EDE6D6]/80 font-bold border rounded-md text-[#EDE6D6]/80 font-avenir bg-transparent w-full border-[#EDE6D6]/80 p-2 resize-none" rows={4}></textarea>
        </div>
        <div className="md:mt-4">
          <button onClick={onClose} className="w-full md:w-[100px] transition-all rounded-md font-avenir font-medium text-center hover:opacity-75 px-4 py-2 bg-[#EDE6D6]/80 border-[0.5px] text-[#131313]/80 tracking-wider text-sm">SUBMIT</button>
        </div>
      </motion.div>
    </div>
  )
}

const ProductCard = ({ title, description, src, align, mobile }: ProductProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isFormOpen]);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  }

  const handleCloseForm = () => {
    setIsFormOpen(false);
  }

  if (isMobile) {
    return (
      <div className='h-[150vh] sticky top-0'>
        <div 
          className={`h-[100vh]`}
          style={{
            background: `url(${mobile})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="flex flex-col justify-between items-center h-full text-white">
            <div className="mt-[35%] text-center mx-auto w-[80%]">
              <h1 className="font-staatliches tracking-widest text-4xl mb-4">{title}</h1>
              <p className="font-avenir mt-8 text-balance" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <button 
              className="text-[10px] mb-[10%] shadow-lg bg-white/10 backdrop-blur-sm tracking-widest border-[0.5px] font-avenir font-medium border-[#EDE6D6] py-2 px-4 rounded-md"
              onClick={handleButtonClick}
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isFormOpen && <PopupForm onClose={handleCloseForm} />}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className='h-[150vh] sticky top-0'>
      <div 
        className={`h-[100vh]`}
        style={{
          background: `url(${src})`,
          backgroundSize: 'cover'
        }}
      >
        <div className={`absolute top-[25%] text-[#EDE6D6] ${align} w-[40%]`}>
           <div className='flex flex-col mx-auto'>
                <h1 className='font-staatliches tracking-[0.125em] text-opacity-80 text-4xl md:text-6xl'>
                    {title}
                </h1>
                <p className='w-[70%] text-balance text-[20px] text-opacity-80 mt-[28px] font-avenir leading-9' dangerouslySetInnerHTML={{ __html: description }}></p>
                <button 
                  className='font-avenir flex text-opacity-80 border-opacity-80 font-medium shadow-lg items-center justify-center bg-white/10 backdrop-blur-sm border-[0.5px] border-[#EDE6D6] w-[200px] text-sm py-2 px-4 rounded my-16 hover:bg-[#EDE6D6] hover:text-[#131313] transition-all tracking-widest'
                  onClick={handleButtonClick}
                >
                    REQUEST A QUOTE
                </button>
           </div>
        </div>
      </div>
      <AnimatePresence>
        {isFormOpen && <PopupForm onClose={handleCloseForm} />}
      </AnimatePresence>
    </div>
  )
}

export default ProductCard