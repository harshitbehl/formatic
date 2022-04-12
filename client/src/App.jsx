import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page Not Found!</div>} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
