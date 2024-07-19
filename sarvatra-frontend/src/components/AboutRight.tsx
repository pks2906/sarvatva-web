
interface AboutRightProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
}

const AboutRight = ({ imgSrc, title, para1, para2 }: AboutRightProps) => {
  return (
    <div className="h-[115vh] md:h-[100vh] bg-[#131313]">
        {/* <div className="flex flex-col md:flex-row items-center my-8 md:my-20 md:mr-[72px] md:py-8 md:gap-x-6 text-[#EDE6D6]/80">
            <div 
                className='h-[45vh] w-[100vw] md:h-[100vh] md:w-[60%] mx-auto'
                style={{
                    background: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }} 
            />
            <div className='flex flex-col justify-center w-[90%] md:w-[50%] mt-6 px-8 md:pl-[80px]'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mt-[47px] mb-4'>{title}</h1>
                <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[28px] leading-[1.5rem] md:leading-9 md:w-[85%]'>{para1}</p>
                <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[28px] leading-[1.5rem] md:leading-9  md:w-[75%]'>{para2}</p>
            </div>
        </div> */}
        <div className="flex flex-col md:flex-row items-center text-[#EDE6D6]/80">
            <div 
                className='h-[45vh] w-[100vw] md:h-[100vh] md:w-[50%]'
                style={{
                    background: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }} 
            />
            <div className='flex justify-center items-center w-[90%] md:w-[50%]'>
                <div className="flex flex-col w-[90%] md:w-[75%] items-center md:mt-0 px-6">
                    <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mt-[20%] md:mt-0 w-[100%] md:w-[75%]'>{title}</h1>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[12.5%] md:mt-[28px] leading-[1.5rem] md:leading-9 md:w-[75%]'>{para1}</p>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] mt-[12.5%] md:mt-[28px] leading-[1.5rem] md:leading-9  md:w-[75%]'>{para2}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutRight