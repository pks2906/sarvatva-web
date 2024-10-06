interface AboutLeftProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
    para3?: string;
}

const AboutLeft = ({ imgSrc, title, para1, para2, para3 }: AboutLeftProps) => {
    return (
        <div className="h-[120vh] lg:h-[100vh]">
            <div className="flex flex-col-reverse lg:flex-row items-center text-[#131313] bg-white">
                <div className='flex h-[70vh] lg:h-auto justify-center items-center w-[90%] lg:w-[50%]'>
                    <div className="flex flex-col w-[90%] lg:w-[75%] items-center lg:mt-0 px-6">
                        <h1 className='font-cormorant text-4xl md:text-6xl md:mb-[8px] lg:mt-0 w-[100%] lg:w-[75%]'>
                            {title}
                        </h1>
                        <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 mt-[12.5%] md:mt-10 lg:w-[75%]'>{para1}</p>
                        <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 mt-[12.5%] md:mt-[28px] lg:w-[75%]'>{para2}</p>
                        <p className='font-avenir text-balance font-light text-[16px] md:text-[20px] leading-[1.5rem] md:leading-9 mt-[12.5%] md:mt-[28px] lg:w-[75%]'>{para3}</p>
                    </div>
                </div>
                <div 
                    className='h-[50vh] w-[100vw] lg:h-[100vh] lg:w-[50%]'
                    style={{
                        background: `url(${imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                />
            </div>
        </div>
    );
}

export default AboutLeft;
