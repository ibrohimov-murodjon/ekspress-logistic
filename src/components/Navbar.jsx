import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { instaLogo, faceLogo, close, burger } from "../assets";

const navLinks = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Why Us?",
    to: "advantages",
  },
  {
    name: "Our Team",
    to: "team",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar z-[999] ">

    //   <h1 className="text-3xl text-white">Logo</h1>

    //   <ul className="list-none z-[999] sm:flex hidden justify-end items-center flex-1">
    //     {navLinks.map((nav, index) => (
    //       <li
    //         key={index}
    //         className={`font-poppins font-normal cursor-pointer text-[16px] ${
    //           active === nav.name ? "text-white" : "text-dimWhite"
    //         } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
    //         onClick={() => setActive(nav.name)}
    //       >
    //         <a href={`#${nav.to}`}>{nav.name}</a>
    //       </li>
    //     ))}
    //   </ul>

    //   <div className="sm:hidden flex flex-1 justify-end items-center z-[999]">
    //     <img
    //       src={toggle ? close : burger}
    //       alt="menu"
    //       className="w-[28px] h-[28px] object-contain"
    //       onClick={() => setToggle(!toggle)}
    //     />

    //     <div
    //       className={`${
    //         !toggle ? "hidden" : "flex"
    //       } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    //     >
    //       <ul className="list-none flex justify-end items-start flex-1 flex-col z-[999]">
    //         {navLinks.map((nav, index) => (
    //           <li
    //             key={index}
    //             className={`font-poppins font-medium cursor-pointer text-[16px] ${
    //               active === nav.name ? "text-white" : "text-dimWhite"
    //             } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
    //             onClick={() => setActive(nav.name)}
    //           >
    //             <a href={`#${nav.to}`}>{nav.name}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="sticky w-full z-[998] top-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md ">
      <div className="myContainer">
        <div className="flex items-center justify-between pt-[30px] pb-[26px] mobileLg:flex-col maxSm:justify-center mobileLg:pt-[16px]">
          <Slide direction="down" duration={2500} className="maxSm:hidden">
            <div className="flex space-x-4  items-center">
              {navLinks.map((link, index) => (
                <>
                  <a
                    href={`#${link.to}`}
                    className="nav relative text-white font-krub font-bold"
                  >
                    {link.name}
                  </a>
                  <div className="w-[1px] h-[19px] [&:not(:last-child)]:bg-darkGray"></div>
                </>
              ))}
            </div>
          </Slide>
          <Slide direction="down" duration={2500}>
            <div className="flex items-center gap-x-6 mobileLg:mt-4">
              <a href="https://www.instagram.com/" target={"_blank"}>
                <img
                  src={instaLogo}
                  alt="instagram logo"
                  className="w-[28px]"
                />
              </a>
              <a href="https://www.facebook.com/" target={"_blank"}>
                <img src={faceLogo} alt="instagram logo" className="w-[28px]" />
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
