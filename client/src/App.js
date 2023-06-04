import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import "./App.css";
import Resume from "./components/Resume";
import Header from "./components/Header";
import CreateResume from "./components/CreateResume";

import Footer from "./components/Footer";
import BackAnimation from "./components/BackAnimation";

const App = () => {
  const [isClick, setIsClick] = useState(false);
  const totalHeightRef = useRef(null);

  const [totalHeight, setTotalHeight] = useState(0);

  const changeTotalHeight = () => {
    setTotalHeight(totalHeightRef.current.offsetHeight);
  };

  useEffect(changeTotalHeight, []);

  useEffect(() => {
    window.addEventListener("resize", changeTotalHeight);
    return () => window.removeEventListener("resize", changeTotalHeight);
  });
  // console.log(totalHeight);

  // const [headerHeight, setHeaderHeight] = useState(0);
  // const [createYourResumeHeight, setCreateYourResumeHeight] = useState(0);
  // const [footerHeight, setFooterHeight] = useState(0);

  // const totalHeight = headerHeight + createYourResumeHeight + footerHeight;

  return (
    <>
      <main ref={totalHeightRef}>
        <BackAnimation totalHeight={totalHeight} />
        <Header />
        {!isClick && <CreateResume setIsClick={setIsClick} />}
        {isClick && <Resume isClick={isClick} setIsClick={setIsClick} />}
        <Footer />
      </main>
    </>
  );
};

export default App;
