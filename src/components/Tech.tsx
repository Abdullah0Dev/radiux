import { technology } from "../constants/content";

const Tech = () => {
  return (
    <div className="mt-12">
      <div className="my-9  self-center items-center justify-center flex flex-col">
        <h1 className="title font-main uppercase text-4xl text-white self-center text-center mb-1">
          {technology.title}
        </h1>
        <div className="h-[1px] mx-5 my-1 bg-gradient-to-r from-[#EA6044] to-[#7F4B40] w-40" />
        <p className="text-white/60  mt-9 text-base">{technology.desc}</p>
      </div>
      {/* item */}
      <div className=" bg-[url(./src/assets/images/line_1.png)] bg-no-repeat  flex item-center justify-center">
        <img src={technology.img} alt="tech_feature" />
      </div>
    </div>
  );
};

export default Tech;
