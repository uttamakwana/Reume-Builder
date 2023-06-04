import React from "react";
import style from "./BackAnimation.module.css";

const BackAnimation = ({ totalHeight }) => {
  // console.log(style.bgAnimation);
  // const wrapper = document.querySelector(".BackAnimation_bgAnimation__d62SR");

  // wrapper.style.height = totalHeight;

  const numberOfColorBoxes = 400;
  return (
    <div
      style={{ height: totalHeight }}
      className={style.bgAnimation}
      id={style.bgAnimation}
    >
      <div className={style.backgroundAmim}></div>
      {Array.from({ length: numberOfColorBoxes }).map((_, index) => (
        <div key={index} className={style.colorBox}></div>
      ))}
    </div>
  );
};

export default BackAnimation;
