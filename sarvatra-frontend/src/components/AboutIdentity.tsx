import {  motion } from 'framer-motion';
import identity from '../assets/identity.jpg';

const AboutIdentity = () => {

  return (
    <div className="relative h-screen flex items-center">
        <motion.img 
            src={identity}
            alt="identity"
            className="absolute right-0 h-full object-cover z-10"
            initial={{ x: "0%", y: 0, width: "100%" }}
            whileInView={{ x: "0%", y: "50px", width: "50%", height: "585px"}}
            viewport={{ amount: "all" }}
            transition={{ duration: 0.75 }}
        />
        <motion.div
            className="relative p-8 bg-opacity-75 w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            viewport={{ amount: "all" }}
            transition={{ duration: 1, delay: 1 }}
        >
            <h1 className='text-4xl font-gotu mb-6'>The Identity</h1>
            <p className='w-[90%]'>The symbol for Sarvatva encapsulates the concept of "wholeness," derived from its Sanskrit roots. Nestled within the wave's curves are two dots, symbolizing the dual aspects of a unified whole. One dot represents supreme consciousness, while the other signifies individual consciousness. The harmonious placement of these dots within the wave underscores their interconnectedness, illustrating that true wholeness arises from the balanced interplay between universal and individual consciousness.</p>
        </motion.div>
    </div>
  )
}

export default AboutIdentity