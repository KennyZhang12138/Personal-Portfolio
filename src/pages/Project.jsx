import React from "react";
import ProjectData from "../assets/project.json"
import ProjectItem from "../components/ProjectItem";

function Project() {
  return (
    <div>
      <h1>Check out what I have done: </h1>
      {ProjectData.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Project;
