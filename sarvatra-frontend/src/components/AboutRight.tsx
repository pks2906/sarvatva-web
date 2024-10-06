
interface AboutRightProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
}

const AboutRight = ({ imgSrc, title, para1, para2 }: AboutRightProps) => {
  return (
    <div className="h-[120vh] lg:h-[100vh] bg-[#131313]">
        <div className="flex flex-col lg:flex-row items-center text-[#EDE6D6]/80">
            <img 
                src={imgSrc} 
                alt="image" 
                className="h-[50vh] w-[100vw] lg:h-[100vh] lg:w-[50%] object-cover"
            />
            <div className='flex h-[70vh] justify-center items-center w-[90%] lg:w-[50%]'>
                <div className="flex flex-col w-[90%] lg:w-[75%] items-center lg:mt-0 px-6 py-4">
                    <h1 className='font-cormorant text-4xl md:text-6xl md:mb-[8px] w-[100%] lg:w-[75%]'>
                        {title}
                    </h1>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[12.5%] md:mt-10 leading-[1.5rem] md:leading-9 lg:w-[75%]'>{para1}</p>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[12.5%] md:mt-[28px] leading-[1.5rem] md:leading-9  lg:w-[75%]'>{para2}</p>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default AboutRight