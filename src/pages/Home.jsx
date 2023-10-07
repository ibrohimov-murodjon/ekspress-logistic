import { CountriesSlider } from "../components";
import {
  Hero,
  About,
  Advantages,
  Team,
  Location,
  Certificates,
  Contact,
} from "../sections";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Advantages />
      <Certificates />
      <CountriesSlider />
      <Team />
      <Contact />
      <Location />
    </div>
  );
}

export default Home;
