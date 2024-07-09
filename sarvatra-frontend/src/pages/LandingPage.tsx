import HomeHero from "../components/HomeHero"
import HomeStatic from "../components/HomeStatic"
import Navbar from "../components/Navbar"
import img1 from "../assets/static1.png";
import img2 from "../assets/product2.jpg"
import img3 from "../assets/static2.png";
import img4 from "../assets/product4.jpg";
import img5 from "../assets/product5.jpg";
import img6 from "../assets/product6.jpg";
import img7 from "../assets/product7.jpg";
import HomeDynamic from "../components/HomeDynamic";
import AboutTeam from "../components/AboutTeam";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeStatic image={img1} shlok="चैतन्यं आस्तित्वस्य प्रथमा भाव:" desc="Consciousness, the first sense of being."/>
      <HomeDynamic image={img2} shlok="इच्छा, उच्चतरम प्राप्ति हेतुम आकञ्चितवाँन।" desc="Desire, the longing for something higher."/>
      <HomeStatic image={img3} shlok="अभिव्यक्तिः, सृष्टेः आलोकः।" desc="Manifestation, the glimpse of creation."/>
      <HomeDynamic image={img4} shlok="अवरोधः, अग्रे कूर्दनस्य कृते एकः सोपानः।" desc="Hurdle, a stepback for a leap ahead."/>
      <HomeStatic image={img5} shlok="अविरोध, सदेच्छा शान्तिमार्ग:।" desc="Harmony, the path to tranquility."/>
      <HomeDynamic image={img6} shlok="माया, यत्र वास्तविकता प्रश्नः भवति।" desc="Illusion, where reality become a question."/>
      <HomeStatic image={img7} shlok="समर्पणं, यत्र जीवनं स्वप्रवाहं गृह्णाति।" desc="Surrender, where life takes its own flow."/>
      <AboutTeam />
    </div>
  )
}

export default LandingPage