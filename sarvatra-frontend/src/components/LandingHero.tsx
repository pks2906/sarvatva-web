import vid from "../assets/tad-ekam.mp4"
import { motion } from "framer-motion"

const LandingHero = () => {
  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div className="h-screen relative">
        <video 
            src={vid} 
            autoPlay 
            loop 
            muted
            playsInline
            className='absolute inset-0 bg-black scale-125 md:scale-100 md:object-cover w-full h-full'
        />
        <motion.div 
          onClick={scrollToNext} 
          className='absolute bottom-3 flex flex-col items-center w-full mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
        >
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
            </svg>
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
            </svg>
        </motion.div>
    </div>
  )
}

export default LandingHero