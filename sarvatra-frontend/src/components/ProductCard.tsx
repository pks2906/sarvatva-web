

interface ProductProps {
  title: string;
  description: string;
  src: string;
  align: string;
}

const ProductCard = ({ title, description, src, align }: ProductProps) => {
  return (
    <div className='h-[150vh] sticky top-0'>
      <div className="h-[100vh]">
        <img src={src} alt="" className='h-full object-cover'/>
        <div className={`absolute top-[30%] text-white ${align}-[5%] w-[40%]`}>
           <div className='flex flex-col'>
                <h1 className='font-bold font-gotu text-6xl py-4 mb-8'>
                    {title}
                </h1>
                <p className='w-[50%] font-avenir'>
                    {description}
                </p>
                <button className='font-avenir flex items-center justify-center border border-white w-[30%] text-xs py-2 px-4 rounded my-16 hover:bg-white hover:text-black transition-all'>
                    REQUEST A QOUTE
                </button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard