import React from "react";
import Cards from "./Cards";
import Shlok from "../assets/images/shlok.jpg";
import Uttam from "../assets/images/uttam.jpg";
import Aaditya from "../assets/images/resume-logo.png";
import Gunjan from "../assets/images/gunjan.jpg";

const Footer = () => {
  return (
    <footer>
      <main className="about">
        <div className="about-heading">
          <h1>Our Team</h1>
        </div>
        {/* <div className="about-description">
          <div className="content">
            <div className="shining-effect"></div>

            <img src="images/shlok.jpg" alt="logo" />
            <div className="content-desc">
              <p>Shlok Jadeja</p>
              <p>
                <strong>Branch : CE</strong>
              </p>

              <p className="team-links">
                <a
                  href="https://www.linkedin.com/in/shlok-jadeja-8b9793209/"
                  target="__blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/shlok-177" target="__blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="content">
            <img src="images/uttam.jpg" alt="logo" />
            <div className="content-desc">
              <p>Uttam Makwana</p>
              <p>
                <strong>Branch : IT</strong>
              </p>
              <p className="team-links">
                <a href="https://linkedin.com/in/uttamakwana" target="__blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/uttamakwana" target="__blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
          </div>

          <div className="content">
            <div className="shining-effect"></div>

            <img src="images/resume-logo.png" alt="logo" />
            <div className="content-desc">
              <p>Aaditya Chaturvedi</p>
              <p>
                <strong>Branch : IT</strong>
              </p>
              <p className="team-links">
                <a
                  href="https://www.linkedin.com/in/aaditya-chaturvedi-311248222"
                  target="__blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/MahiRavanKRG" target="__blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="content">
            <div className="shining-effect"></div>
            <img src="images/gunjan.jpg" alt="logo" />
            <div className="content-desc">
              <p>Gunjan Tank</p>
              <p>
                <strong>Branch : CE</strong>
              </p>

              <p className="team-links">
                <a href="https://www.linkedin.com/in/gunjan-t-9697a51b3/" target="__blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Gunjantank" target="__blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center gap-10 my-16">
          <Cards fName="Shlok Jadeja" brach="IT" imgURL={Shlok} />
          <Cards fName="Uttam Makwana" brach="IT" imgURL={Uttam} />
          <Cards fName="Aaditya Chaturvedi" brach="IT" imgURL={Aaditya} />
          <Cards fName="Gujan Tank" brach="IT" imgURL={Gunjan} />
        </div>
      </main>
    </footer>
  );
};

export default Footer;
