import logo from '../assets/navLight.png';

const Header = () => {
  return (
    <div className="z-50 fixed">
        <div className="flex w-full items-center justify-between">
            <img src={logo} alt="sarvatva" width={240} className=''/>
            <div className='flex'>
                <p>Vedic Furniture</p>
                <p>Vedic Furniture</p>
                <p>Vedic Furniture</p>
            </div>
        </div>
    </div>
  )
}

export default Header