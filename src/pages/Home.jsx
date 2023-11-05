import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-light p-5 min-vh-100">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start">
            <h1 className="">Hi, I am Kenny </h1>
            <h1 className="fw-bold custom-font">A Full stack Developer</h1>
            <p className="pt-5">Learn more about me: </p>
            <Link to="/about">
              <button className="btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
