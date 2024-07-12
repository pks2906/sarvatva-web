import AboutCore from "../components/AboutCore"
import AboutIdentity from "../components/AboutIdentity"
import AboutParallax from "../components/AboutParallax"
import AboutPurpose from "../components/AboutPurpose"
import AboutTeam from "../components/AboutTeam"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import vid from '../assets/about-hero-vid.mp4'
import AboutHero from "../components/AboutHero"

const AboutPage = () => {
  return (
    <div>
        <Navbar />
        {/* <AboutParallax vidUrl={vid} heading="सर्वत्वा | Wholeness" subheading=""/> */}
        <AboutHero />
        <AboutIdentity />
        <AboutCore />
        <AboutPurpose />
        <AboutTeam />
        <Footer />
    </div>
  )
}

export default AboutPage