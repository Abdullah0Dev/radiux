import { Powers } from "../constants/content";
import images from "../constants/images";

const Power = () => {
  return (
    <div className="relative mt-24 max-sm:mx-2 ml-12 bg-[url(./src/assets/images/line_5.png)] ">
      <div className="container px-12 mx-auto">
        <div className=" flex overflow-hidden h-[70vh] bg-no-repeat justify-between">
        <img src={images.star} className="scale-75 absolute left-3" alt="star" />
      <img src={images.dot} className="scale-75 absolute left-[50%]" alt="star" />
          <div className="max-sm:w-full w-[50vw] pl-5">
            <h1 className="font-main max-sm:text-3xl text-5xl max-xl:text-3xl">
              Unlock the <span className="text-secondary">Power</span>
              to Identify Potential
            </h1>
            <p className="text-white/50 w-[70%] max-sm:w-full my-3">
              {Powers.desc}
            </p>
            <button className="py-2 flex items-center gap-2 px-5 rounded-full border-secondary border-3 border">
              <p className="text-white font-main text-[10px]">Launch App</p>
              <img className="w-4 h-4" src={images.arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 max-sm:hidden pb-12">
          <img
            className="-mt-[9vw] -mr-32"
            src={images.iphone_1}
            alt="feature1"
          />
          <img
            className="-mt-[12vh] scale-125  xl:flex hidden -ml-[23vw]"
            src={images.iphone_2}
            alt="feature1"
          />
        </div>
      </div>
    </div>
  );
};

export default Power;