import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import PopupForm from "../components/form/PopupForm";

interface ProductProps {
  title: string;
  description: string;
  src: string;
  align: string;
  mobile: string;
  productName: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, description, src, align, mobile, productName }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFormOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        if (!isMobile || !isKeyboardOpen) {
          handleCloseForm();
        }
      }, 50); // Adjust the delay as needed
    };

    if (isFormOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener("scroll", handleScroll);
      return () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.classList.remove('overflow-hidden');
      };
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isFormOpen, isMobile, isKeyboardOpen]);

  useEffect(() => {
    const handleKeyboardShow = () => setIsKeyboardOpen(true);
    const handleKeyboardHide = () => setIsKeyboardOpen(false);

    window.addEventListener("focusin", handleKeyboardShow); // For detecting keyboard show
    window.addEventListener("focusout", handleKeyboardHide); // For detecting keyboard hide

    return () => {
      window.removeEventListener("focusin", handleKeyboardShow);
      window.removeEventListener("focusout", handleKeyboardHide);
    };
  }, []);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className='h-[150vh] sticky top-0'>
      <div 
        className={`h-[100vh]`}
        style={{
          background: `url(${isMobile ? mobile : src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {isMobile ? (
          <div className="flex flex-col justify-between items-center h-full text-white">
            <div className="mt-[35%] text-center mx-auto w-[80%]">
              <h1 className="font-cormorant text-4xl mb-4">{title}</h1>
              <p className="font-avenir mt-8 text-balance" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <button 
              className="text-[10px] mb-[10%] shadow-lg bg-white/10 backdrop-blur-sm tracking-widest border-[0.5px] font-avenir font-medium border-[#EDE6D6] py-2 px-4 rounded-md"
              onClick={handleButtonClick}
            >
              REQUEST A QUOTE
            </button>
          </div>
        ) : (
          <div className={`absolute top-[25%] text-[#EDE6D6] ${align} w-[40%]`}>
            <div className='flex flex-col mx-auto'>
              <h1 className='font-cormorant text-opacity-80 text-4xl md:text-6xl'>
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
        )}
      </div>
      <AnimatePresence>
        {isFormOpen && 
          <div className="fixed inset-0 z-40">
            <PopupForm onClose={handleCloseForm} productName={productName} />
          </div>
        }
      </AnimatePresence>
    </div>
  );
};

export default ProductCard;
