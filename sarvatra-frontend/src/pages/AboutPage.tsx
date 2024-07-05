import { useState } from "react";
import AboutHero from "../components/AboutHero"
import Content from "../components/Content"
import Navbar from "../components/Navbar"

const AboutPage = () => {
    const [scrollBlocked, setScrollBlocked] = useState(true);
  return (
    <div>
        <Navbar />
        <AboutHero setScrollBlocked={setScrollBlocked}/>
        <Content scrollBlocked={scrollBlocked} />
    </div>
  )
}

export default AboutPage