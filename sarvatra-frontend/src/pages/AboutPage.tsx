import AboutHero from "../components/AboutHero"
import Navbar from "../components/Navbar"

const AboutPage = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <div className="h-screen bg-white">
        <p>Your next component goes here...</p>
      </div>
    </div>
  )
}

export default AboutPage