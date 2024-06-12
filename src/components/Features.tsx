import { Feature } from "../constants/content";
import images from "../constants/images";

const Features = () => {
  return (
    <div>
      <img src={images.dot} className="scale-75 absolute left-3" alt="star" />
      <div className="my-9 self-center items-center justify-center flex flex-col">
        <h1 className="title font-main uppercase text-4xl text-white self-center text-center mb-1">
          Features
        </h1>
        <div className="h-[1px] mx-5 my-1 bg-gradient-to-r from-[#EA6044] to-[#7F4B40] w-32" />
      </div>
      <img src={images.star} className="scale-75 absolute right-3" alt="star" />
      {/* grid */}
      <div className="flex max-sm:flex-col gap-3 justify-between mx-9">
        {
          Feature.slice(0, 3).map((item, index) => (
            <div 
              key={index} 
              className={`feature-card border max-md:mb-3 overflow-clip h-96 px-4 py-5 flex flex-col border-secondary rounded-2xl max-sm:w-full ${
                item.id === 2 ? 'w-full' : 'w-72'
              }`}
            >
              <h2 className="text-white font-main text-xl"> {item.title} </h2>
              <p className="text-white/70 text-base">
                {item.desc}
              </p>
              <img src={item.img} className="" alt="image" />
            </div>
          ))
        }
      </div>

      {/* second grid */}
      <div className="flex mt-5 gap-5 max-sm:flex-col justify-between mx-9">
        {
          Feature.slice(3, 5).map((item, index) => (
            <div 
              key={index} 
              className="feature-card border w-[50%] overflow-clip h-96 px-4 py-5 flex flex-col border-white/20 rounded-2xl max-sm:w-full"
            >
              <h2 className="text-white font-main text-xl"> {item.title} </h2>
              <p className="text-white/70 text-base">
                {item.desc}
              </p>
              <img src={item.img} className="" alt="image" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Features;
