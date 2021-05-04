import "./App.css";

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Fonts from "./components/Fonts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <Sidebar />
          <Fonts />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default App;
