import React from "react";

// Import your sections and components
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
import { CountriesSlider } from "../components";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Advantages />
      <Certificates />
      <CountriesSlider />
      <Team />
      <Gallery />
      <Contact />
      <Location />
    </div>
  );
}

export default Home;
