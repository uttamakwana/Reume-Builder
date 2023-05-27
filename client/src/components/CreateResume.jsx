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
      <div>
        {/* <main class="main-content">
        <h1>The Best Free Online Resume Builder</h1>
        <p>
        Unleash the power of your resume with ResumeBuilder. Our cutting-edge platform empowers you to create an amazing, attention-grabbing resume that sets you apart from the competition. With our user-friendly interface and expert guidance, you can showcase your unique skills and experience with confidence. Start your journey towards career success today with ResumeBuilder. Your dream job awaits.
        </p>
        <
      </main> */}
        <div
          class="container px-6 py-16 mx-auto text-center"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class=" lg:w-max mx-auto">
            <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
              The Best Free Online Resume Builder.
            </h1>
            <p class="mt-6 max-w-2xl text-gray-500">
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
            className="px-8 py-3 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 mb-28"
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
