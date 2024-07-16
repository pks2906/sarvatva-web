import { Link } from 'react-router-dom';
import img from '../assets/shlok.svg';

const AboutCollection = () => {
  return (
    <div className='h-[100vh] bg-black py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 h-full mx-10 md:mx-[72px]'>
            <div className='flex flex-col justify-center pt-8 py-4'>
                <h1 className='font-staatliches tracking-[0.125em] text-4xl md:text-6xl mb-8 md:mb-[62px] text-[#ffffff]'>ROOTED IN VEDIC PHILOSOPHY</h1>
                <p className='font-avenir text-[16px]  md:text-lg md:w-[80%] mb-[40px] text-[#ffffff]'>
                    <b>Tad Ekam</b> is inspired by the “Nasadiya Sukta” The 129th Hymn of the 10th Mandala of the Rig Veda, ponders upon the mystery of what existed before the cosmic creation and how the creation came about.
                </p>
                <Link to={'/about'}>
                    <button className='font-avenir border-[1.5px] text-[12px] md:text-sm py-2 px-4  md:w-1/3 tracking-widest text-white font-medium rounded-md border-[#ffffff] hover:text-[#FBF7F2] hover:bg-[#20221C] transition-all'>READ MORE</button>
                </Link>
            </div>
            <img src={img} alt="" className='h-full pt-8'/>
        </div>
    </div>
  )
}

export default AboutCollection