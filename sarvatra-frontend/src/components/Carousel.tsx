import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import img1 from '../assets/revised1.jpg';
import img2 from '../assets/revised2.png';
import img3 from '../assets/revised4.jpg';
import mob1 from '../assets/mobile2.jpg';
import mob2 from '../assets/mobile3.jpg';
import mob3 from '../assets/mobile4.jpg';
import { useEffect, useState } from 'react';

const CarouselComponent = () => {
    const items = [img1, img2, img3];
    const mobileItems = [mob2, mob1, mob3];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <Carousel
        autoPlay
        fullHeightHover
        stopAutoPlayOnHover={false}
        swipe
        animation="slide"
        duration={1000}
        interval={5000}
        indicators={true}
        indicatorContainerProps={{
            style: {
              position: 'absolute',
              bottom: '20px',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }
        }}
        indicatorIconButtonProps={{
            style: {
                color: 'rgb(255, 255, 255, 0.3)',
                marginLeft: '3px'
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                color: '#EDE6D6'
            }
        }}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
            style: {
                backgroundColor: 'rgb(255,255,255, 0.1)',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                padding: isMobile ? '4px' : '8px'
            }
        }}
        cycleNavigation={true}
      >
        {(isMobile ? mobileItems : items).map((item, index) => (
          <ImageCarousel key={index} image={item} />
        ))}
      </Carousel>
    )
}

const ImageCarousel = ({ image }: { image: string }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) {
        return (
            <div className='h-screen'>
                <div 
                    className='relative h-full'
                    style={{
                        background: `url(${image})`,
                        backgroundSize: 'cover'
                    }}
                >
                    <div className='absolute top-1 w-full h-screen flex flex-col justify-between items-center'>
                        <div className='mt-[35%] text-center text-[#EDE6D6] text-opacity-80 mx-auto w-[80%]'>
                            <h1 className="font-cormorant text-4xl mb-4">Vedic Furniture</h1>
                            <p className='font-avenir mt-8 text-balance leading-[1.5rem]'>
                                Each design is an intention, to manifest <span className='font-bold'>“That One”</span>, into tangibility through <b className='font-bold'>sculptural, organic</b> and <b className='font-bold'>tactile</b> forms, harmoniously blending art with functionality.
                            </p>
                        </div>
                        <Link to={'/collection'}>
                            <button
                            className='text-[10px] mb-[50%] bg-white/10 shadow-lg backdrop-blur-sm tracking-widest border-[0.5px] font-avenir font-medium border-[#EDE6D6] py-2 px-4 rounded-md text-[#EDE6D6]'
                            >
                            VIEW COLLECTION
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    
  return (
    <div className='h-screen'>
        <div 
            className='relative flex h-full'
            style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 top-[35%] left-[10%] text-[#EDE6D6] flex flex-col">
                <h1 className='font-cormorant text-6xl md:mb-[8px]'>Vedic Furniture</h1>
                <p className='font-avenir text-balance font-light md:w-[30%] text-[20px] leading-9 my-10'>
                Each design is an intention, to manifest <span className='font-bold'>“That One”</span>, into tangibility through <b className='font-bold'>sculptural, organic</b> and <b className='font-bold'>tactile</b> forms, harmoniously blending art with functionality.
                </p>
                <Link to={'/collection'}>
                    <button className='md:w-[200px] font-medium text-sm font-avenir px-4 py-2 rounded-md bg-white/10 border-[0.5px] border-[#ede6d6] md:mt-[28px] hover:bg-[#ede6d6] hover:text-[#131313] shadow-lg transition-all tracking-widest backdrop-blur-sm'>
                        VIEW COLLECTION
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CarouselComponent