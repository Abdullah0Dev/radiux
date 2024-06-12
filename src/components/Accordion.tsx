import { useState, useRef } from "react";
import images from "../constants/images";

export default function Accordion({ title, content }: { title: string; content: string; }) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const minuSign = <img src={images.down} className="w-4 object-cover h-4 rotate-180" alt="minus sign" />;
  const pluSign = <img src={images.down} className="w-4 object-cover h-4" alt="plus sign" />;

  return (
    <div className="shadow p-4 max-sm:mx-6 border border-secondary rounded-xl">
      <div
        className="flex gap-5 items-center select-none cursor-pointer justify-between"
        onClick={() => setIsActive(!isActive)}
      >
        <h1 className="text-white font-bold text-xl transition-all duration-1000 max-sm:text-base">
          {title}
        </h1>
        <div>{isActive ? minuSign : pluSign}</div>
      </div>
      <div
        ref={contentRef}
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isActive ? 'max-h-40' : 'max-h-0'
        }`}
        style={{ maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : '0' }}
      >
        <p className="font-400 text-base mt-3 text-white/70 opacity-80 leading-normal max-w-[500px]">
          {content}
        </p>
      </div>
    </div>
  );
}
