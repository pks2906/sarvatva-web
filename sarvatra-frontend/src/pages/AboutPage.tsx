import img1 from '../assets/mind.jpg'
import img2 from '../assets/engrave.jpg'
import img3 from '../assets/identity.jpg'
import img4 from '../assets/recon.jpg'
import AboutTeam from "../components/AboutTeam"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutHero from "../components/AboutHero"
import AboutLeft from "../components/AboutLeft"
import AboutRight from '../components/AboutRight'

const para1 = "Wholeness is not a treasure to be sought in the external world but a natural instinct of our inner world. It is a craft waiting to be nurtured and revealed in the flow of everyday living."
const para2 = "Wholeness is a journey of inner rediscovery. Let Sarvatva guide you on this transformative journey, one exquisite creation at a time."
const para3 = "The Vedas are ancient sacred texts of India, considered to be the oldest surviving spiritual texts in the world. It is believed that the knowledge of the Vedas was revealed to sages through deep meditation."
const para4 = "The Vedas explore metaphysical concepts such as the nature of reality, existence, and ultimate truth. By reconnecting with this ancient wisdom, we can navigate the complexities of life with simplicity in the 21st Century."
const para5 = "With a legacy spanning 400 years, India's wood carving craft is a living testament to our rich cultural heritage. Sarvatva is rejuvenating this craft through a harmonious fusion of new-age design and age-old craftsmanship."
const para6 = "Each piece serves as a bridge where the ancient meets the future. Through this reimagining, Sarvatva invites you to experience the profoundness of India's artisanal legacy that enriches contemporary spaces."
const para7 = "The Indian Handicraft Industry is the bread winner for 7 million artisans across the geography of India. We are currently witnessing the last generation of artisans, as the new generation is opting out of it for better economic opportunities. "
const para8 = "As changemakers, we foresee a huge economic growth that lies in the fusion of craft, design & technology. It might be our final call to change this narrative and keep the legacy alive for & through the generations to come. "

const AboutPage = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <AboutLeft imgSrc={img1} title="REDISCOVER" para1={para1} para2={para2}/>
        <AboutRight imgSrc={img2} title='REIMAGINE' para1={para5} para2={para6}/>
        <AboutLeft imgSrc={img4} title="RECONNECT" para1={para3} para2={para4}/>
        <AboutRight imgSrc={img3} title='HIGHER PURPOSE' para1={para7} para2={para8}/>
        <AboutTeam />
        <Footer />
    </div>
  )
}

export default AboutPage