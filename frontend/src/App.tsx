import React from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
