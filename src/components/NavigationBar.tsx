import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twitter from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";

function NavigationBar() {
  return (
    <nav className=" bg-white text-[#4d8137] flex items-center justify-center gap-20 py-2">
      <div className=" w-52">
        <img src={logo} className="w-full h-auto " alt="" />
      </div>
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
          to={"Service"}
        >
          Service
        </NavLink>
        <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " border-solid border-b-2 " : ""} pb-2`
          }
          to={"Pages"}
        >
          Pages
        </NavLink>
        <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " border-solid border-b-2 " : ""} pb-2`
          }
          to={"Project"}
        >
          Project
        </NavLink>
        <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? " border-solid border-b-2 " : ""} pb-2`
          }
          to={"Contact"}
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
    </nav>
  );
}

export default NavigationBar;
