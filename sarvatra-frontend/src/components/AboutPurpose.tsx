import {  motion } from 'framer-motion';
import identity from '../assets/identity.jpg';

const AboutPurpose = () => {

  return (
    <div className="relative h-screen flex items-center bg-[#D7D1C4]">
        <motion.img 
            src={identity}
            alt="identity"
            className="absolute left-0 h-full object-cover z-10"
            initial={{ x: "0%", y: 0, width: "100%" }}
            whileInView={{ x: "0%", y: "30px", width: "50%", height: "585px", marginLeft: "30px", borderRadius: "10px" }}
            viewport={{ amount: "some", once: true }}
            transition={{ duration: 0.5, delay: 1.25 }}
        />
        <motion.div
            className="absolute right-0 w-2/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: "some" }}
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
  )
}

export default AboutPurpose