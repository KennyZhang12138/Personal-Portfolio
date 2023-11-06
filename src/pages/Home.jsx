import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <section className="bg-light p-5 min-vh-100">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
            <h1 className="">Hi, I am Kenny Zhang</h1>
            <h1 className="fw-bold custom-font">A Full stack Developer</h1>
            <p className="pt-5">Learn more about me : </p>
            <Link to="/about">
              <button className="btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2">
                About Me
              </button>
            </Link>
          </div>
          <div>
            <Player
              src="https://lottie.host/1a5ba4dc-8d1b-44a5-9a5d-09d728da5ee4/L3bwHHMNh3.json"
              className="player"
              loop
              autoplay
              style={{ maxHeight: "700px", maxWidth: "700px" }}
            />
          </div>
        </div>
        <h3 className="pt-5 pb-2 custom-color">Languages and tools I use:</h3>

        <p className="lead">
          <img
            className="me-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
            alt="node"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://cdn.cdnlogo.com/logos/g/31/github.svg"
            alt="github"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            alt="mongodb"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
            alt="mysql"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
            alt="python"
            width="40"
            height="40"
          />
          <img
            className="m-2"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="git"
            width="35"
            height="35"
          />
          <img
            className="m-2"
            src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
            alt="django"
            width="35"
            height="35"
          />
        </p>
      </div>
    </section>
  );
}

export default Home;
