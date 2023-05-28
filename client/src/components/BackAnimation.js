import React from 'react';
import style from "./BackAnimation.module.css";

const BackAnimation = () => {
  const numberOfColorBoxes = 400;
  return (
    <div className={style.bgAnimation} id={style.bgAnimation}>
      <div className={style.backgroundAmim}></div>
      {Array.from({ length: numberOfColorBoxes }).map((_, index) => (
        <div key={index} className={style.colorBox}></div>
      ))}
    </div>
  );
};

export default BackAnimation;
