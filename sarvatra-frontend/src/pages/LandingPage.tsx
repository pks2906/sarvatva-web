import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import vid from "../assets/hero-vid.mp4"
import HeroParallax from "../components/HeroParallax";
import {LandingCarousel} from "../components/LandingCarousel";
import LandingAbout from "../components/LandingAbout";

const heroSubhead = "Going 13.8 Billion years back in time, when all creation originated from the supreme consciousness or “That one”, our collection ponders upon what existed before the universe was born and how all creation came about. Each design is an intention, to manifest this cosmic mystery, into tangibility."

const LandingPage = () => {
  return (
    <div className="overflow-x-clip bg-[#131313]">
      <Navbar />
      <HeroParallax vidUrl={vid} heading="तद् एकम् | That One" subheading={heroSubhead}/>
      <LandingCarousel />
      <LandingAbout />
      <Footer />
    </div>
  )
}

export default LandingPage