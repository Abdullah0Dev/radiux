import { HeroContent } from "../constants/content";
import images from "../constants/images";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between mt-24 max-sm:mx-2  bg-no-repeat  bg-[url(./src/assets/images/circle.png)]  ml-12 ">
        <div className="  max-sm:w-full pl-5">
          <h1 className="font-main max-sm:text-3xl text-5xl max-xl:text-3xl ">
            Your <span className="text-secondary">Trading Strategy</span> with
            Smart Filters
          </h1>
          <p className="text-white/50  w-[70%] max-sm:w-full  my-3">
            {HeroContent.content.desc}
          </p>
          <button className="py-2 flex items-center gap-2 px-5 rounded-full border-secondary border-3 border">
            <p className="text-white font-main text-[10px]">Launch App</p>
            <img className="w-4 h-4" src={images.arrow} alt="arrow" />
          </button>
        </div>
        <div className="max-sm:hidden w-[70%] pb-12 xl:pl-[30vw]  ">
          <img src={images.star} alt="star" />
          <img
            className="max-md:scale-90 scale-125 -ml-14  mt-[5vh] "
            src={images.float_1}
            alt="feature1"
          />
          <img
            className="max-md:scale-90 -ml-[30vw] "
            src={images.float_2}
            alt="feature1"
          />
          <img src={images.star} className="scale-75 -ml-12" alt="star" />
          <img
            className="max-md:scale-90 -mt-[5vh] "
            src={images.float_3}
            alt="feature1"
          />
        </div>
      </div>
      <img
        src={images.gradient}
        alt="gradient"
        className="w-full h-32  bottom-0"
      />
      <div className="partner flex  flex-wrap justify-between mx-12">
        {HeroContent.partner.map((item, index) => {
          return (
            <a key={index} href={item.link}>
              {" "}
              <img className="mb-5" src={item.img} alt={"partner"} />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
