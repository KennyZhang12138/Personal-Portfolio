import React from "react";
import myImage from "../assets/kenny.jpg";
import { MDBCardImage } from "mdb-react-ui-kit";

function About() {
  return (
    <div>
      <div className="container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100 rounded-circle">
        <h1>Who am I ?</h1>
        <MDBCardImage
          style={{ width: "300px" }}
          className="img-fluid rounded-circle border border-dark border-3"
          src={myImage}
          alt="Generic placeholder image"
          fluid
        />
        <p className="text-center lead m-4">
          Hello, I'm Dunjiang Zhang, a passionate computer science enthusiast
          with a strong foundation in programming and a knack for
          problem-solving.
        </p>
        <p className="text-center lead m-4">
          I am fluent in both Chinese and English, which has proven to be a
          valuable asset in today's globalized world.I consider myself
          detail-oriented, a quick learner, and a problem solver. I excel in
          customer relationship management, time management, and teamwork.
          Leadership and communication are qualities I value, and they've been
          integral to my success in both academic and professional settings. I'm
          excited to continue exploring the world of computer science and
          technology, taking on new challenges and creating innovative
          solutions. Whether it's coding, managing projects, or interacting with
          clients, I'm always eager to learn and grow. Thank you for visiting my
          portfolio. If you have any questions or would like to collaborate on a
          project, please don't hesitate to reach out.
        </p>
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
    </div>
  );
}

export default About;
