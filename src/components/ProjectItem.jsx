import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.url}>Url</a>
      <a href={project.github}>Github</a>
      <img src={project.image}/>
    </div>
  );
}

export default ProjectItem;
