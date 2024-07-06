import founder1 from '../assets/founder.jpg';
import founder2 from '../assets/founder2.png';
import founder3 from '../assets/founder3.png';

const AboutTeam = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-gotu text-center">The Alchemists</h1>
    <p className='mb-8 mt-2 font-avenir text-neutral-500 text-lg'>Crafting Extraordinary from the Mundane</p>
    <div className='flex w-full mt-4'>
      <div className='w-1/3 flex flex-col items-center'>
          <div className='overflow-hidden block rounded-full'>  
              <img src={founder1} alt="Men with traditional makeup" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
          </div>
          <h1 className='font-gotu text-3xl mt-8 mb-2'>Tejaswi Pathak</h1>
          <p className='font-avenir text-xl mt-2 mb-2'>Indology Guru</p>
          <p className='font-avenir text-neutral-400 w-1/2 text-center mb-2'>National Institute of Fashion Technology, India</p>
          <p className='font-avenir px-2 text-center text-lg w-2/3'>more...</p>
      </div>
      <div className='w-1/3 flex flex-col items-center'>
          <div className='overflow-hidden block rounded-full'>
              <img src={founder3} alt="Men with traditional makeup" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
          </div>
          <h1 className='font-gotu text-3xl mt-8 mb-2'>Iteesha Agrawal</h1>
          <p className='font-avenir text-xl mt-2 mb-2'>Creative Mystic</p>
          <p className='font-avenir text-neutral-400 w-1/2 text-center mb-2'>National Institute of Fashion Technology, India</p>
          <p className='font-avenir px-2 text-center text-lg w-2/3'>more...</p>
      </div>
      <div className='w-1/3 flex flex-col items-center'>
          <div className='overflow-hidden block rounded-full'>
              <img src={founder2} alt="Men with traditional makeup" className='rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300'/>
          </div>
          <h1 className='font-gotu text-3xl mt-8 mb-2'>Ishita Srivastava</h1>
          <p className='font-avenir text-xl mt-2 mb-2'>Design Wizard</p>
          <p className='font-avenir text-neutral-400 w-1/2 text-center mb-2'>Politecnico di Milano, Milan & National Institute of Fashion Technology, India</p>
          <p className='font-avenir px-2 text-center text-lg w-2/3'>more...</p>
      </div>
    </div>
  </div>
  )
}

export default AboutTeam