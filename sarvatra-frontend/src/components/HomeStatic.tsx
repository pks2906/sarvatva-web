
interface HomeStaticProps {
    image: string;
    shlok: string;
    desc: string;
}

const HomeStatic = ({ image, shlok, desc }: HomeStaticProps) => {
  return (
    <div className="flex flex-col w-full">
        <div className="font-gotu text-[30px] mx-auto py-8 my-20 text-center">
            <h1>{shlok}</h1>
            <p>{desc}</p>
        </div>
        <img src={image} alt="Image" />
    </div>
  )
}

export default HomeStatic