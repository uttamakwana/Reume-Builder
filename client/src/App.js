import React from "react";
import "./App.css";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";


export function App () {
    return (
      <>
        <Header />
        <Resume />
        <Footer />
      </>
    );
  }

export default App;
