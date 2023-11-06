import React from "react";
import ProjectData from "../assets/project.json"
import ProjectItem from "../components/ProjectItem";

function Project() {
  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <h1 className="row justify-content-center">
        Check out what I have done:{" "}
      </h1>
      {ProjectData.map((project) => (
        <div className="col-12 d-flex justify-content-center" key={project.id}>
          <ProjectItem key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
}

export default Project;
