import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";

import { LandingPage } from "../components/pages/LandingPage";
import { ClassicMoviesPage } from "../components/pages/ClassicMoviesPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ClassicMovies/:id" element={<ClassicMoviesPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
};
