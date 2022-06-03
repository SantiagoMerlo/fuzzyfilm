import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import MovieDetailsPage from "./movies/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
