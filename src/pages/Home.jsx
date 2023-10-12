import { CountriesSlider } from "../components";
import {
  Hero,
  About,
  Advantages,
  Team,
  Location,
  Certificates,
  Contact,
  Gallery,
} from "../sections";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Advantages />
      <Certificates />
      <CountriesSlider />
      <Gallery/>
      <Team />
      <Contact />
      <Location />
    </div>
  );
}

export default Home;
