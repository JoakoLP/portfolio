// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Frame from "./components/Frame";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComps from "./components/Main/MainComps";
import "./i18n.ts";
import ParticlesBG from "./components/Frame/particlesBG";
import ParticlesBGlight from "./components/Frame/particlesBGlight";
import OnLoadAnimation from "./components/Frame/onLoadAnimation";
import "pathseg";
import Background from "./components/Frame/background";

function App() {
  const renderBG = () => {
    const html = document.getElementsByTagName("html");
    if (html[0].className === "dark") {
      return <ParticlesBG className="hidden dark:visible" />;
    } else {
      return <ParticlesBGlight className="visible dark:hidden" />;
    }
  };
  return (
    <div className="relative min-h-screen transition-colors text-black dark:bg-black dark:text-white duration-400 font-['Roboto_Condensed']">
      <div className="">
        {/* {renderBG()} */}
        {/* <ParticlesBG /> */}
        <Background />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Frame />}>
              <Route index element={<MainComps.Projects />} />
              <Route path="/about" element={<MainComps.About />}></Route>
              <Route path="/contact" element={<MainComps.Contact />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <OnLoadAnimation />
      </div>
    </div>
  );
}

export default App;
