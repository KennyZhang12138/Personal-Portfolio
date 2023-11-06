import React from "react";

function Resume() {
  return (
    <div>
      <div className="container">
        <a
          href="https://drive.google.com/file/d/1NZT21BMPS-hE29M5oVme8yXZH6gr7XML/view?usp=sharing"
          download
          className="btn btn-primary mt-5 custom-btn fw-bold"
        >
          Download My Resume
        </a>
        <hr></hr>
      </div>

      <div className="header">
        <h3>EDUCATION</h3>
      </div>
      <div className="card-body">
        <div className="grid-item-skills">
          <i className="p-about">
            Bachelor of Science in Computer Science, Minor in Mathematics in
            University of Houston (2019-2023)
          </i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">
            Full Stack Coding Boot Camp at UT Austin (2023)
          </i>
        </div>
      </div>
      <div className="modal-footer" />

      <div className="header">
        <h3>Computer Science Fundamentals</h3>
      </div>
      <div className="card-body">
        <div className="grid-item-skills">
          <i className="p-about">Data Structures and Algorithm</i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">Fundamentals of Software Engr</i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">Software Development Practices</i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">Software Design</i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">Programming Languages and Para</i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">Data Science and Statistical</i>
        </div>
      </div>
      <div className="modal-footer" />

      <div className="header">
        <h3>Skills</h3>
      </div>
      <div className="card-body">
        <div className="grid-item-skills">
          <i className="p-about">
            Microsoft Office Suite | NodeJS | Python | SQL | Django | HTML | CSS
            | JavaScript | React | RESTfull API
          </i>
        </div>
        <div className="grid-item-skills">
          <i className="p-about">
            Detail-Oriented | Problem-Solving | Quick Learner | Customer
            Relationship Management | Time Management | Customer Service |
            Leadership | Teamwork | Communication | Project Management | Data
            Analysis
          </i>
        </div>
      </div>
      <div className="modal-footer" />
    </div>
  );
}

export default Resume;
