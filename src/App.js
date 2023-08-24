// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Frame from "./components/Frame";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComps from "./components/Main/MainComps";
import "./i18n.ts";
import ParticlesBG from "./components/Frame/particlesBG";

function App() {
  return (
    <div className="min-h-screen relative abg-white dark:bg-black dark:text-white transition-colors duration-400">
      <div className="">
        <ParticlesBG />
        <BrowserRouter>
          <Routes>
            <Route element={<Frame />}>
              <Route path="/" element={<Header />}>
                <Route index element={<MainComps.Home />} />
                <Route path="/projects" element={<MainComps.Projects />}></Route>
                <Route path="/about" element={<MainComps.About />}></Route>
                <Route path="/contact" element={<MainComps.Contact />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
