import { useMemo, memo } from "react";
import pointingImage from "../../images/bitmojies/pointing.png";
import Button from "../general/button";
import ProjectsData from "../../data/projectsData";
import ProjectTile from "./projectTile";

function Projects() {
  const projectsElements = useMemo(() => {
    return ProjectsData.map((i) => {
      return (
        <div key={i.projectID}>
          <ProjectTile
            imgUrl={i.mainImageUrl}
            name={i.name}
            techStack={i.techStackUsed}
            shortDescription={i.shortDescription}
            githubUrl={i.githubUrl}
            liveUrl={i.liveUrl}
            projectID={i.projectID}
          />
        </div>
      );
    });
  }, []);

  return (
    <div
      className="bg-white bg-left-top lg:bg-left bg-no-repeat"
      style={{ backgroundImage: `url(${pointingImage})` }}
    >
      <div className="bg-white/[.30] sm:bg-transparent">
        <div className=" p-5 md:p-7 md:pt-14 flex justify-center">
          <div className=" flex flex-col justify-center items-center">
            <div className="min-h-[200px] xsm:max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[750px]">
              <p className="font-sans text-lg md:text-xl lg:text-2xl font-semibold text-center text-gray-700">
                A few of my projects
              </p>
              <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center text-black">
                Here are some of the cool websites and applications I have
                created so far.
              </p>
            </div>

            
              <div className="mt-4 md:mt-8 grid justify-center items-start grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-9 lg:gap-x-10">
                {projectsElements}
              </div>
            

            <div className="mt-8 md:mt-10 flex justify-center">
              <a
                href="https://github.com/Ola4606"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  btnText={"View My Github Page"}
                  handleClick={() => {}}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Projects);
