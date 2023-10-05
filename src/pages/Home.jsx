import { Hero, About, Advantages, Team, Location } from "../sections";
import { Navbar, Header } from "../components";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <Team />
      <Location />
    </div>
  );
}

export default Home;
