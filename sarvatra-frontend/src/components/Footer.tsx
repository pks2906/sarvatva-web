import ig from '../assets/ig2-logo.svg';
import li from '../assets/linkedin-logo.svg';
import pi from '../assets/pi2-logo.svg';
import border from '../assets/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full h-auto pt-28 bg-black">
        <div className="flex flex-col md:flex-row justify-between mx-auto px-10">
            <div className="flex flex-col w-9/10 md:w-1/2">
                <h1 className="font-staatliches tracking-[0.125em] text-[#ECE6D7] text-xl md:text-2xl">Join our Community</h1>
                <p className="font-avenir text-[#ECE6D7] mt-10">Subscribe to our mailing list</p>
                <input type="text" placeholder="Email address" className="bg-transparent placeholder:text-[#ECE6D7] text-[#ECE6D7] font-avenir placeholder:font-light border-b border-[#ECE6D7] py-2 mt-10 w-full md:w-[75%]"/>
                <button className="flex w-[37.5%] px-4 py-3 bg-[#ECE6D7]/90 justify-center rounded-md font-avenir mt-6 hover:opacity-80 transition tracking-widest ease-in-out">SIGN UP</button>
            </div>
            <div className="flex flex-col w-9/10 md:w-1/3 mt-12 sm:mt-0">
                <h1 className="font-staatliches tracking-[0.125em] text-[#ECE6D7] text-xl md:text-2xl">Quick Links</h1>
                <div className="mt-10">
                    <Link to={'/about'}>
                        <p className="font-avenir text-[#ECE6D7] mb-6 hover:underline">Crafting Wholeness</p>
                    </Link>
                    <Link to={'/'}>
                        <p className="font-avenir text-[#ECE6D7] mb-6 hover:underline">Vedic Furniture</p>
                    </Link>
                    <Link to={'/collection'}>
                        <p className="font-avenir mb-6 text-[#ECE6D7] hover:underline cursor-pointer">Lookbook</p>
                    </Link>
                    <a href="https://medium.com/@iteesha18" target='_blank'>
                        <p className="font-avenir mb-6 text-[#ECE6D7] hover:underline">Blog</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col w-9/10 md:w-1/3 mt-12 sm:mt-0">
                <h1 className="font-staatliches tracking-[0.125em] text-[#ECE6D7] text-xl md:text-2xl">Let's Connect</h1>
                <p className="mt-10 text-[#ECE6D7] font-avenir">connect@sarvatva.co.in</p>
                <h1 className="font-staatliches tracking-[0.125em] text-[#ECE6D7] text-xl md:text-2xl mt-10">Follow Us</h1>
                <div className="grid grid-cols-3 mt-10">
                    <a href="https://pin.it/4FwD7UyAQ" className='cursor-auto'>
                        <img src={pi} alt="Pinterest" className='h-[42px] hover:opacity-75 transition-opacity cursor-pointer'/>
                    </a>
                    <a href="https://www.linkedin.com/company/sarvatva-craftingwholeness/?viewAsMember=true" className='cursor-auto'>
                        <img src={li} alt="Linkedin" className='h-[42px] hover:opacity-75 transition-opacity cursor-pointer'/>
                    </a>
                    <a href="https://www.instagram.com/_sarvatva_?igsh=czE2b29nNnE4YnFm&utm_source=qr" className='cursor-auto'>
                        <img src={ig} alt="Instagram" className='h-[42px] hover:opacity-75 transition-opacity cursor-pointer'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='mt-28 flex w-full pb-8'>
            <div className='bg-repeat-x bg-left w-full h-[54px] opacity-40' style={{
                backgroundImage: `url(${border})`,
            }}>
            </div>
        </div>
    </div>
  )
}

export default Footer