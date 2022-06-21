import React from "react";
import { Link } from "react-router-dom";
import colorizePrice from "../utils/colorizePrice";
import ratingDisplay from "../utils/ratingDisplay";

const Movie = (props) => {
  const cinemaWorld = props.movie.cinemaWorld.data.movie || {};
  const filmWorld = props.movie.filmWorld.data.movie || {};

  return (
    <section>
      <div className="movie-box">
        <Link className="btn-primary" to="/">
          &#8592; Back
        </Link>
        <img
          className="movie-box__poster"
          src={cinemaWorld.Poster || filmWorld.Poster}
          alt="Movie poster"
        />
        <div className="movie-box__title-wrapper">
          <h1 className="movie-box__title">
            {cinemaWorld.Title || filmWorld.Title}
          </h1>
        </div>
        <div className="movie-box__text">
          <p className="movie-box__plot">Plot:</p>
          <p className="movie-box__plot--description">
            {cinemaWorld.Plot || filmWorld.Plot}
          </p>
          <img
            src={ratingDisplay(cinemaWorld.Rated, filmWorld.Rated)}
            className="movie-box__rating"
            alt="Movie rating"
          />
          <a
            href="#"
            className="btn-prices"
            id={colorizePrice(filmWorld.Price, cinemaWorld.Price)}
          >
            <p className="fw">Film World</p>
            {filmWorld.Price ? "$" + filmWorld.Price : <p>N/A</p>}
          </a>
          <a
            href="#"
            className="btn-prices"
            id={colorizePrice(cinemaWorld.Price, filmWorld.Price)}
          >
            <p className="cw">Cinema World</p>
            {cinemaWorld.Price ? "$" + cinemaWorld.Price : <p>N/A</p>}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Movie;
