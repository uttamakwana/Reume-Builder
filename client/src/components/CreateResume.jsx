import React from "react";

const CreateResume = ({setIsClick}) => {
  return (
    <article>
      <main class="main-content">
        <h1>The Best Free Online Resume Builder</h1>
        <p>
        Unleash the power of your resume with ResumeBuilder. Our cutting-edge platform empowers you to create an amazing, attention-grabbing resume that sets you apart from the competition. With our user-friendly interface and expert guidance, you can showcase your unique skills and experience with confidence. Start your journey towards career success today with ResumeBuilder. Your dream job awaits.
        </p>
        <button onClick={() => {setIsClick(true)}} className="shining-button">CREATE YOUR RESUME</button>
      </main>
    </article>
  );
};

export default CreateResume;
