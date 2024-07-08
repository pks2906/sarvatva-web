
interface HomeDynamicProps {
    image: string;
    shlok: string;
    desc: string;
}

const HomeDynamic = ({ image, shlok, desc }: HomeDynamicProps) => {
  return (
    <div className="flex flex-col w-full my-40">
        <div className="font-gotu text-[30px] mx-auto py-8 my-20 text-center">
            <h1>{shlok}</h1>
            <p>{desc}</p>
        </div>
        <img src={image} alt="Image" className="w-[65%] rounded-[40px] mx-auto"/>
    </div>
  )
}

export default HomeDynamic