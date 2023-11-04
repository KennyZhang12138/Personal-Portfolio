import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hi, this is Dunjiang Zhang</h1>
      <h2>A Software Engineer Developer</h2>
      <h2>Full Stack Developer</h2>
      <Link to="About">
        <button>About Me</button>
      </Link>
    </div>
  );
}

export default Home;
