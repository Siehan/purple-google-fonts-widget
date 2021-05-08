import "./App.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Fonts from "./components/Fonts";
import Footer from "./components/Footer";
import ToggleModeButton from "./components/ToggleModeButton";
//import ColorMode from "./components/ColorMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";

  return (
    <>
      <div className={modeClasses}>
        <Header />
        <ToggleModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container min-vh-100">
          <Fonts />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
