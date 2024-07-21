import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import LandingAbout from "../components/LandingAbout";
import Carousel from "../components/Carousel";
import LandingHero from "../components/LandingHero";

const LandingPage = () => {
  return (
    <div className="overflow-x-clip bg-[#131313]">
      <Navbar />
      <LandingHero />
      <Carousel />
      <LandingAbout />
      <Footer />
    </div>
  )
}

export default LandingPage