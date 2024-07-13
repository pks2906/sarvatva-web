import reconnect from '../assets/reconnect.jpg';
import engrave from '../assets/engrave.jpg';
import mind from '../assets/mind.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import line from '../assets/line.svg';
import decorator from '../assets/decorator.svg';

type CoreValue = {
  img: string;
  title: string;
  description: string;
};

const AboutCore = () => {
  const [ref] = useInView({ threshold: 0.1 });

  const fadeIn = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const coreValues: CoreValue[] = [
    {
      img: reconnect,
      title: 'ReConnecting',
      description: 'with our roots through the route of Ancient Indian Vedas.',
    },
    {
      img: engrave,
      title: 'ReImagining',
      description: 'spaces through fusion of craftsmanship, design & technology.',
    },
    {
      img: mind,
      title: 'ReDiscovering',
      description: 'paths to well-being during these unprecedented times.',
    },
  ];

  return (
    <div ref={ref} className="min-h-screen flex flex-col items-center justify-center mb-20 px-4 md:px-0 md:py-8 md:mt-32 mt-12">
      <div className='flex flex-col w-full justify-center items-center gap-y-2 mb-4 py-4'>
        <img src={line} alt="line" width={1050}/>
        <img src={decorator} alt="sarvatva logo" width={50}/>
      </div>
      <h1 className="text-4xl font-gotu mb-16 text-center">The Core</h1>
      <div className="flex flex-col md:flex-row w-full mt-4">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 flex flex-col items-center py-8 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeIn}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden block rounded-full">
              <img
                src={value.img}
                alt={value.title}
                className="rounded-full h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
              />
            </div>
            <h1 className="font-gotu text-2xl my-8 text-center">{value.title}</h1>
            <p className="font-avenir font-light opacity-80 px-2 text-center text-lg w-2/3">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutCore;
