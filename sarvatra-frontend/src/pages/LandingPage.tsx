import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import LandingAbout from "../components/LandingAbout";
import LandingHero from "../components/LandingHero";
import SliderCarousel from "../components/SliderCarousel";

const LandingPage = () => {
  return (
    <div className="overflow-x-clip bg-[#131313]">
      <Navbar />
      <LandingHero />
      <SliderCarousel />
      <LandingAbout />
      <Footer />
    </div>
  )
}

export default LandingPage