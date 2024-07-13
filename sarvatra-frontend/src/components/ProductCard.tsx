import test from '../assets/display1.jpg'

const ProductCard = () => {
  return (
    <div className='relative h-[100vh]'>
        <img src={test} alt="" className='h-full object-cover z-0'/>
        <div className='absolute top-[30%] text-white right-[5%] w-[40%]'>
           <div className='flex flex-col'>
                <h1 className='font-bold font-gotu text-6xl py-4 mb-8'>
                    CONCIOUSNESS
                </h1>
                <p className='w-[50%] font-avenir'>
                    The <b>Side Table</b> born from a single log of wood, it symbolises the beginning of manifestation from the supreme consciousness.
                </p>
                <button className='font-avenir flex items-center justify-center border border-white w-[30%] text-xs py-2 px-4 rounded my-16 hover:bg-white hover:text-black transition-all'>
                    REQUEST A QOUTE
                </button>
           </div>
        </div>
    </div>
  )
}

export default ProductCard