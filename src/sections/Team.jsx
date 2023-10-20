//react-reveal for animtion
import { Slide, Fade } from "react-awesome-reveal";
import {useTranslation} from 'react-i18next'
//components
import { Card, SubText } from "../components";
//images
import TeamPhotoOne from "../assets/team_img_1.png";
import TeamPhotoTwo from "../assets/team_img_2.png";
import TeamPhotoThree from "../assets/team_img_3.png";

//file dataBase
const data = [
  {
    img: TeamPhotoOne,
    name: "team_person_one_name",
    role: "team_person_one_role",
    tglink: "https://t.me/Bobur2125",
    number: "+998770016060",
    bgDark: true,
  },
  {
    img: TeamPhotoTwo,
    name: "team_person_two_name",
    role: "team_person_two_role",
    tglink: "https://t.me/heismurad",
    number: "+998911234567",
    bgDark: true,
  },
  {
    img: TeamPhotoThree,
    name: "team_person_third_name",
    role: "team_person_third_role",
    tglink: "https://t.me/heismurad",
    number: "+998911234567",
    bgDark: true,
  },
];

function Team() {
  const {t} = useTranslation()
  return (
    <div
      id="team"
      className="flex flex-col items-center pt-[120px] pb-[77px] bg-[#111C55]"
    >
      <Slide direction="down">
        <SubText title="our_team" bgclr="#F3F3F3" />
        <h1 className="text-4xl text-white font-rubik font-bold">
          {t("our_team")}
        </h1>
      </Slide>
      <Fade duration={3500}>
        <div className="myContainer flex items-center flex-wrap justify-center gap-5 mt-7">
          {data.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              name={card.name}
              role={card.role}
              tglink={card.tglink}
              number={card.number}
              bgDark={card.bgDark}
              borderNone
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}

export default Team;
