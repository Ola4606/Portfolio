import { memo } from "react";
import Footer from "../general/footer";
import Nav from "../general/nav";
import AboutMe from "../home/aboutMe";
import Contact from "../home/contact";
import Intro from "../home/intro";
import PersonalProjects from "./personal-projects";
import Skills from "../home/skills";
import FreelanceProjects from "./freelance-projects";

function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <AboutMe />
      <Skills />
      <FreelanceProjects />
      <PersonalProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default memo(Home);
