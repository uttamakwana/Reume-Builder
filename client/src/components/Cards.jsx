import React from "react";

const Cards = (props) => {
  return (
    <>
      <div
        class="flex flex-col bg-transparent items-center p-8 transition-colors duration-300 transform border-[0.8px] border-gray-500 cursor-pointer rounded-xl hover:bg-gray-500 scale-[0.9]"
        data-aos="flip-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img
          class="w-32 h-32 rounded-full ring-4 ring-gray-700 object-cover"
          src={props.imgURL}
          alt=""
        />

        <h1 class="mt-4 text-2xl font-semibold text-gray-300 capitalize  group-hover:text-white">
          {props.fName}
        </h1>

        <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
          design director
        </p>

        <div class="flex mt-3 -mx-2">
          <a
            href="#facebook"
            class="mx-2 text-gray-600 hover:text-gray-500  group-hover:text-white"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            class="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            class="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
          >
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
