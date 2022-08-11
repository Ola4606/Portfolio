import { useMemo } from "react";
import { useParams } from "react-router-dom";
import allProjectsData from "../../data/projectsData";

function ProjectDisplay() {
  let { name } = useParams();

  function getProjectData(name: string) {
    return allProjectsData.filter((i) => {
      return i.projectID === name;
    });
  }

  const projectData = useMemo(() => {
    return getProjectData(name!);
  }, [name]);

  return <div>{projectData[0].fullDescription}</div>;
}

export default ProjectDisplay;
