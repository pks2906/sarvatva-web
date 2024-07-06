import reconnect from '../assets/reconnect.jpg';
import engrave from '../assets/engrave.jpg';
import mind from '../assets/mind.jpg';

const AboutCore = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-gotu mb-12 text-center">The Core</h1>
      <div className='flex w-full mt-4'>
        <div className='w-1/3 flex flex-col items-center'>
            <div className='overflow-hidden block rounded-full'>  
                <img src={reconnect} alt="Men with traditional makeup" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
            </div>
            <h1 className='font-gotu text-3xl my-8'>ReConnecting</h1>
            <p className='font-avenir px-2 text-center text-lg w-2/3'>with our roots through the route of Ancient Indian Vedas.</p>
        </div>
        <div className='w-1/3 flex flex-col items-center'>
            <div className='overflow-hidden block rounded-full'>
                <img src={engrave} alt="Men with traditional makeup" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
            </div>
            <h1 className='font-gotu text-3xl my-8'>ReImagining</h1>
            <p className='font-avenir px-2 text-center text-lg w-2/3'>spaces through fusion of craftsmanship, design & technology.</p>
        </div>
        <div className='w-1/3 flex flex-col items-center'>
            <div className='overflow-hidden block rounded-full'>
                <img src={mind} alt="Men with traditional makeup" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
            </div>
            <h1 className='font-gotu text-3xl my-8'>ReDiscovering</h1>
            <p className='font-avenir px-2 text-center text-lg w-2/3'>paths to well-being during these unprecedented times.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCore