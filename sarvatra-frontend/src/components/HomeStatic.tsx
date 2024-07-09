interface HomeStaticProps {
  image: string;
  shlok: string;
  desc: string;
}

const HomeStatic = ({ image, shlok, desc }: HomeStaticProps) => {
return (
  <div className="flex flex-col w-full items-center">
      <div className="font-gotu text-[20px] md:text-[30px] mx-auto py-8 my-10 md:my-20 text-center px-4">
          <h1>{shlok}</h1>
          <p>{desc}</p>
      </div>
      <div className="w-full h-[60vh]">
          <img src={image} alt="Image" className="object-cover w-full h-full" />
      </div>
  </div>
)
}

export default HomeStatic;