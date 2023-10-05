import { Slide } from "react-awesome-reveal";
import instaLogo from "../assets/instagram_logo.svg";
import faceLogo from "../assets/facebook_logo.svg";

const data = [
  {
    name: "Home",
    to: "#",
  },
  {
    name: "About",
    to: "#about",
  },
  {
    name: "Why Us?",
    to: "#advantages",
  },
  {
    name: "Our Team",
    to: "#team",
  },
  {
    name: "Contact",
    to: "#contact",
  },
];

function Navbar() {
  return (
    <nav className="sticky z-[999] top-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md">
      <div className="myContainer">
        <div className="flex items-center justify-between pt-[30px] pb-[26px] mobileLg:flex-col">
          <Slide direction="down" duration={2500}>
            <div className="flex space-x-4  items-center">
              {data.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.to}
                    className="nav relative text-white font-krub font-bold"
                  >
                    {link.name}
                  </a>
                  <div className="w-[1px] h-[19px] [&:not(:last-child)]:bg-darkGray"></div>
                </div>
              ))}
            </div>
          </Slide>
          <Slide direction="down" duration={2500}>
            <div className="flex items-center gap-x-6 mobileLg:mt-4">
              <a href="https://www.instagram.com/" target={"_blank"}>
                <img src={instaLogo} alt="instagram logo" />
              </a>
              <a href="https://www.facebook.com/" target={"_blank"}>
                <img src={faceLogo} alt="instagram logo" />
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
