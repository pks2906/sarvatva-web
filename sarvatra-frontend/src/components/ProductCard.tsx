import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProductProps {
  title: string;
  description: string;
  src: string;
  align: string;
}

const PopupForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div 
        className="bg-white flex flex-col p-8 rounded shadow-lg w-[60%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <h1 className="font-avenir font-bold text-xl mb-8">REQUEST MORE INFORMATION</h1>
        <div className="grid grid-cols-2 gap-4 my-4">
          <input type="text" placeholder="First Name" className="placeholder:text-[#393939] font-avenir font-light py-2 border-b border-[#393939]"/>
          <input type="text" placeholder="Last Name" className="placeholder:text-[#393939] font-avenir font-light py-2 border-b border-[#393939]"/>
        </div>
        <div className="grid grid-cols-2 my-4">
          <select name="communication" id="mode" className="font-avenir font-light text-start py-2 border-b border-[#393939] text-[#393939]">
            <option value="none">Mode of Communication</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </div>
        <div className="my-4 grid grid-cols-2">
          <input type="email" placeholder="Email" className="font-avenir font-light border-b border-[#393939] placeholder:text-[#393939]"/>
        </div>
        <div className="my-4 grid grid-cols-2">
          <input type="tel" placeholder="Phone No." className="font-avenir font-light border-b border-[#393939] placeholder:text-[#393939]"/>
        </div>
        <div className="my-4">
          <textarea placeholder="Your Message" className="border font-avenir w-full border-[#393939] p-2 resize-none" rows={4}></textarea>
        </div>
        <div className="mt-4">
          <button onClick={onClose} className="w-full md:w-[100px] transition-all rounded-full font-avenir text-center hover:opacity-75 px-4 py-2 bg-black text-white">Submit</button>
        </div>
      </motion.div>
    </div>
  )
}

const ProductCard = ({ title, description, src, align }: ProductProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
  return (
    <div className='h-[150vh] sticky top-0'>
      <div className={`h-[100vh]`}>
        <img src={src} alt="" className='h-full object-cover z-0'/>
        <div className={`absolute top-[25%] text-white ${align} w-[40%]`}>
           <div className='flex flex-col mx-auto'>
                <h1 className='font-bold font-gotu text-4xl md:text-6xl py-4 mb-8'>
                    {title}
                </h1>
                <p className='w-[50%] font-avenir'>
                    {description}
                </p>
                <button 
                  className='font-avenir flex items-center justify-center border border-white w-[30%] text-xs py-2 px-4 rounded my-16 hover:bg-white hover:text-black transition-all'
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