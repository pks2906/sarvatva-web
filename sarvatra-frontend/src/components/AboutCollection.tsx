import img from '../assets/shlokLight.svg';

const AboutCollection = () => {
    const scrollToNext = () => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      };
  return (
    <div className='h-[100vh] bg-[#131313]'>
        <div className='flex flex-col-reverse md:flex-row h-[90%] mx-10 md:mx-[72px]'>
            <div className='flex flex-col text-center md:text-start justify-center py-4 md:mt-14'>
                <p className='font-avenir  md:text-xl md:w-[65%] mb-[30px] text-balance md:leading-9 leading-[1.75rem] text-[#CFC9BD]'>
                    Our Collection, <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda. 
                </p>
                <p className='font-avenir text-balance md:text-xl md:w-[65%] mb-[40px] md:leading-9 leading-[1.75rem] text-[#CFC9BD]'>
                    It ponders upon the mystery of what existed before creation of Universe and how the creation came about. 
                </p>
            </div>
            <img src={img} alt="" className='h-3/5 md:h-full md:w-[50vw]'/>
        </div>
        <div onClick={scrollToNext} className='absolute bottom-4 flex flex-col left-[45%] md:left-[50%] mx-auto animate-bounce -space-y-6 opacity-80 cursor-pointer'>
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