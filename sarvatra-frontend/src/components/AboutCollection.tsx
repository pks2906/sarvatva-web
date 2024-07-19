import DesktopShlok from './DesktopShlok';
import { useEffect, useState } from "react";
import MobileShlok from './MobileShlok';

const AboutCollection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      const scrollToNext = () => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      };

    if (isMobile) {
        return(
            <div className='h-[100vh] bg-[#131313] flex items-center justify-center mx-auto'>
                <div className='flex flex-col'>
                    <div className='flex h-[50vh] w-full'>
                        <MobileShlok />
                    </div>
                    <div className='flex flex-col mx-auto w-[80%] gap-y-[28px] text-center'>
                        <p className='font-avenir text-balance leading-[1.5rem] text-[#EDE6D6]'>
                            <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda. 
                        </p>
                        <p className='font-avenir text-balance leading-[1.5rem] text-[#EDE6D6]'>
                        Our Collection ponders upon the mystery of what existed before creation of Universe and how the creation came about. 
                        </p>
                    </div>
                </div>
                <div onClick={scrollToNext} className='absolute bottom-0 flex flex-col left-[45%] md:left-[50%] mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
                    <svg className="w-10 h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                    <svg className="w-10 h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                    </svg>
                </div>
            </div>
        )
    }
  return (
    <div className='h-[100vh] bg-[#131313] flex items-center justify-center'>
        <div className='flex flex-col-reverse md:flex-row md:mx-[72px]'>
            <div className='flex flex-col text-center md:text-start justify-center md:w-[40%] mx-auto'>
                <p className='font-avenir md:text-xl md:w-[65%] mb-[30px] text-balance md:leading-9 leading-[1.75rem] text-[#CFC9BD]'>
                    <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda. 
                </p>
                <p className='font-avenir text-balance md:text-xl md:w-[65%] mb-[40px] md:leading-9 leading-[1.75rem] text-[#CFC9BD]'>
                Our Collection ponders upon the mystery of what existed before creation of Universe and how the creation came about. 
                </p>
            </div>
            <div className='md:w-[50%]'>
                <DesktopShlok />
            </div>
        </div>
        <div onClick={scrollToNext} className='absolute bottom-3 flex flex-col left-[45%] md:left-[50%] mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
            <svg className="w-10 h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
            </svg>
            <svg className="w-10 h-10 text-[#EDE6D6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
            </svg>
        </div>
    </div>
  )
}

export default AboutCollection