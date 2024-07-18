import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import vid from "../assets/landing-vid-ezgif.com-reverse-video.mp4"
import poster from "../assets/land-vid-bg.png";
import HeroParallax from "../components/HeroParallax";
import {LandingCarousel} from "../components/LandingCarousel";
import LandingAbout from "../components/LandingAbout";

const heroSubhead = "Going 13.8 Billion years back in time, when all creation originated from the supreme consciousness or “That one”, our collection ponders upon what existed before the universe was born and how all creation came about. Each design is an intention, to manifest this cosmic mystery, into tangibility."

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroParallax vidUrl={vid} posterUrl={poster} heading="तद् एकम् | That One" subheading={heroSubhead}/>
      <LandingCarousel />
      <LandingAbout />
      <Footer />
    </div>
  )
}

export default LandingPage