import { motion } from 'framer-motion';
import identity from '../assets/identity.jpg';

const AboutIdentity = () => {
  return (
    <div className='sm:mb-20'>
      {/* Layout for larger screens */}
      <div className="hidden md:flex relative items-center h-screen">
        <motion.img 
          src={identity}
          alt="identity"
          className="absolute right-0 w-2/5 h-full object-cover z-10"
          initial={{ x: "0%", y: 0, width: "100%" }}
          whileInView={{ 
            x: "0%", 
            y: "0%", 
            width: "40%", 
            height: "500px", 
            marginRight: "72px", 
            borderRadius: "10px" 
          }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="relative p-8 bg-opacity-75 w-2/5 ml-[72px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 0.75, delay: 0.75 }}
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

      {/* Layout for smaller screens */}
      <div className="flex flex-col md:hidden items-center h-screen mb-28">
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
          viewport={{ amount: "some", once: true }}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          <h1 className='text-3xl font-gotu mb-8'>The Identity</h1>
          <p className='w-full font-avenir font-light opacity-80 mt-6'>
            The symbol for Sarvatva encapsulates the concept of "wholeness," derived from its Sanskrit roots. 
            Nestled within the wave's curves are two dots, symbolizing the dual aspects of a unified whole. 
            One dot represents supreme consciousness, while the other signifies individual consciousness. 
            The harmonious placement of these dots within the wave underscores their interconnectedness, 
            illustrating that true wholeness arises from the balanced interplay between universal and individual consciousness.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutIdentity;
