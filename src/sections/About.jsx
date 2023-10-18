import { Slide, Zoom } from "react-awesome-reveal";
import { SubText, Card } from "../components";
import Director from "../assets/director-photo.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="flex flex-col items-center pt-[120px] pb-[77px] bg-[#111C55]"
    >
      <Slide direction="down" duration={2000}>
        <SubText title="about" bgclr="#F3F3F3" />
        <h1 className="text-4xl text-white font-rubik font-bold maxSm:text-3xl">
          {t("about")}
        </h1>
      </Slide>
      <div className="w-[70%] h-[2px] bg-[#D6D6D6] mt-[43px]"></div>
      <div className="flex items-center justify-center mt-[43px] myContainer desktopSm:flex-col">
        <Slide direction="left" duration={2500}>
          <Card
            img={Director}
            name="director_name"
            role="director"
            tglink="https://t.me/RSalayev"
            number="+998902180095"
          />
        </Slide>
        <div className="w-[1px] h-[414px] bg-[#D6D6D6] ml-[30px] desktopSm:hidden"></div>
        <Zoom top cascade>
          <p className="max-w-[631px] pl-[13px] text-white font-krub text-xl font-medium leading-8 desktop:text-base desktop:max-w-[531px] desktopSm:text-center desktopSm:max-w-[100%] desktopSm:pt-8 desktopSm:text-[18px] maxSm:text-[15px]">
            {t("about_us")}
          </p>
        </Zoom>
      </div>
    </div>
  );
}

export default About;
