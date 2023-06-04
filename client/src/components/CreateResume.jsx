import React from "react";
import ScrollToTop from "./ScrollToTop";
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";

const CreateResume = ({ setIsClick }) => {
  AOS.init();
  return (
    <>
      <ScrollToTop />

      <div >
        {/* <main className="main-content">
        <h1>The Best Free Online Resume Builder</h1>
        <p>
        Unleash the power of your resume with ResumeBuilder. Our cutting-edge platform empowers you to create an amazing, attention-grabbing resume that sets you apart from the competition. With our user-friendly interface and expert guidance, you can showcase your unique skills and experience with confidence. Start your journey towards career success today with ResumeBuilder. Your dream job awaits.
        </p>
        <
      </main> */}
        <div
          className="container px-6 py-16 mx-auto text-white"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className=" lg:w-max mx-auto">
            <h1 className="text-xl font-semibold text-white text-center lg:text-3xl">
              The Best Free Online Resume Builder.
            </h1>
            <p className="text-xs mt-6 max-w-2xl text-white text-center text-sm lg:text-xl">
              Unleash the power of your resume with ResumeBuilder. Create an
              attention-grabbing resume that sets you apart and leads to career
              success. Start your journey today and land your dream job.
            </p>
          </div>
        </div>
        <div className="w-max m-auto">
          <button
            onClick={() => {
              setIsClick(true);
            }}
            className=" text-white font-semibold  py-2 px-4 border-[0.2px] border-gray-500 rounded my-2 mb-16"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            CREATE YOUR RESUME
          </button>
        </div>
        <hr />
        <Team />
      </div>
    </>
  );
};

export default CreateResume;
