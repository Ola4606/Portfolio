import { memo } from "react";
import Footer from "../general/footer";
import Nav from "../general/nav";
import AboutMe from "../home/aboutMe";
import Contact from "../home/contact";
import Intro from "../home/intro";
import Projects from "../home/projects";
import Skills from "../home/skills";

function Home() {
  return (
    <div>
      <Nav />
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default memo(Home);
