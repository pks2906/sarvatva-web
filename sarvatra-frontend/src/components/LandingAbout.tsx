import { Link } from 'react-router-dom'
import vid from '../assets/square.mp4'

const LandingAbout = () => {
  return (
    <div className="h-screen bg-[#111111]">
        <div className="flex flex-col md:flex-row items-center md:mx-[72px] md:py-8 md:gap-x-6">
            <video 
                src={vid}
                autoPlay
                loop
                muted
                className='h-[50vh] md:h-[90vh] md:w-[50vw]'
            />
            <div className='text-[#F5ECD8] flex flex-col justify-center w-[80%] mx-auto'>
                <h1 className='font-staatliches text-4xl md:text-6xl tracking-[0.125em] mb-4'>THE CRAFT OF WHOLENESS</h1>
                <p className='font-avenir font-light text-sm md:text-[20px] my-6 md:my-[60px] md:w-[75%]'>Our creations are more than furniture; they are meticulously crafted invitations to experience an intrinsic sense of wholeness that resides in our inner world.</p>
                <Link to={'/about'}>
                    <button className='font-avenir border-[1.5px] text-[12px] md:text-sm py-2 px-4 w-1/2 md:w-1/3 tracking-widest text-[#F5ECD8]font-medium rounded-md border-[#F5ECD8] hover:text-[#111111] hover:bg-[#F5ECD8] transition-all' >EXPLORE MORE</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LandingAbout