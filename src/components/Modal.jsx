import { useRef, useEffect } from "react";
//react-router-dom
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//images
import { callLogoWhite, emailLogoWhite, timeLogoWhite } from "../assets";
import CloseBtn from "../assets/close.svg";
import { Button } from "../components";
import { useLanguage } from "../context/LanguageContext";

const Modal = ({ showModal, onClose, text, btnText }) => {
  const modalRef = useRef();
  const { t } = useTranslation();
  const { language } = useLanguage();

  //fileDataBase
  const premiumData = [
    {
      id: 1,
      img: emailLogoWhite,
      title: "email_text",
      text: `${t("email")}`,
      href: "mailto",
    },
    {
      id: 2,
      img: callLogoWhite,
      title: "call_us",
      text: `${t("phone")}`,
      href: "tel",
    },
    {
      id: 3,
      img: timeLogoWhite,
      title: "opening_day",
      text: "closing_day",
    },
  ];

  const handleCloseModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    const closeModalOnEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeModalOnEsc);

    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [onClose]);
  if (!showModal) return null;

  //function
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`${
        showModal ? "block " : "hidden"
      } modal  z-[10000] rounded-md pb-10 `}
      ref={modalRef}
      onClick={handleCloseModal}
    >
      <div onClick={onClose} className="overlay">
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[800px] h-[500px] bg-[#111c55] rounded-md desktopMid:max-w-[700px] desktopMid:h-auto desktopMid:p-4 maxSm:max-w-[500px] mobileLg:max-w-[400px] mobileMd:max-w-[300px]"
          onClick={(e) => handleClick(e)}
        >
          <div onClick={onClose} className="absolute  p-4 right-2 top-1">
            <img
              src={CloseBtn}
              className="w-[24px] h-[24px] cursor-pointer mobileLg:w-[20px] mobileLg:h-[20px]"
            />
          </div>
          <div className="flex items-center justify-center  flex-col pt-14 desktopMid:pt-4 maxSm:pt-6">
            <h1 className="w-full max-w-[620px] text-white font-rubik text-[35px] font-normal leading-normal text-center desktopMid:text-[20px] desktopMid:max-w-[400px] mobileLg:max-w-[300px] mobileLg:text-[16px]">
              {t(text)}
            </h1>
          </div>
          <ul className="flex items-center flex-wrap justify-center gap-x-[131px] mt-[20px] mb-5 desktopMid:mb-3 mobileLg:gap-y-[20px] mobileLg:gap-x-0 mobileMd:gap-y-[10px] mobileMd:mt-2">
            {premiumData.map((element) => {
              return (
                <div
                  key={element.id}
                  className="flex flex-col items-center justify-center gap-y-[11px] w-[158px] mobileLg:gap-y-[7px]"
                >
                  <span className="w-[63px] h-[63px] rounded-full bg-[#273270] flex items-center justify-center desktopMid:w-[50px] desktopMid:h-[50px] mobileLg:h-[40px] mobileLg:w-[40px]">
                    <img
                      className="w-[35px] h-[35px] desktopMid:w-[30px] desktopMid:h-[30px] mobileLg:w-[20px] mobileLg:h-[20px]"
                      src={element.img}
                    />
                  </span>
                  <span>
                    {element.href ? (
                      <a
                        href={`${element.href}:${element.text}`}
                        className={`text-[14px] ${
                          language === "ru"
                            ? "font-rubik font-regular"
                            : "font-krub"
                        } leading-[18.9px] font-medium text-white text-center hover:underline hover:underline-offset-4`}
                      >
                        {t(element.text)}
                      </a>
                    ) : (
                      <p
                        className={`text-[14px] text-center ${
                          language === "ru"
                            ? "font-rubik font-regular"
                            : "font-krub"
                        } leading-[18.9px] font-medium text-white`}
                      >
                        {t(element.title)} <br />
                        {t(element.text)}
                      </p>
                    )}
                  </span>
                </div>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <Link to="/">
              <Button onClose={onClose} title={btnText} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// {
//   premiumData.map((item) => {
//     return (
//       <ContactElement
//         img={item.img}
//         title={item.title}
//         text={item.text}
//         href={item.href}
//         key={item.id}
//       />
//     );
//   });
// }
