//components
import { Input, Button } from "../components";

import { useTranslation } from "react-i18next";


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
  return (
    <div className="myContainer flex items-center flex-col pt-[74px] pb-[100px]">
      <h1 className="max-w-[532px] w-full text-center text-white text-[35px] font-rubik  font-semibold leading-normal mb-5 maxSm:text-[25px]">
        {t("get_premium")}:
      </h1>
      <ul>
        {clientsGet.map((item) => (
          <li className="flex items-center  gap-x-[6px]" key={item.id}>
            <span className="w-[6px] h-[6px] bg-[#FFB629] rounded-full"></span>
            <p className="font-medium leading-[24px] font-krub text-white">
              {t(item.text)}
            </p>
          </li>
        ))}
      </ul>
      <form className="flex items-center justify-center flex-col mt-6">
        <div className="flex flex-wrap gap-6 justify-center items-center gap-x-[28px] tabletLg:flex-col tabletLg:gap-0">
          <Input
            type="text"
            placeholder={t("your_name")}
            premium
            required={true}
          />{" "}
          <br />
          <Input type="text" placeholder={t("surname")} premium /> <br />
          <Input
            type="tel"
            placeholder={t("phone_number")}
            premium
            required={true}
          />{" "}
          <br />
          <Input
            type="email"
            placeholder={t("email_text")}
            premium
            required={true}
          />{" "}
          <br />
          <Input type="text" placeholder={t("company_name")} premium /> <br />
          <Input
            type="text"
            placeholder={t("city")}
            premium
            required={true}
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
          ></textarea>
        </div>
        <Button title="submit_message" />
      </form>
    </div>
  );
};

export default PremiumContact;
