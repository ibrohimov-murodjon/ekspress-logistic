import { SubText } from "../components";
import { Director } from "../assets";
import { Card } from "../components";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center pt-[41px] pb-[77px] bg-gradient-to-l  from-[#532EBA] to-[#2E93C2]"
    >
      <SubText title="About Us" bgclr="#787D95" />
      <h1 className="text-4xl text-white font-rubik font-bold">About Us</h1>
      <div className="w-[70%] h-[2px] bg-[#D6D6D6] mt-[43px]"></div>
      <div className="flex items-center mt-[43px] myContainer desktopSm:flex-col">
        <Card
          img={Director}
          name="Rasul Saloyev"
          role="Director"
          tglink="https://t.me/heismurad"
          number="+998911234567"
        />
        <div className="w-[1px] h-[414px] bg-[#D6D6D6] ml-[30px] desktopSm:hidden"></div>
        <p className="max-w-[631px] pl-[13px] text-white font-krub text-xl font-medium leading-8 desktop:text-base desktop:max-w-[531px] desktopSm:text-center desktopSm:max-w-[100%] desktopSm:pt-8 desktopSm:text-[18px]">
          Trans Ekpress Logistic is an international logistics company
          headquartered in Namangan, Uzbekistan. Despite the fact that the
          company started its activity only 5 years ago, it managed to have its
          loyal customers in more than 20 countries. We are currently providing
          fast and quality service to all European and Asian countries in any
          situation. But this is not our limit. Your location is not important
          to our company. We can deliver your goods to any place you want at any
          time. Your trust is our strongest weapon. To achieve this, we ensure
          that our best drivers and experts are always in touch and offer you
          the best and the most affordable prices.
        </p>
      </div>
    </div>
  );
}

export default About;
