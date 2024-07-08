import vid from "../assets/land-vid-bg.png"

const HomeHero = () => {
  return (
    <div className="relative h-[105vh] font-gotu">
        <img 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={vid}
            alt="bg-video"
        />
    </div>
  )
}

export default HomeHero