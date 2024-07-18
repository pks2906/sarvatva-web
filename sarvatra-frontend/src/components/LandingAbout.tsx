import { Link } from 'react-router-dom'
import vid from '../assets/square.mp4'

const LandingAbout = () => {
  return (
    <div className="h-screen bg-[#131313] flex my-auto">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:ml-[40px] md:mr-[72px] md:py-8 md:gap-x-16">
            <video 
                src={vid}
                autoPlay
                loop
                muted
                className='h-[50vh] md:h-[90vh] md:w-[50vw] object-cover'
            />
            <div className='text-[#F5ECD8] text-opacity-80 flex flex-col justify-center w-[80%] mx-auto'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mb-4 md:mb-[8px]'>THE CRAFT OF WHOLENESS</h1>
                <p className='font-avenir font-light md:text-[20px] mt-8 md:my-10 md:w-[75%] leading-9'>Our creations are more than furniture; they are meticulously crafted invitations to experience an intrinsic sense of wholeness that resides in our inner world.</p>
                <Link to={'/about'}>
                    <button className='font-avenir border-[0.5px] text-[12px] md:text-sm py-2 px-4 w-1/2 md:w-[200px] tracking-widest opacity-80 bg-white/10 text-[#EDE6D6] font-medium rounded-md border-[#EDE6D6] shadow-lg backdrop-blur-sm hover:text-[#131313] hover:bg-[#EDE6D6] transition-all md:mt-[28px] mt-8' >EXPLORE MORE</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LandingAbout