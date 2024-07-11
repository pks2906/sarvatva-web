import AboutCore from "../components/AboutCore"
import AboutHero from "../components/AboutHero"
import AboutIdentity from "../components/AboutIdentity"
import AboutPurpose from "../components/AboutPurpose"
import AboutTeam from "../components/AboutTeam"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const AboutPage = () => {
  return (
    <div>
        <Navbar />
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