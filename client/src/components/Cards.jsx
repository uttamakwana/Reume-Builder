import React from "react";

const Cards = (props) => {
  return (
    <>
      <div
        className="flex flex-col bg-transparent items-center p-8 transition-colors duration-300 transform border-[0.8px] border-gray-500 cursor-pointer rounded-xl hover:bg-gray-500 scale-[0.9]"
        data-aos="flip-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img
          className="w-32 h-32 rounded-full ring-4 ring-gray-700 object-cover p-2"
          src={props.imgURL}
          alt=""
        />

        <h1 className="mt-4 text-2xl font-semibold text-gray-300 capitalize  group-hover:text-white">
          {props.fName}
        </h1>

        <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
          design director
        </p>

        <div className="flex mt-3 -mx-2">
          <a
            href="#facebook"
            className="mx-2 text-gray-600 hover:text-gray-500  group-hover:text-white"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
