import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Awards,
  DesignProject,
} from "../components";

const AboutPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Hero />
        <StarsCanvas />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Awards />
      <DesignProject />
    </div>
  );
};

export default AboutPage;
