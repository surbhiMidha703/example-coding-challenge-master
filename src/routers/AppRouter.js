import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import {Header} from "../components/Header";

import LandingPage from "../components/pages/LandingPage";
import { ClassicMoviesPage } from "../components/pages/ClassicMoviesPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/ClassicMovies/:id" element={<ClassicMoviesPage/>} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
