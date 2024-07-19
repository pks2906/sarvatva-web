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

const para1 = "We believe that wholeness is not found in the external universe but is a natural instinct of inner universe."
const para2 = "Wholeness is a craft waiting to be nurtured and revealed in the flow of everyday living."
const para21 = 'Let Sarvatva guide you on this journey of inner rediscovery, one creation at a time.'
const para3 = "The Vedas are considered to be the oldest surviving spiritual texts on Earth, compiled almost 3000 years ago."
const para4 = "The Vedas illuminate metaphysical concepts such as the nature of reality, existence, and ultimate truth."
const para41 = "By reconnecting with this ancient wisdom, we can navigate the complexities of the 21st Century with simplicity."
const para5 = "We are reimagining a 400 year old wood carving craftsmanship through its fusion with new-age design serving as a bridge between the ancient and the future."
const para6 = "Sarvatva invites you to experience the profoundness of India's artisanal legacy that enriches contemporary spaces."
const para7 = "The Indian Handicraft Industry is home to 7 million artisans. We are currently witnessing the last generation of artisans, as the new generation is opting out of it for better economic opportunities."
const para8 = "Sarvatva foresees an opportunity that lies in the fusion of craft, design & technology. It is an intention to change this narrative and keep the legacy alive for & through the generations to come. "

const AboutPage = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <AboutHero />
        <AboutLeft imgSrc={img1} title="REDISCOVER" para1={para1} para2={para2} para3={para21}/>
        <AboutRight imgSrc={img2} title='REIMAGINE' para1={para5} para2={para6}/>
        <AboutLeft imgSrc={img4} title="RECONNECT" para1={para3} para2={para4} para3={para41}/>
        <AboutRight imgSrc={img3} title='HIGHER PURPOSE' para1={para7} para2={para8}/>
        <AboutTeam />
        <Footer />
    </div>
  )
}

export default AboutPage