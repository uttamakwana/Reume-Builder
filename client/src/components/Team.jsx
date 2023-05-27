import React from "react";
import Cards from "./Cards";
import Shlok from "../assets/images/shlok.png";
import Uttam from "../assets/images/uttam.jpg";
import Aaditya from "../assets/images/resume-logo.png";
import Gunjan from "../assets/images/gunjan.jpg";

const Team = () => {
  return (
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto" data-aos="zoom-out"
          data-aos-duration="500"
        //   data-aos-delay ="400"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Our Executive Team
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <Cards fName="Shlok Jadeja" brach="IT" imgURL={Shlok} />
          <Cards fName="Uttam Makwana" brach="IT" imgURL={Uttam} />
          <Cards fName="Aaditya Chaturvedi" brach="IT" imgURL={Aaditya} />
          <Cards fName="Gujan Tank" brach="IT" imgURL={Gunjan} />
        </div>
      </div>
    </section>
  );
};

export default Team;
