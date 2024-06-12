import { useState } from "react";
import { NavLinks } from "../constants/content";
import images from "../constants/images";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="py-2 pt-5 flex justify-between px-8">
      <img src={images.logo} alt="logo" className="w-6 h-6" />
      <nav className="max-sm:hidden">
        <ul className="flex gap-x-5 items-center">
          {NavLinks.map((item, index) => (
            <a key={index} href={item.link}>
              <li className="text-white text-sm hover:opacity-70 uppercase font-main list-none">
                {item.name}
              </li>
            </a>
          ))}
          <button className="py-1 ml-9 px-3 rounded-full border-secondary border-3 border">
            <p className="text-white font-main text-sm">Launch App</p>
          </button>
        </ul>
      </nav>
      <button
        className="hidden max-sm:flex"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <img src={images.menu} alt="menu" className="w-6 h-6" />
      </button>
      {mobileMenu && (
        <nav className={`fixed top-0 left-0 w-full h-full bg-primary flex flex-col items-center justify-center transition-transform duration-300 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            className="absolute top-5 right-9 text-white text-2xl"
            onClick={() => setMobileMenu(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col items-center gap-y-5 mt-16">
            {NavLinks.map((item, index) => (
              <a key={index} href={item.link} onClick={() => setMobileMenu(false)}>
                <li className="text-white text-sm hover:opacity-70 uppercase font-main list-none">
                  {item.name}
                </li>
              </a>
            ))}
            <button
              className="py-1 px-3 rounded-full border-secondary border-3 border mt-5"
              onClick={() => setMobileMenu(false)}
            >
              <p className="text-white font-main text-sm">Launch App</p>
            </button>
          </ul>
        </nav>   
      )}
    </header>
  );
};

export default Navbar;
