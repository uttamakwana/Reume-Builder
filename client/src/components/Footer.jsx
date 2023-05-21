import React from "react";

const Footer = () => {
  return (
    <footer>
      <main className="about">
        <div className="about-heading">
          <h1>Development Team</h1>
        </div>
        <div className="about-description">
          <div className="content">
            <img
              src="images/resume-logo.png"
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Uttam Makwana</p>
          </div>
          <div className="content">
            <img
              src="images/resume-logo.png"
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Uttam Makwana</p>
          </div>
          <div className="content">
            <img
              src="images/resume-logo.png"
              alt="logo"
              style={{ width: "100px", height: "100px" }}
            />
            <p>Uttam Makwana</p>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
