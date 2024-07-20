import { Link } from 'react-router-dom'
import img from '../assets/wood.jpg'

const LandingAbout = () => {
  return (
    <div className="h-[100vh]">
        <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center md:py-0 md:space-x-12 bg-white">
            <img 
                src={img}
                alt='craft-of-wholeness'
                className='h-[50vh] md:h-[100vh] md:w-[60vw] object-cover'
            />
            <div className='flex h-[50vh] md:mx-auto'>
                <div className='text-[#131313] flex flex-col justify-center w-[80%] mx-auto px-6 md:px-0'>
                    <h1 className='font-cormorant text-4xl md:text-6xl md:mb-[8px]'>The Craft of <br />Wholeness</h1>
                    <p className='font-avenir text-balance font-light md:text-[20px] mt-[10%] md:my-10 md:w-[75%] leading-[1.5rem] md:leading-9'>Our creations are more than furniture; they are meticulously crafted invitations to experience an intrinsic sense of wholeness that resides in our inner Cosmos.</p>
                    <Link to={'/about'}>
                        <button className='font-avenir border-[0.5px] text-[10px] md:text-sm py-2 px-4 w-1/2 md:w-[200px] tracking-widest opacity-80 bg-white/10 text-[#131313] font-medium rounded-md border-[#131313] shadow-lg backdrop-blur-sm hover:text-[#EDE6D6] hover:bg-[#131313] transition-all mt-[10%] md:mt-[28px]' >EXPLORE MORE</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingAbout