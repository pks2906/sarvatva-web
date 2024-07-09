import Navbar from "../components/Navbar"
import banner from "../assets/contactus.png"

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <img src={banner} alt="" className="w-full"/>
      <div className="flex flex-col items-center mt-20 md:mt-44 px-4 md:px-0">
        <h1 className="text-4xl font-gotu">Contact Us</h1>
        <div className="flex flex-col md:flex-row my-8 text-xl font-avenir font-medium items-center">
          <label htmlFor="category" className="p-2">I am an: </label>
          <select className="text-center px-4 py-2 border-t-2 border-b-2 border-black" name="category" id="userCategory">
            <option value="none">Select option</option>
            <option value="architect">Architect</option>
            <option value="interiorDesigner">Interior Designer</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-x-4 md:gap-x-24 gap-y-4 md:gap-y-10 w-full md:w-[90%]">
          <input type="text" placeholder="Company / Name *" className="placeholder:text-[#393939] font-avenir font-light text-xl px-4 py-2 border-b border-[#393939]"/>
          <input type="text" placeholder="Country *" className="placeholder:text-[#393939] font-avenir font-light text-xl px-4 py-2 border-b border-[#393939]"/>
          <input type="text" placeholder="First Name *" className="placeholder:text-[#393939] font-avenir font-light text-xl px-4 py-2 border-b border-[#393939]"/>
          <input type="text" placeholder="Last Name *" className="placeholder:text-[#393939] font-avenir font-light text-xl px-4 py-2 border-b border-[#393939]"/>
          <input type="text" placeholder="Email *" className="placeholder:text-[#393939] font-avenir font-light text-xl px-4 py-2 border-b border-[#393939]"/>
          <input type="text" placeholder="Phone No. *" className="placeholder:text-[#393939] font-avenir font-light text-xl px-4 py-2 border-b border-[#393939]"/>
        </div>
        <div className="my-4 flex flex-col w-full md:w-[90%]">
          <h1 className="font-avenir text-xl py-2">Product of Interest</h1>
          <div className="grid grid-cols-2 md:flex md:space-x-10">
            <div className="flex py-2 font-avenir font-light text-lg">
              <input type="checkbox" id="product1" value="product1"/>
              <label htmlFor="product1" className="px-4">Product One</label>
            </div>
            <div className="flex py-2 font-avenir font-light text-lg">
              <input type="checkbox" id="product2" value="product2"/>
              <label htmlFor="product2" className="px-4">Product Two</label>
            </div>
            <div className="flex py-2 font-avenir font-light text-lg">
              <input type="checkbox" id="product3" value="product3"/>
              <label htmlFor="product3" className="px-4">Product Three</label>
            </div>
            <div className="flex py-2 font-avenir font-light text-lg">
              <input type="checkbox" id="product4" value="product4" className="text-neutral-800"/>
              <label htmlFor="product4" className="px-4">Product Four</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4 w-full md:w-[90%]">
          <textarea name="message" id="message" placeholder="How can we help? *" className="border font-avenir border-[#393939] p-2 resize-none" rows={8}></textarea>
          <div className="flex my-2 font-avenir font-light text-lg">
            <input type="checkbox" id="notifications" value="true"/>
            <label htmlFor="notification" className="px-4">I would like to receive the Sarvatva newsletter with updates, inspiration and more</label>
          </div>
          <button className="w-full md:w-[100px] my-2 transition-all rounded-full font-avenir text-center hover:opacity-75 px-4 py-2 bg-black text-white">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage