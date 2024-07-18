import { useState, useRef } from 'react';
import founder1 from '../assets/founder.jpg';
import founder2 from '../assets/founder2.png';
import founder3 from '../assets/founder3.png';
import { motion } from 'framer-motion';

type TeamMember = {
  img: string;
  name: string;
  title: string;
  education: string;
  more: string;
};

const AboutTeam = () => {
  // const [ref] = useInView({ threshold: 0.1 });
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fadeIn = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setTimeout(() => {
      cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  const teamMembers: TeamMember[] = [
    {
      img: founder3,
      name: 'Iteesha Agrawal',
      title: 'Creative Mystic',
      education: 'National Institute of Fashion Technology, India',
      more: 'When I was 22, being stuck indoors for months under lockdown, I began questioning reality, wondering if the perceived reality is just a bubble that could burst in the blink of an eye. This period of isolation sparked a curiosity, leading me to embark on a journey of discovery.<br/><br/> I found some answers in the deeper understanding of the branch of philosophy called metaphysics. The revelations resonated deeply with me. I realized that these insights were meant to be shared, and thus Sarvatva was born.',
    },
    {
      img: founder1,
      name: 'Tejaswi Pathak',
      title: 'Indology Guru',
      education: 'National Institute of Fashion Technology, India',
      more: 'When I was 12, I came across an article by Osho titled "You Become What You Think," which enlightened me about ancient Indian Scriptures. One day, I sneaked into my father\'s library and started reading the books on Indian Mythology. Though unsure of how much I understood at the time, it piqued my curiosity to delve deeply into Indian Scriptures.<br/><br/> At Sarvatva, I found my calling as I began deciphering ancient wisdom and contributing to the 21st-century’s quest for unwavering truth.',
    },
    {
      img: founder2,
      name: 'Ishita Srivastava',
      title: 'Design Wizard',
      education: 'Politecnico di Milano, Milan & National Institute of Fashion Technology, India',
      more: 'When I was 18, I was inspired by works of Marcel Lajos Breuer. I started re-creating models of his iconic armchairs. It sparked a desire to combine functionality with artistic expression, and I\'ve been hooked to furniture design ever since.<br/><br/> At Sarvatva, I am fusing Indian Craftsmanship and artistic expression together to create pieces that not only serve a purpose but also add a touch of personality to spaces',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center px-4 md:px-0 md:py-8 md:mt-24 md:mb-12 mt-12">
      
      <h1 className="text-3xl md:text-4xl font-staatliches text-center text-[#131313]">The Alchemists</h1>
      <p className="mb-8 mt-2 font-avenir text-neutral-500 md:text-lg text-center">
        Crafting Extraordinary from the Mundane
      </p>
      <div className="flex flex-col md:flex-row w-full mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full md:w-1/3 flex flex-col items-center mb-16 md:mb-0 relative">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={fadeIn}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden block rounded-3xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-80 w-80 object-cover scale-110 hover:scale-100 ease-in duration-300"
                />
              </div>
              <h1 className="font-gotu text-2xl md:text-3xl mt-8 mb-2 text-center">{member.name}</h1>
              <p className="font-avenir text-lg md:text-xl font-light opacity-80 mt-2 mb-2 text-center">{member.title}</p>
              <p className="font-avenir text-sm text-neutral-400 w-3/4 md:w-1/2 text-center mb-2">{member.education}</p>
              <p
                className="font-avenir px-2 text-center hover:text- transition text-lg w-2/3 cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                Know more 
              </p>
            </motion.div>
            {selectedCard === index && (
              <motion.div
                className="w-full flex flex-col items-center justify-center py-4 px-8 mt-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                ref={el => (cardRefs.current[index] = el)}
              >
                <button
                  className="text-[#131313] text-2xl font-medium self-end"
                  onClick={handleCloseCard}
                >
                  &times;
                </button>
                <p className="font-avenir font-light opacity-80 mb-4 text-justify" dangerouslySetInnerHTML={{ __html: member.more}}></p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
