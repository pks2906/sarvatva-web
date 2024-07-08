import HomeHero from "../components/HomeHero"
import HomeStatic from "../components/HomeStatic"
import Navbar from "../components/Navbar"
import img1 from "../assets/static1.png";
import img2 from "../assets/dynmaic1.png"
import HomeDynamic from "../components/HomeDynamic";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeStatic image={img1} shlok="चैतन्यं आस्तित्वस्य प्रथमा भाव:" desc="Consciousness, the first sense of being."/>
      <HomeDynamic image={img2} shlok="इच्छा, उच्चतरम प्राप्ति हेतुम आकञ्चितवाँन।" desc="Desire, the longing for something higher."/>
    </div>
  )
}

export default LandingPage