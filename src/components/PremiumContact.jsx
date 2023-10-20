import { useState, useRef, useEffect } from "react";
//components
import { Input, Button, Modal } from "../components";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

//file-dataBase
const clientsGet = [
  {
    id: 1,
    text: "latest_bonuses",
  },
  {
    id: 2,
    text: "extra_advices",
  },
  {
    id: 3,
    text: "individual_attention",
  },
  {
    id: 4,
    text: "cheapest_prices",
  },
];


const PremiumContact = () => {
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
        "service_bz7sfl5",
        "template_eww9utn",
        formRef.current,
        "XzkuS0Go_OO3rQsRn"
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
      formRef.current || document.getElementById("premiumFormId");
  }, []);
  return (
    <div className="myContainer flex items-center flex-col pt-[74px] pb-[100px]">
      <h1 className="max-w-[532px] w-full text-center text-white text-[35px] font-rubik  font-semibold leading-normal mb-5 maxSm:text-[25px]">
        {t("get_premium")}:
      </h1>
      <ul>
        {clientsGet.map((item) => (
          <li className="flex items-center  gap-x-[6px]" key={item.id}>
            <span className="w-[6px] h-[6px] bg-[#FFB629] rounded-full"></span>
            <p
              className={`font-medium leading-[24px] ${
                language === "ru" ? "font-rubik font-regular" : "font-krub"
              } text-white`}
            >
              {t(item.text)}
            </p>
          </li>
        ))}
      </ul>
      <form
        className="flex items-center justify-center flex-col mt-6"
        ref={formRef}
        onSubmit={sendEmail}
        id="premiumFormId"
      >
        <div className="flex flex-wrap gap-6 justify-center items-center gap-x-[28px] tabletLg:flex-col tabletLg:gap-0">
          <Input
            type="text"
            placeholder={t("your_name")}
            premium
            required={true}
            name="user_name"
          />{" "}
          <br />
          <Input
            type="text"
            placeholder={t("surname")}
            premium
            name="user_surname"
          />{" "}
          <br />
          <Input
            type="tel"
            placeholder={t("phone_number")}
            premium
            required={true}
            name="user_number"
          />{" "}
          <br />
          <Input
            type="email"
            placeholder={t("email_text")}
            premium
            required={true}
            name="user_email"
          />{" "}
          <br />
          <Input
            type="text"
            placeholder={t("company_name")}
            premium
            name="user_company"
          />{" "}
          <br />
          <Input
            type="text"
            placeholder={t("city")}
            premium
            required={true}
            name="user_city"
          />{" "}
          <br />
        </div>
        <div className="w-full max-w-[778px]">
          <textarea
            id="input-warning"
            className="outline-none mt-8 bg-transparent text-[#fff] font-rubik font-regular w-full placeholder:pl-3 placeholder:text-[#fff] px-3 border-[2px] border-[#4E5683] tabletLg:mt-2 mobileLg:w-[350px] mobileMd:h-[100px] mobileSm:max-w-[250px] mobileMd:max-w-[300px]"
            cols="30"
            rows="5"
            placeholder={t("your_message")}
            name="message"
          ></textarea>
        </div>
        <Button type="submit" title="submit_message" />
      </form>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primaryClr"></div>
        </div>
      )}
      <Modal showModal={showModal} onClose={closeModal} text="premium_form" />
    </div>
  );
};

export default PremiumContact;
