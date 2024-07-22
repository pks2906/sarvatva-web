import { Link } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import img1 from '../assets/revised1.jpg';
import img2 from '../assets/revised2.png';
import img3 from '../assets/revised4.jpg';
import mob1 from '../assets/mobile2.jpg';
import mob2 from '../assets/mobile3.jpg';
import mob3 from '../assets/mobile4.jpg';
import { useEffect, useState } from 'react';
import './CarouselComponent.css'; // Import custom CSS for styling

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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        defaultAnimation: {
            duration: 1500
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>;

            function clearNextTimeout() {
                clearTimeout(timeout);
            }

            function nextTimeout() {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    slider.next();
                }, 5000);
            }

            slider.on("created", () => {
                nextTimeout();
            });

            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        },
    ]);

    return (
        <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider carousel-container">
                {(isMobile ? mobileItems : items).map((item, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <ImageCarousel image={item} />
                    </div>
                ))}
            </div>
            {loaded && instanceRef.current && (
                <>
                    <Arrow
                        left
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                        disabled={currentSlide === 0}
                    />
                    <Arrow
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                        disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                    />
                </>
            )}
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                instanceRef.current?.moveToIdx(idx);
                            }}
                            className={"dot" + (currentSlide === idx ? " active" : "")}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    );
};

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
        );
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
    );
};

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const { disabled, left, onClick } = props;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const arrowDisabled = disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={onClick}
        fill='#EDE6D6'
        fillOpacity={80}
        className={`arrow ${left ? "arrow--left" : "arrow--right"}${arrowDisabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{
          backgroundColor: 'rgb(255,255,255, 0.1)',
          borderRadius: '6px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          padding: isMobile ? '8px' : '6px'
        }}
      >
        {left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

export default CarouselComponent;
