import { Fragment } from "react";

import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import Skills from "../component/Skills/Skills";
import Project from "../component/Projects/Project";
import Contact from "../component/ContactUs/Contact";
import RootLayout from "../layouts/RootLayout/";

const HomePage = () => {
  // Render the components for the home page
  return (
    <RootLayout> 
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </RootLayout>
  );
};

export default HomePage;
