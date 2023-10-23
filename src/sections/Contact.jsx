import { useState, useRef, useEffect } from "react";
//react-reveal for animation
import { Slide, Fade } from "react-awesome-reveal";
//images
import { emailLogoWhite, callLogoWhite, timeLogoWhite } from "../assets/index";
//components
import {
  Button,
  ContactElement,
  Input,
  SubText,
  Loading,
  Modal,
} from "../components";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

const contactData = [
  {
    id: 1,
    img: emailLogoWhite,
    title: "email_text",
    text: "email",
    href: "mailto",
  },
  {
    id: 2,
    img: callLogoWhite,
    title: "call_us",
    text: "phone",
    href: "tel",
  },
  {
    id: 3,
    img: timeLogoWhite,
    title: "opening_day",
    text: "closing_day",
    href: "",
  },
];

function Contact() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const formRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_lsmsnzq",
        "template_az1fgs4",
        formRef.current,
        "HtJlRzJfGh6v7qbry"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setShowModal(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    formRef.current =
      formRef.current || document.getElementById("contactFormId");
  }, []);
  return (
    <div id="contact" className="bg-[#111c55] ">
      <div className="myContainer pt-[80px] pb-[100px] tabletLg:flex tabletLg:flex-col tabletLg:items-center tabletLg:pt-[40px]">
        <Slide direction="left" duration={700}>
          <SubText title="contact" bgclr="#F3F3F3" className="mb-[43px]" />
        </Slide>
        <div className="flex justify-between tabletLg:flex-col tabletLg:gap-y-8 tabletLg:items-center">
          <div className="flex flex-col tabletLg:items-center tabletLg:justify-center">
            <Slide direction="left" duration={1500}>
              <h1 className="mb-1 text-white w-full max-w-[353px] text-[35px] font-bold font-rubik leading-normal tabletLg:text-center tabletLg:max-w-[400px] mobileMd:w-[350px] mobileMd:text-[28px] mobileMd:leading-snug mobileSm:text-[23px] mobileSm:max-w-[300px]">
                {t("get_in_touch")}
              </h1>
            </Slide>
            <Slide direction="left" duration={2000}>
              <p
                className={`w-full max-w-[353px] text-white font-medium ${
                  language === "ru" ? "font-rubik font-regular" : "font-krub"
                } leading-[24px] text-[16px] mb-[32px] tabletLg:text-center tabletLg:w-[400px] mobileMd:text-[13px] mobileMd:w-[350px] mobileMd:leading-normal mobileSm:text-[11px] mobileSm:max-w-[300px]`}
              >
                {t("contact_desc")}
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
                      href={item.href}
                    />
                  </Slide>
                );
              })}
            </div>
          </div>
          <Fade duration={3000}>
            <form
              className="flex flex-col pt-4 gap-y-[3px] desktopLg:mr-12  tabletLg:flex-col tabletLg:items-center desktopSm:mr-0"
              ref={formRef}
              onSubmit={sendEmail}
              id="contactFormId"
            >
              <div className="flex items-center mb-6 gap-4 desktopLg:flex-col ">
                <Input
                  type="text"
                  placeholder={t("your_name")}
                  required={true}
                  premium
                  name="user_name"
                />{" "}
                <br className="desktopLg:hidden" />
                <Input
                  type="tel"
                  placeholder={t("phone_number")}
                  required={true}
                  name="user_number"
                />{" "}
                <br className="desktopLg:hidden" />
              </div>
              <textarea
                id="input-warning"
                className="outline-none bg-transparent text-[#fff] font-rubik font-regular w-full max-w-[758px] placeholder:pl-3 placeholder:text-[#fff] px-3 border-[2px] border-[#4E5683] mobileLg:w-[350px]:w-[300px] mobileMd:h-[100px] mobileSm:max-w-[250px]"
                cols="30"
                rows="5"
                name="message"
                placeholder={t("your_message")}
              ></textarea>
              <span className="mt-auto tabletLg:flex tabletLg:flex-col tabletLg:items-center">
                <Button type="submit" title="submit_message" path={"/"} />
              </span>
            </form>
          </Fade>
        </div>
      </div>{" "}
      {isLoading && <Loading />}
      <Modal showModal={showModal} onClose={closeModal} text="contact_form" />
    </div>
  );
}

export default Contact;
