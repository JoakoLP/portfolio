// import React from "react";
import "./App.css";
import Frame from "./components/Frame";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComps from "./components/Main/MainComps";
import "./i18n.ts";
import OnLoadAnimation from "./components/Frame/onLoadAnimation";
import "pathseg";
import Background from "./components/Frame/background";

function App() {
  return (
    <div className="min-h-screen overflow-hidden flex transition-colors text-black dark:bg-black bg-gray-300/30 dark:text-white duration-400 font-['Roboto_Condensed']">
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
  );
}

export default App;
