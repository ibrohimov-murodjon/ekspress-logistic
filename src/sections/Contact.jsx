import { Slide, Fade } from "react-awesome-reveal";
//images
import { emailLogoWhite, callLogoWhite, timeLogoWhite } from "../assets/index";
//components
import { Button, ContactElement, Input, SubText } from "../components";

const contactData = [
  { id: 1, img: emailLogoWhite, title: "Email", text: "contact@logistics.com" },
  { id: 2, img: callLogoWhite, title: "Call Us", text: "(00) 112 365 489" },
  {
    id: 3,
    img: timeLogoWhite,
    title: "Mon - Sat 9.00 - 18.00",
    text: "Sunday Closed",
  },
];
function Contact() {
  return (
    <div id="contact" className="bg-[#091242] ">
      <div className="myContainer pt-[80px] pb-[100px] tabletLg:flex tabletLg:flex-col tabletLg:items-center tabletLg:pt-[40px]">
        <Slide direction="left" duration={700}>
          <SubText title="Contact" bgclr="#F3F3F3" className="mb-[43px]" />
        </Slide>
        <div className="flex justify-between tabletLg:flex-col tabletLg:gap-y-8 tabletLg:items-center">
          <div className="flex flex-col tabletLg:items-center tabletLg:justify-center">
            <Slide direction="left" duration={1500}>
              <h1 className="mb-1 text-white w-full max-w-[353px] text-[35px] font-bold font-rubik leading-normal tabletLg:text-center tabletLg:max-w-[400px] mobileMd:w-[350px] mobileMd:text-[28px] mobileMd:leading-snug mobileSm:text-[23px] mobileSm:max-w-[300px]">
                Get in touch with us
              </h1>
            </Slide>
            <Slide direction="left" duration={2000}>
              <p className="w-full max-w-[353px] text-white font-medium font-krub leading-[24px] text-[16px] mb-[32px] tabletLg:text-center tabletLg:w-[400px] mobileMd:text-[13px] mobileMd:w-[350px] mobileMd:leading-normal mobileSm:text-[11px] mobileSm:max-w-[300px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
            </Slide>
            <div className="flex flex-col gap-y-[30px] tabletLg:justify-center">
              {contactData.map((item) => {
                return (
                  <Slide direction="left" duration={2500} key={item.id}>
                    <ContactElement
                      img={item.img}
                      title={item.title}
                      text={item.text}
                    />
                  </Slide>
                );
              })}
            </div>
          </div>
          <Fade duration={3000}>
            <form className="flex flex-col pt-4 gap-y-[3px] desktopLg:mr-12  tabletLg:flex-col tabletLg:items-center desktopSm:mr-0">
              <div className="flex items-center mb-6 gap-4 desktopLg:flex-col ">
                <Input type="text" placeholder="Your name*" required={true} />{" "}
                <br className="desktopLg:hidden" />
                <Input
                  type="tel"
                  placeholder="Phone number*"
                  required={true}
                />{" "}
                <br className="desktopLg:hidden" />
              </div>
              <textarea
                id="input-warning"
                className="outline-none bg-transparent text-[#fff] font-rubik font-regular w-full max-w-[758px] placeholder:pl-3 placeholder:text-[#fff] px-3 border-[2px] border-[#4E5683] mobileLg:w-[350px]:w-[300px] mobileMd:h-[100px] mobileSm:max-w-[250px]"
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <span className="mt-auto tabletLg:flex tabletLg:flex-col tabletLg:items-center">
                <Button title="Submit Message" path={"/"} />
              </span>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contact;
