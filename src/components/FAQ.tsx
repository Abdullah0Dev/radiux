import { FAQs } from "../constants/content";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div>
      <div className="my-9  self-center items-center justify-center flex flex-col">
        <h1 className="title font-main uppercase text-4xl text-white self-center text-center mb-1">
          FAQ
        </h1>
        <div className="h-[1px] mx-5 my-1 bg-gradient-to-r from-[#EA6044] to-[#7F4B40] w-12" />
      </div>
      <div className="justify-center flex self-center">
        <div className="flex flex-col gap-4 max-w-40rem">
          {FAQs.map(({ question, answer }) => (
            <Accordion title={question} content={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
