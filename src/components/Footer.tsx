import React from 'react'
import { NavLinks, footer } from '../constants/content'

const Footer = () => {
  return (
    <div className='mt-8 flex flex-col items-center'>
      <div className="media_links flex gap-4 item-center">
         {footer.links.map((item, index) => (
          <a key={index} href={item.link}>
            <img src={item.img} alt="link" />
          </a>
         ))}
      </div>
      <img src={footer.logo} className='mt-5' alt="logo" />
      <ul className="flex gap-x-5 items-center my-7">
          {NavLinks.map((item, index) => {
            return (
              <a key={index} href={item.link}>
                <li className="text-white  text-xs hover:opacity-70 uppercase font-main list-none">
                  {" "}
                  {item.name}{" "}
                </li>
              </a>
            );
          })} 
        </ul>
        <div className="h-[1px] my-1 bg-gradient-to-r from-[#EA6044] to-[#7F4B40] w-full mx-9" />
      <div>
        <p className="text-white/60 mb-2 mt-1 text-sm">
         {footer.copyright}
        </p>
      </div>
    </div>
  )
}

export default Footer