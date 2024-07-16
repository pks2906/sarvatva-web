import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
// import vid from "../assets/landing-vid-ezgif.com-reverse-video.mp4"
// import HeroParallax from "../components/HeroParallax";
import ProductCard from "../components/ProductCard";
import { products } from '../data.ts'
import AboutCollection from "../components/AboutCollection.tsx";

// const heroSubhead = "Going 13.8 Billion years back in time, when all creation originated from the supreme consciousness or “That one”, our collection ponders upon what existed before the universe was born and how all creation came about. Each design is an intention, to manifest this cosmic mystery, into tangibility."


const CollectionsPage = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroParallax vidUrl={vid} heading="तद् एकम् | That One" subheading={heroSubhead}/> */}
      <AboutCollection />
      <div className="mb-[-50vh]">
        {products.map((product, index) => {
          return <ProductCard key={index} {...product}/>
        })}
      </div>
      <Footer />
    </div>
  )
}

export default CollectionsPage