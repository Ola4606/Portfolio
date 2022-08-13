import { useMemo } from "react";
import { useParams } from "react-router-dom";
import allProjectsData from "../../data/projectsData";
import Footer from "../general/footer";
import Nav from "../general/nav";
import TechIcon from "../general/techIcon";
import TechStackData from "../../data/techStack";

function ProjectDisplay() {
  let { name } = useParams();

  function getProjectData(name: string) {
    return allProjectsData.filter((i) => {
      return i.projectID === name;
    });
  }

  const projectData = useMemo(() => {
    return getProjectData(name!)[0];
  }, [name]);

  const projectTechStackElements = useMemo(() => {
    const techStackUsed = TechStackData.filter((i) =>
      projectData.techStackUsed.includes(i.name)
    );

    return techStackUsed.map((i, index) => {
      return (
        <div key={index}>
          <TechIcon techLogo={i.logoUrl} techName={i.name} />
        </div>
      );
    });
  }, [name]);

  const techStackExplanationElements = useMemo(() => {
    return projectData.techStackAndExplanation.map((i, index) => {
      return (
        <li key={index}>
          <b>{i.techName}: </b>

          {i.techUsage}
        </li>
      );
    });
  }, [name]);

  const projectImagesElements = useMemo(() => {
    return projectData.allImagesUrl.map((i, index) => {
      return (
        <div
          key={index}
          className=" overflow-hidden border-2 border-gray-600 p-1 rounded-md min-w-[240px] md:min-w-[256px] lg:min-w-[288px]"
        >
          <img
            src={i}
            alt=""
            className=" rounded-md min-w-full max-w-full h-auto"
          />
        </div>
      );
    });
  }, [name]);

  return (
    <div>
      <Nav />
      <div className=" p-5 md:p-7 md:pt-14">
        <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-left text-black">
          {projectData.name}
        </p>
        <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-left text-gray-700 mt-2 md:mt-3">
          {projectData.projectType}
        </p>

        <div className=" mt-5 md:mt-8">
          <p className="font-sans text-base md:text-lg lg:text-xl font-black text-left text-bold">
            Made with:
          </p>
          <div className="mt-2 md:mt-3 flex flex-wrap gap-4 md:gap-5">
            {projectTechStackElements}
          </div>
        </div>

        {projectData.liveUrl && (
          <div className=" mt-5 md:mt-8">
            <p className="font-sans text-base md:text-lg lg:text-xl font-black text-left text-bold">
              Live URL:
            </p>
            <a
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
            >
              {projectData.liveUrl.substring(8)}
            </a>
          </div>
        )}

        {projectData.githubUrl && (
          <div className=" mt-5 md:mt-8">
            <p className="font-sans text-base md:text-lg lg:text-xl font-black text-left text-bold ">
              Github URL:
            </p>
            <a
              href={projectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-sans text-base md:text-lg lg:text-xl font-light text-left text-gray-700 mt-2 md:mt-3 underline underline-offset-2 decoration-gray-400"
            >
              {projectData.githubUrl.substring(8)}
            </a>
          </div>
        )}

        <div className=" mt-5 md:mt-8">
          <p className="font-sans text-base md:text-lg lg:text-xl font-black text-left text-bold">
            Some Images:
          </p>
          <div className=" flex justify-center items-start flex-wrap gap-5 mt-10 md:mt-14">
            {projectImagesElements}
          </div>
        </div>

        <div className=" mt-10 md:mt-14">
          <p className="font-sans text-base md:text-lg lg:text-xl font-black text-left text-bold">
            Description:
          </p>
          <div className="mt-2 md:mt-3">{projectData.fullDescription}</div>
        </div>

        <div className=" mt-5 md:mt-8">
          <p className="font-sans text-base md:text-lg lg:text-xl font-black text-left text-bold">
            Tech Stack and Explanation:
          </p>
          <div className="mt-2 md:mt-3">
            <ul className="list-disc list-inside font-sans text-base md:text-lg lg:text-xl font-normal text-left text-black">
              {techStackExplanationElements}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDisplay;
