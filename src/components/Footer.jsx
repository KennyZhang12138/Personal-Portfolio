import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center mb-3 p-3 border-bottom">
        <div className="m-1">
          <SocialIcon network="twitter" href="https://twitter.com/DunjiangH" />
        </div>
        <div className="m-1">
          <SocialIcon
            network="linkedin"
            href="https://www.linkedin.com/in/dunjiang-zhang-6a7bba240/"
          />
        </div>
        <div className="m-1">
          <SocialIcon network="facebook" href="https://www.facebook.com/" />
        </div>
        <div className="m-1">
          <SocialIcon
            network="github"
            href="https://github.com/KennyZhang12138"
          />
        </div>
        <div className="m-1">
          <SocialIcon
            network="google"
            href="https://github.com/KennyZhang12138"
          />
        </div>
      </section>

      <div className="col-md-1 col-lg-6 col-xl-4 mx-auto mb-md-1 mb-4">
        <i className="fas fa-home me-3 text-secondary">
          Katy TX, 77494 US | kenny.zhang12138@gmail.com | +1 3463072632{" "}
        </i>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2023 Copyright : {" "}
        <a
          className="text-reset fw-bold"
          href="https://github.com/KennyZhang12138/Personal-Portfolio"
        >
          Kenny Zhang
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
