import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import burger_menu from "../assets/icons/burger_menu.svg";

function NavigationBar() {
  return (
    <nav className="sticky z-50 inset-0 bg-white text-[#4d8137] flex items-center justify-between  lg:justify-center gap-20 py-4 lg:py-2">
      <div className=" w-[140px] lg:w-52 ml-5 lg:ml-0">
        <img src={logo} className="w-full h-auto " alt="" />
      </div>
      <div className="hidden lg:flex gap-14 items-center">
        {/* Navigation items */}
        <div className=" flex gap-5 items-center">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"home"}
          >
            Home
          </NavLink>
          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2 "></div>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"service"}
          >
            Service
          </NavLink>
          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"pages"}
          >
            Pages
          </NavLink>
          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"project"}
          >
            Project
          </NavLink>
          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"contact"}
          >
            Contact
          </NavLink>
        </div>
        {/* Socials */}
        <div className="socials flex gap-5">
          <a href="">
            <img src={whatsapp} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </div>
        {/* Request Quote button */}
        <button className="p-3 border border-solid border-[#4d8137]">
          Request Quote
        </button>
        <p>Portal</p>
      </div>
      <div className="lg:hidden w-[20px] mr-5 ">
        <img src={burger_menu} alt="" />
      </div>
      <div className="hidden absolute top-[100%] w-full bg-white p-5 flex flex-col">
        <p>Home</p>
        <p>Service</p>
        <p>Pages</p>
        <p>Project</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}

export default NavigationBar;
