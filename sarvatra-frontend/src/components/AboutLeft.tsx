interface AboutLeftProps {
    imgSrc: string;
    title: string;
    para1: string;
    para2: string;
}

const AboutLeft = ({ imgSrc ,title, para1, para2 }: AboutLeftProps) => {
  return (
    <div className="h-[105vh] flex items-center justify-center my-20">
        <div className="flex flex-col-reverse md:flex-row items-center my-8 md:my-20 md:mx-[72px] md:py-8 md:gap-x-6">
            <div className='flex flex-col justify-center w-[90%] md:w-[50%] mx-auto'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] my-4'>{title}</h1>
                <p className='font-avenir font-light text-[16px] md:text-[20px] my-6 md:my-[60px] md:w-[75%]'>{para1}</p>
                <p className='font-avenir font-light text-[16px] md:text-[20px] my-6 md:w-[75%]'>{para2}</p>
            </div>
            <div 
                className='h-[40vh] w-[90vw] md:h-[600px] md:w-[600px] rounded-lg mx-auto mt-4 mb-6'
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