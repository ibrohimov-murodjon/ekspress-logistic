//components
import { CountriesSlider } from "../components";
//sections
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
      <Team />
      <Gallery/>
      <Contact />
      <Location />
    </div>
  );
}

export default Home;
