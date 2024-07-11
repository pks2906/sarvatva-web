

const Footer = () => {
  return (
    <div className="relative mt-24 bottom-0 w-full h-auto pt-16 px-10 bg-[#E3DFD6]">
        <div className="flex flex-col md:flex-row justify-between mx-auto">
            <div className="flex flex-col w-9/10 md:w-1/2">
                <h1 className="font-gotu text-xl">Join our Community</h1>
                <p className="font-avenir mt-10">Subscribe to our mailing list</p>
                <input type="text" placeholder="Email address" className="bg-transparent placeholder:text-black font-avenir placeholder:font-light border-b border-black py-2 mt-10 w-[75%]"/>
                <button className="flex w-[37.5%] px-4 py-3 bg-[#D3C9B2] justify-center rounded-full font-avenir my-4 hover:bg-white transition ease-in-out">Sign Up</button>
            </div>
            <div className="flex flex-col w-1/3">
                <h1 className="font-gotu text-xl">Quick Links</h1>
                <div className="mt-10">
                    <p className="font-avenir mb-6">Crafting Wholeness</p>
                    <p className="font-avenir mb-6">Vedic Furniture</p>
                    <p className="font-avenir mb-6">Lookbook</p>
                    <p className="font-avenir mb-6">Blog</p>
                </div>
            </div>
            <div className="flex flex-col w-1/3">
                <h1 className="font-gotu text-xl">Let's Connect</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer