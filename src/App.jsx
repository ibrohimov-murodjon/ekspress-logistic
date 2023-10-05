import { Hero, About, Advantages, Team, Location } from "./sections";
import { Header, Navbar } from "./components";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <Team />
      <Location />
    </>
  );
}
