import { CountriesSlider } from "../components";
import { Hero, About, Advantages, Team, Location, Certificates, Contact } from "../sections";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Advantages />
      <Certificates/>
      <CountriesSlider/>
      <Team />
      <Location />
      <Contact/>
    </div>
  );
}

export default Home;
