import React from "react";
import ResumeLogo from "../assets/images/resume-logo.png";
const Header = () => {
  return (
    <header>
      <nav className="p-2">
        <div className="flex gap-4">
          <img src={ResumeLogo} alt="logo" className="w-14 h-14" />
          <h1 className="text-2xl font-extrabold text-black font-heading m-auto logo_font ">
            Resume Builder
          </h1>
        </div>
      </nav>
    </header>
    //   <div>
    //   <section className="h-20 bg-primary">
    //     <nav className="flex text-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b-[0.5px] border-gray-800">
    //       <div className="px-5 py-4 flex w-full">
    //         <a className="" href = "/">
    //         Resume Builder
    //         </a>
    //         {/* <ul className="hidden md:flex px-6 mt-1 mx-auto font-semibold font-heading space-x-12">
    //           <li><Link className="hover:text-gray-200" to="/">Main Screen</Link></li>
    //           <li><Link className="hover:text-gray-200" to="/documantation">Documantation</Link></li>
    //         </ul> */}

    //         {/* <button type="button" className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-transparent rounded-[10px] border border-gray-200 hover:bg-gray-300 hover:text-gray-900 ">Link Your Account</button> */}

    //         {/* <ConnectMetamaskButton /> */}
    //       </div>
    //     </nav>
    //   </section>
    // </div>
  );
};

export default Header;
