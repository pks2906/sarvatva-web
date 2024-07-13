import { motion } from 'framer-motion';
import identity from '../assets/identity.jpg';

const AboutPurpose = () => {
  return (
    <div className='sm:mb-20'>
      {/* Larger screen layout */}
      <div className="hidden md:flex relative h-screen items-center bg-[#D7D1C4]">
        <motion.img 
          src={identity}
          alt="identity"
          className="absolute left-0 h-full object-cover z-10"
          initial={{ x: "0%", y: 0, width: "100%" }}
          whileInView={{ x: "0%", y: "0%", width: "40%", height: "500px", marginLeft: "72px", borderRadius: "10px" }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute right-0 w-2/5 mr-[72px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <h1 className='text-4xl font-gotu mb-6'>The Higher Purpose</h1>
          <div className='w-[90%] font-avenir text-lg'>
            <p className='my-6'>
              The Indian Handicraft Industry is the bread winner for 7 million artisans across the geography of India. We are currently witnessing the last generation of artisans, as the new generation is opting out of it for better economic opportunities.
            </p>
            <p className='mt-6'>
              As changemakers, we foresee a huge economic growth that lies in the fusion of craft, design & technology. It might be our final call to change this narrative and keep the legacy alive for & through the generations to come.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Smaller screen layout */}
      <div className="md:hidden h-screen flex flex-col items-center bg-[#D7D1C4] mb-28">
        <motion.img 
          src={identity}
          alt="identity"
          className="w-4/5 h-auto object-cover z-10"
          initial={{ x: "0%", y: 0, width: "100%" }}
          whileInView={{ 
            x: "0%", 
            y: "0%", 
            width: "90%", 
            height: "500px", 
            marginTop: "32px", 
            borderRadius: "10px" 
          }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="relative p-8 bg-opacity-75 w-full mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "some" }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <h1 className='text-3xl font-gotu mb-8'>The Higher Purpose</h1>
          <div className='w-full font-avenir font-light opacity-80 mt-6'>
            <p className='my-6'>
              The Indian Handicraft Industry is the bread winner for 7 million artisans across the geography of India. We are currently witnessing the last generation of artisans, as the new generation is opting out of it for better economic opportunities.
            </p>
            <p className='mt-4'>
              As changemakers, we foresee a huge economic growth that lies in the fusion of craft, design & technology. It might be our final call to change this narrative and keep the legacy alive for & through the generations to come.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPurpose;
