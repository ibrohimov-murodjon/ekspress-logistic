import { Slide } from "react-awesome-reveal";
import { Card, SubText } from "../components";
import TeamPhotoOne from "../assets/team_img_1.png";
import TeamPhotoTwo from "../assets/team_img_2.png";
import TeamPhotoThree from "../assets/team_img_3.png";

const data = [
  {
    img: TeamPhotoOne,
    name: "Bobur Jamolov",
    role: "Manager",
    tglink: "https://t.me/heismurad",
    number: "+998911234567",
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
      <Slide direction="down" duration={2000}>
        <SubText title="Our Team" bgclr="#F3F3F3" />
        <h1 className="text-4xl text-white font-rubik font-bold">Our Team</h1>
      </Slide>
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
    </div>
  );
}

export default Team;
