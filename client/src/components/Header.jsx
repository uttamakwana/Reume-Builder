import React from "react";
import ResumeLogo from "../assets/images/resume-logo.png";
const Header = () => {
  return (
    <header className="w-full text-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-[0.5px] border-gray-700">
      <nav className="p-2 flex ">
        <div className="flex gap-4">
          <img src={ResumeLogo} alt="logo" className="w-14 h-14" />
          <h1 className="text-2xl font-extrabold text-white font-heading m-auto logo_font ">
            Resume Builder
          </h1>
        </div>
      </nav>
    </header>

  );
};

export default Header;
