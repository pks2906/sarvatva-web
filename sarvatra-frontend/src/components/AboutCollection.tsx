// import { Link } from 'react-router-dom';
import img from '../assets/shlokLight.svg';

const AboutCollection = () => {
  return (
    <div className='h-[100vh] bg-[#131313] py-4'>
        <div className='flex flex-col-reverse md:flex-row h-[90%] mx-10 md:mx-[72px]'>
            <div className='flex flex-col justify-center py-4'>
                {/* <h1 className='font-staatliches tracking-[0.125em] text-4xl md:text-6xl mb-8 md:mb-[62px] text-[#CFC9BD]'>ROOTED IN VEDIC PHILOSOPHY</h1> */}
                <p className='font-avenir text-[14px] md:text-xl md:w-[70%] mb-[40px] text-[#CFC9BD]'>
                    Our Collection, <b>Tad Ekam</b> is Inspired by the “Nasadiya Sukta”, the 129th Hymn of the 10th Mandala of the Rig Veda. 
                </p>
                <p className='font-avenir text-[14px] md:text-xl md:w-[70%] mb-[40px] text-[#CFC9BD]'>
                It ponders upon the mystery of what existed before creation of Universe and how the creation came about. 
                </p>
                {/* <Link to={'/about'}>
                    <button className='font-avenir border-[1.5px] text-[12px] md:text-sm py-2 px-4 md:w-1/3 tracking-widest text-[#CFC9BD] font-medium rounded-md border-[#CFC9BD] hover:text-[#131313] hover:bg-[#CFC9BD] transition-all'>READ MORE</button>
                </Link> */}
            </div>
            <img src={img} alt="" className='h-1/2 md:h-full md:w-[50vw]'/>
        </div>
    </div>
  )
}

export default AboutCollection