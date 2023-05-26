import React, { useState } from "react";
import "./App.css";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateResume from "./components/CreateResume";

export function App() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <Header />
      {!isClick && <CreateResume setIsClick={setIsClick} />}
      {isClick && <Resume isClick={isClick} setIsClick={setIsClick} />}
      {!isClick && <Footer />}
    </>
  );
}

export default App;
