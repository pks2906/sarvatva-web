interface AboutLeftProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
    para3?: string;
}

const AboutLeft = ({ imgSrc ,title, para1, para2, para3 }: AboutLeftProps) => {
  return (
    <div className="h-[100vh]">
        <div className="flex flex-col-reverse md:flex-row text-[#131313]">
            <div className='flex justify-center items-center w-[90%] md:w-[50%]'>
                <div className="flex flex-col w-[90%] md:w-[75%] items-center md:mt-0 px-6">
                    <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mt-[20%] md:mt-0 w-[100%] md:w-[75%]'>{title}</h1>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 mt-[12.5%] md:mt-[28px] md:w-[75%]'>{para1}</p>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 mt-[12.5%] md:mt-[28px] md:w-[75%] '>{para2}</p>
                    <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 mt-[12.5%] md:mt-[28px] md:w-[75%] '>{para3}</p>
                </div>
            </div>
            <div 
                className='h-[45vh] w-[100vw] md:h-[100vh] md:w-[50%]'
                style={{
                    background: `url(${imgSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }} 
                />
        </div>
    </div>
  )
}

export default AboutLeft