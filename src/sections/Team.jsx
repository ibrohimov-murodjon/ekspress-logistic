//react-reveal for animtion
import { Slide, Fade } from "react-awesome-reveal";
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
    name: "Bobur Jamolov",
    role: "Manager",
    tglink: "https://t.me/Bobur2125",
    number: "+998770016060",
    bgDark: true,
  },
  {
    img: TeamPhotoTwo,
    name: "Axmedova Madina",
    role: "Manager",
    tglink: "https://t.me/heismurad",
    number: "+998911234567",
    bgDark: true,
  },
  {
    img: TeamPhotoThree,
    name: "Rebecca Tylor",
    role: "Manager",
    tglink: "https://t.me/heismurad",
    number: "+998911234567",
    bgDark: true,
  },
];

function Team() {
  return (
    <div
      id="team"
      className="flex flex-col items-center pt-[120px] pb-[77px] bg-[#111C55]"
    >
      <Slide direction="down">
        <SubText title="Our Team" bgclr="#F3F3F3" />
        <h1 className="text-4xl text-white font-rubik font-bold">Our Team</h1>
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
