import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key = {item.name}
        to = {item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-green-400"
        onClick = {() => handleClick && handleClick(item.name)}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#24393b] ">
        <img src={logo} alt="logo"
        className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3 z-20">
        {
        mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2 "
          onClick={() => setMobileMenuOpen(false)}/>)
          : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2 "
          onClick={() => setMobileMenuOpen(true)}/>)
        }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#132d29] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo"
        className="w-full h-14 object-contain" />
        <NavLinks handleClick = {() => setMobileMenuOpen(false)}/>
      </div>
    </>
  )
};

export default Sidebar;
