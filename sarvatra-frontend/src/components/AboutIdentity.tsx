import { motion } from 'framer-motion';
import identity from '../assets/identity.jpg';

const AboutIdentity = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center h-auto md:h-screen">
      <motion.img 
        src={identity}
        alt="identity"
        className="h-64 md:h-full object-cover w-full md:w-auto z-10 md:absolute md:right-0 md:top-0"
        initial={{ x: "0%", y: 0, width: "100%" }}
        whileInView={{ 
          x: "0%", 
          y: "30px", 
          width: "100%", 
          height: "auto", 
          marginRight: "0", 
          borderRadius: "0" 
        }}
        viewport={{ amount: "some", once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="relative p-8 bg-opacity-75 w-full md:w-2/5 ml-0 md:ml-[72px] mt-4 md:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <h1 className='text-4xl font-gotu mb-[64px]'>The Identity</h1>
        <p className='w-full md:w-[90%] font-avenir font-light opacity-80 text-lg mt-6'>
          The symbol for Sarvatva encapsulates the concept of "wholeness," derived from its Sanskrit roots. 
          Nestled within the wave's curves are two dots, symbolizing the dual aspects of a unified whole. 
          One dot represents supreme consciousness, while the other signifies individual consciousness. 
          The harmonious placement of these dots within the wave underscores their interconnectedness, 
          illustrating that true wholeness arises from the balanced interplay between universal and individual consciousness.
        </p>
      </motion.div>
    </div>
  )
}

export default AboutIdentity