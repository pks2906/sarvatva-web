import { Link } from 'react-router-dom'
import vid from '../assets/wholeness.jpg'

const LandingAbout = () => {
  return (
    <div className="h-[100vh]">
        {/* <div className="flex flex-col md:flex-row md:justify-center md:items-center md:ml-[20px] md:mr-[64px] md:py-8 md:gap-x-24">
            <img 
                src={vid}
                alt='craft-of-wholeness'
                className='h-[50vh] md:h-[90vh] md:w-[50vw] object-cover rounded-md'
            />
            <div className='text-[#131313] text-opacity-80 flex flex-col justify-center w-[80%] mx-auto'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mb-4 md:mb-[8px]'>THE CRAFT OF WHOLENESS</h1>
                <p className='font-avenir font-light md:text-[20px] mt-8 md:my-10 md:w-[75%] leading-9'>Our creations are more than furniture; they are meticulously crafted invitations to experience an intrinsic sense of wholeness that resides in our inner world.</p>
                <Link to={'/about'}>
                    <button className='font-avenir border-[0.5px] text-[10px] md:text-sm py-2 px-4 w-1/2 md:w-[200px] tracking-widest opacity-80 bg-white/10 text-[#131313] font-medium rounded-md border-[#131313] shadow-lg backdrop-blur-sm hover:text-[#131313] hover:bg-[#EDE6D6] transition-all md:mt-[28px] mt-4' >EXPLORE MORE</button>
                </Link>
            </div>
        </div> */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:py-0 md:gap-x-24">
            <img 
                src={vid}
                alt='craft-of-wholeness'
                className='h-[50vh] md:h-[100vh] md:w-[60vw] object-cover'
            />
            <div className='text-[#131313] flex flex-col justify-center w-[80%] mx-auto px-6 md:px-0'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mt-[15%] md:mt-0'>THE CRAFT OF WHOLENESS</h1>
                <p className='font-avenir text-balance font-light md:text-[20px] mt-[10%] md:mt-[28px] md:w-[75%] leading-[1.5rem] md:leading-9'>Our creations are more than furniture; they are meticulously crafted invitations to experience an intrinsic sense of wholeness that resides in our inner world.</p>
                <Link to={'/about'}>
                    <button className='font-avenir border-[0.5px] text-[10px] md:text-sm py-2 px-4 w-1/2 md:w-[200px] tracking-widest opacity-80 bg-white/10 text-[#131313] font-medium rounded-md border-[#131313] shadow-lg backdrop-blur-sm hover:text-[#EDE6D6] hover:bg-[#131313] transition-all mt-[10%] md:mt-[28px]' >EXPLORE MORE</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LandingAbout