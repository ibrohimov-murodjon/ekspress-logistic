import {
  newLogo,
  instaLogo,
  tgLogo,
  callLogoWhite,
  emailLogoNavbar,
} from "../assets";
import DropTopBtn from "../components/DropTopBtn";

const navLinks = [
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

function Footer() {
  return (
    <footer className=" bg-[#091242] ">
      <section className="myContainer relative py-[23px]">
        <div className="flex items-end justify-between">
          <div className="space-x-4 items-center">
            {navLinks.map((link, index) => (
              <>
                <a
                  href={`#${link.to}`}
                  className="footer__link relative text-white font-krub font-bold"
                >
                  {link.name}
                </a>
              </>
            ))}
          </div>
          {/* <div className="flex gap-4 items-center maxSm:w-full maxSm:justify-between "> */}
          <img className="w-[150px]" src={newLogo} alt="" />
          <div className="flex items-center gap-x-6 ">
            <a
              href="https://www.instagram.com/t.eks.logistic/"
              target={"_blank"}
            >
              <img src={instaLogo} alt="instagram logo" className="w-[28px]" />
            </a>
            <a href="https://t.me/ekspress_logistics" target={"_blank"}>
              <img src={tgLogo} alt="telegram logo" className="w-[32px]" />
            </a>
            <a href="tel:+998941213399" target={"_blank"}>
              <img
                src={callLogoWhite}
                alt="telegram logo"
                className="w-[32px]"
              />
            </a>
            <a href="#" target={"_blank"}>
              <img
                src={emailLogoNavbar}
                alt="telegram logo"
                className="w-[32px]"
              />
            </a>
          </div>
          {/* </div> */}
          {/* <div className="w-full h-[2px] bg-[#D6D6D6]"></div> */}
        </div>
        <DropTopBtn/>
      </section>
    </footer>
  );
}

export default Footer;
