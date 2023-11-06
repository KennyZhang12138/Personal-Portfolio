/* eslint-disable react/prop-types */
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

function ProjectItem({ project }) {
  return (
    <div className="">
      <div className="card mb-5" style={{ maxWidth: "900px" }}>
        <div className="g-0 d-flex flex-column flex-lg-row align-items-center ">
          <div className="">
            <img
              src={project.image}
              className="img-fluid rounded-start project-img"
              alt={project.title}
            />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="mt-5 align-text-bottom">
                <p className="card-text">{project.stack}</p>
                <p className="card-text d-flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live Site{" "}
                    <BiLinkExternal style={{ color: "hsl(205, 72%, 37%)" }} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Source Code{" "}
                    <AiOutlineGithub style={{ color: "hsl(205, 72%, 37%)" }} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
