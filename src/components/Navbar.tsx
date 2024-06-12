import { NavLinks } from "../constants/content";
import images from "../constants/images";
const Navbar = () => {
  return (
    <header className="py-2 pt-5 flex justify-between px-8">
      <img src={images.logo} alt="logo" className="w-6 -6" />
      <nav className="max-sm:hidden">
        <ul className="flex gap-x-5 items-center">
          {NavLinks.map((item, index) => {
            return (
              <a key={index} href={item.link}>
                <li className="text-white text-sm hover:opacity-70 uppercase font-main list-none">
                  {" "}
                  {item.name}{" "}
                </li>
              </a>
            );
          })}
          <button className="py-1 ml-9 px-3 rounded-full border-secondary border-3 border">
            <p className="text-white font-main text-sm">Launch App</p>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
