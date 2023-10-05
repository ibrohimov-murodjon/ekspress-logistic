import { Slide, Zoom } from "react-awesome-reveal";
import { SubText, Card } from "../components";
import Director from "../assets/director-photo.png";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center pt-[120px] pb-[77px] bg-[#111C55]"
    >
      <Slide direction="down" duration={2000}>
        <SubText title="About Us" bgclr="#F3F3F3" />
        <h1 className="text-4xl text-white font-rubik font-bold">About Us</h1>
      </Slide>
      <div className="w-[70%] h-[2px] bg-[#D6D6D6] mt-[43px]"></div>
      <div className="flex items-center justify-center mt-[43px] myContainer desktopSm:flex-col">
        <Slide direction="left" duration={2500}>
          <Card
            img={Director}
            name="Rasul Saloyev"
            role="Director"
            tglink="https://t.me/heismurad"
            number="+998911234567"
          />
        </Slide>
        <div className="w-[1px] h-[414px] bg-[#D6D6D6] ml-[30px] desktopSm:hidden"></div>
        <Zoom top cascade>
          <p className="max-w-[631px] pl-[13px] text-white font-krub text-xl font-medium leading-8 desktop:text-base desktop:max-w-[531px] desktopSm:text-center desktopSm:max-w-[100%] desktopSm:pt-8 desktopSm:text-[18px]">
            Trans Ekpress Logistic is an international logistics company
            headquartered in Namangan, Uzbekistan. Despite the fact that the
            company started its activity only 5 years ago, it managed to have
            its loyal customers in more than 20 countries. We are currently
            providing fast and quality service to all European and Asian
            countries in any situation. But this is not our limit. Your location
            is not important to our company. We can deliver your goods to any
            place you want at any time. Your trust is our strongest weapon. To
            achieve this, we ensure that our best drivers and experts are always
            in touch and offer you the best and the most affordable prices.
          </p>
        </Zoom>
      </div>
    </div>
  );
}

export default About;
