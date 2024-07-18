interface AboutLeftProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
}

const AboutLeft = ({ imgSrc ,title, para1, para2 }: AboutLeftProps) => {
  return (
    <div className="h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center md:ml-[72px] md:gap-x-6 text-[#131313]">
            <div className='flex flex-col justify-center w-[90%] md:w-[50%] mx-auto'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mt-[47px] mb-4'>{title}</h1>
                <p className='font-avenir font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 my-4 md:mt-[28px] md:w-[75%]'>{para1}</p>
                <p className='font-avenir font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 my-4 md:mt-[28px] md:w-[75%] '>{para2}</p>
            </div>
            <div 
                className='h-[40vh] w-[100vw] md:h-[100vh] md:w-[60%]'
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