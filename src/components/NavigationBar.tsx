import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import linkedin from "../assets/icons/linkedin.svg";
import drop_down from "../assets/icons/drop_down.svg";
import twitter from "../assets/icons/x.svg";
import facebook from "../assets/icons/facebook.svg";
import burger_menu from "../assets/icons/burger_menu.svg";
import { useState, useRef } from "react";
import { useClickOutsideToClose } from "../hooks/useClickOutsideToClose";

function NavigationBar() {
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const [serviceMenu, setServiceMenu] = useState<boolean>(false);
  const [serviceMenuTablet, setServiceMenuTablet] = useState<boolean>(false);
  const [pagesMenu, setPagesMenu] = useState<boolean>(false);
  const [pagesMenuTablet, setPagesMenuTablet] = useState<boolean>(false);

  const toggleServiceMenu = () => {
    console.log("toggled");
    setServiceMenu(!serviceMenu);
  };
  const toggleServiceMenuTablet = () => {
    setPagesMenuTablet(false);
    setServiceMenuTablet(!serviceMenuTablet);
  };

  const togglePagesMenu = () => {
    setPagesMenu(!pagesMenu);
  };
  const togglePagesMenuTablet = () => {
    setServiceMenuTablet(false);
    setPagesMenuTablet(!pagesMenuTablet);
  };

  const toggleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  const serviceRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);

  useClickOutsideToClose(serviceRef, () => setServiceMenu(false));
  useClickOutsideToClose(pagesRef, () => setPagesMenu(false));

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
          <div
            ref={serviceRef}
            onClick={toggleServiceMenu}
            className={`hover:cursor-pointer relative pb-2`}
          >
            <div className="flex gap-1 items-center">
              <p>Services</p>
              <img src={drop_down} alt="" />
            </div>
            <div
              className={`${
                serviceMenu ? "flex" : "hidden"
              } bg-white text-[14px] font-semibold pb-2 flex-col items-center px-2 top-[150%] right-1/2 rounded-ee-lg rounded-es-lg translate-x-[50%] absolute w-[220px]`}
            >
              <NavLink
                to={"service/truckload"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Truckload Service
              </NavLink>
              <NavLink
                to={"service/partial-truckload"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Partial Truckload Service
              </NavLink>
              <NavLink
                to={"service/ltl-freight"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                LTL Freight
              </NavLink>
              <NavLink
                to={"service/international-freight-shipping"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                International Freight Shipping
              </NavLink>
              <NavLink
                to={"service/air-freight-shipping"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Air Freight Shipping
              </NavLink>
              <NavLink
                to={"service/container-shipping"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Container Shipping
              </NavLink>
              <NavLink
                to={"service/expedited-freight"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Expedited Freight
              </NavLink>
              <NavLink
                to={"service/refrigerated-freight"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Refrigerated Freight
              </NavLink>
              <NavLink
                to={"service/heavy-haul"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Heavy Haul
              </NavLink>
              <NavLink
                to={"service/rail-freight"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Rail Freight
              </NavLink>
              <NavLink
                to={"service/white-gloves"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                White Gloves
              </NavLink>
              <NavLink
                to={"service/specialized-freight"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Specialized Freight
              </NavLink>
            </div>
          </div>

          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
          <div
            ref={pagesRef}
            onClick={togglePagesMenu}
            className={`hover:cursor-pointer relative pb-2`}
          >
            <div className="flex gap-1 items-center">
              <p>Pages</p>
              <img src={drop_down} alt="" />
            </div>
            <div
              className={`${
                pagesMenu ? "flex" : "hidden"
              } bg-white text-[14px] font-semibold pb-2 flex-col items-center px-2 top-[150%] right-1/2 rounded-ee-lg rounded-es-lg translate-x-[50%] absolute w-[220px]`}
            >
              <NavLink
                to={"freight-glossary"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Glossary
              </NavLink>
              <NavLink
                to={"freight-insurance"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Freight Insurance
              </NavLink>
              <NavLink
                to={"freight-damage-claims"}
                className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
              >
                Freight & Damage Claims
              </NavLink>
            </div>
          </div>
          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"frequently-asked-questions"}
          >
            FAQs
          </NavLink>
          <div className="w-[2px] h-5 bg-[#4d81373a] pb-2"></div>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? " border-solid border-b-2 " : ""} pb-2`
            }
            to={"careers"}
          >
            Careers
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
      <button onClick={toggleDropMenu} className="lg:hidden w-[20px] mr-5 ">
        <img src={burger_menu} alt="" />
      </button>
      <div
        className={`${
          dropMenu ? "flex" : "hidden"
        } absolute top-[100%] w-full bg-white p-5 gap-5 flex-col`}
      >
        <NavLink to={"home"}>Home</NavLink>
        <div
          onClick={toggleServiceMenuTablet}
          className="flex gap-1 items-center"
        >
          <p>Services</p>
          <img src={drop_down} alt="" />
        </div>
        <div
          className={`${serviceMenuTablet ? "flex" : "hidden"} flex-col pl-5`}
        >
          <NavLink
            to={"service/truckload"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Truckload Service
          </NavLink>
          <NavLink
            to={"service/partial-truckload"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Partial Truckload Service
          </NavLink>
          <NavLink
            to={"service/ltl-freight"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            LTL Freight
          </NavLink>
          <NavLink
            to={"service/international-freight-shipping"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            International Freight Shipping
          </NavLink>
          <NavLink
            to={"service/air-freight-shipping"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Air Freight Shipping
          </NavLink>
          <NavLink
            to={"service/container-shipping"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Container Shipping
          </NavLink>
          <NavLink
            to={"service/expedited-freight"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Expedited Freight
          </NavLink>
          <NavLink
            to={"service/refrigerated-freight"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Refrigerated Freight
          </NavLink>
          <NavLink
            to={"service/heavy-haul"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Heavy Haul
          </NavLink>
          <NavLink
            to={"service/rail-freight"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Rail Freight
          </NavLink>
          <NavLink
            to={"service/white-gloves"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            White Gloves
          </NavLink>
          <NavLink
            to={"service/specialized-freight"}
            className="hover:bg-primary_green hover:text-white text-start w-full py-2 rounded-md"
          >
            Specialized Freight
          </NavLink>
        </div>
        <div
          onClick={togglePagesMenuTablet}
          className="flex gap-1 items-center"
        >
          <p>Pages</p>
          <img src={drop_down} alt="" />
        </div>
        <div className={`${pagesMenuTablet ? "flex" : "hidden"} flex-col pl-5`}>
          <NavLink
            to={"freight-glossary"}
            className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
          >
            Glossary
          </NavLink>
          <NavLink
            to={"freight-insurance"}
            className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
          >
            Freight Insurance
          </NavLink>
          <NavLink
            to={"freight-damage-claims"}
            className="hover:bg-primary_green hover:text-white text-start pl-2 w-full py-2 rounded-md"
          >
            Freight & Damage Claims
          </NavLink>
        </div>
        <NavLink to={"frequently-asked-questions"}>FAQs</NavLink>
        <NavLink to={"careers"}>Careers</NavLink>
      </div>
    </nav>
  );
}

export default NavigationBar;
