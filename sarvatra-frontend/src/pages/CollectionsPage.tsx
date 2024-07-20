import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from '../data.ts'
import AboutCollection from "../components/AboutCollection.tsx";

const CollectionsPage = () => {
  return (
    <div className="overflow-x-clip bg-[#131313]">
      <Navbar />
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