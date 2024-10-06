import { Link } from 'react-router-dom';
import img from '../assets/wood.jpg';

const LandingAbout = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center lg:py-0 lg:space-x-12 bg-white">
        <img
          src={img}
          alt='craft-of-wholeness'
          className='h-[50vh] lg:h-[100vh] lg:w-[50vw] xl:w-[60vw] object-cover bg-[#131313]'
        />
        <div className='flex h-[50vh] lg:mx-auto'>
          <div className='text-[#131313] text-center lg:text-start flex flex-col justify-center w-[80%] mx-auto px-6 lg:px-0'>
            <h1 className='font-cormorant text-4xl md:text-6xl lg:mb-[8px]'>The Craft of <br />Wholeness</h1>
            <p className='font-avenir text-balance font-light md:text-[20px] mt-[10%] lg:my-10 lg:w-[75%] leading-[1.5rem] lg:leading-9'>Our creations are more than furniture; they are meticulously crafted invitations to experience an intrinsic sense of wholeness that resides in our inner Cosmos.</p>
            <Link to={'/about'}>
              <button className='font-avenir border-[0.5px] text-[10px] lg:text-sm py-2 px-4 w-1/2 lg:w-[200px] tracking-widest opacity-80 bg-white/10 text-[#131313] font-medium rounded-md border-[#131313] shadow-lg backdrop-blur-sm hover:text-[#EDE6D6] hover:bg-[#131313] transition-all mt-[10%] lg:mt-[28px]'>EXPLORE MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
