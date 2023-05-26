import React from "react";
import ResumeLogo from '../assets/images/resume-logo.png'
const Header = () => {
  return (
    <header>
      <nav>
        <img
          src={ResumeLogo}
          alt="logo"
          id="nav-logo"
        />
        <h1 id="resume-builder-logo-text">Resume Builder</h1>
      </nav>
    </header>
  );
};

export default Header;
