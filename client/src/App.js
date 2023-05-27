import React, { useState } from "react";
import "./App.css";
import Resume from "./components/Resume";
import Header from "./components/Header";
import CreateResume from "./components/CreateResume";

import Footer from "./components/Footer";

export function App() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <Header />
      {!isClick && <CreateResume setIsClick={setIsClick} />}
      {isClick && <Resume isClick={isClick} setIsClick={setIsClick} />}
      <Footer />
    </>
  );
}

export default App;
