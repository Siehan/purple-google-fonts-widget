import "./App.css";

import React from "react";
import Header from "./components/Header";
import Fonts from "./components/Fonts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <Fonts />
      </div>
      <Footer />
    </>
  );
}
export default App;
