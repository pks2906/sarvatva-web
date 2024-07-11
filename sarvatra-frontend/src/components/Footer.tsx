import ig from '../assets/ig-logo.svg';
import li from '../assets/linkedin.svg';
import pi from '../assets/pinterest.svg';
import border from '../assets/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative mt-24 bottom-0 w-full h-auto pt-28 bg-[#E3DFD6]">
        <div className="flex flex-col md:flex-row justify-between mx-auto px-10">
            <div className="flex flex-col w-9/10 md:w-1/2">
                <h1 className="font-gotu text-xl md:text-2xl">Join our Community</h1>
                <p className="font-avenir mt-10">Subscribe to our mailing list</p>
                <input type="text" placeholder="Email address" className="bg-transparent placeholder:text-black font-avenir placeholder:font-light border-b border-black py-2 mt-10 w-full md:w-[75%]"/>
                <button className="flex w-[37.5%] px-4 py-3 bg-[#D3C9B2] justify-center rounded-full font-avenir my-4 hover:bg-white transition ease-in-out">Sign Up</button>
            </div>
            <div className="flex flex-col w-9/10 md:w-1/3 mt-12 sm:mt-0">
                <h1 className="font-gotu text-xl md:text-2xl">Quick Links</h1>
                <div className="mt-10">
                    <Link to={'/about'}>
                        <p className="font-avenir mb-6 hover:underline">Crafting Wholeness</p>
                    </Link>
                    <Link to={'/'}>
                        <p className="font-avenir mb-6 hover:underline">Vedic Furniture</p>
                    </Link>
                    {/* Add link to lookbook */}
                    <p className="font-avenir mb-6 hover:underline cursor-pointer">Lookbook</p>
                    <a href="https://medium.com/@iteesha18" target='_blank'>
                        <p className="font-avenir mb-6 hover:underline">Blog</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col w-9/10 md:w-1/3 mt-12 sm:mt-0">
                <h1 className="font-gotu text-xl md:text-2xl">Let's Connect</h1>
                <p className="mt-10 font-avenir">connect@sarvatva.co.in</p>
                <h1 className="font-gotu text-xl md:text-2xl mt-10">Follow Us</h1>
                <div className="grid grid-cols-3 mt-10">
                    <a href="https://pin.it/4FwD7UyAQ" className='cursor-auto'>
                        <img src={pi} alt="Pinterest" className='h-[50px] hover:opacity-75 transition-opacity cursor-pointer'/>
                    </a>
                    <a href="https://www.linkedin.com/company/sarvatva-craftingwholeness/?viewAsMember=true" className='cursor-auto'>
                        <img src={li} alt="Linkedin" className='h-[50px] hover:opacity-75 transition-opacity cursor-pointer'/>
                    </a>
                    <a href="https://www.instagram.com/_sarvatva_?igsh=czE2b29nNnE4YnFm&utm_source=qr" className='cursor-auto'>
                        <img src={ig} alt="Instagram" className='h-[50px] hover:opacity-75 transition-opacity cursor-pointer'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='mt-28 flex w-full pb-8'>
            <div className='bg-repeat-x bg-left w-full h-[54px]' style={{
                backgroundImage: `url(${border})`,
            }}>
            </div>
        </div>
    </div>
  )
}

export default Footer