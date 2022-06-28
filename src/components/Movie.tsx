import React, {FC, useState} from "react";
import { Link } from "react-router-dom";
import colorizePrice from "../utils/colorizePrice";
import ratingDisplay from "../utils/ratingDisplay";
import { IMovie, IMovieData } from "./pages/types";

interface IMovieInterface {
  movie: IMovie
}

export const Movie: FC<IMovieInterface> = ({ movie }) => {
  const cinemaWorld: IMovieData = movie?.cinemaWorld?.data?.movie
  const filmWorld: IMovieData = movie?.filmWorld?.data?.movie
  const [priceFilmWorld, setPriceFilmWorld] = useState(filmWorld?.Price)
  const [priceCinemaWorld, setPriceCinemaWorld] = useState(cinemaWorld?.Price)
  // const [priceCinemaWorld, setPriceCinemaWorld] = useState(parseInt(cinemaWorld?.Price))
  const [currencyType, setCurrencyType] = useState<string>('dollar')

  const convertPrice = () => {
    console.log('hello')
    if(currencyType === 'pound'){
      setPriceCinemaWorld((parseFloat(cinemaWorld.Price) * 0.56).toFixed(2))
      setPriceFilmWorld((parseFloat(filmWorld.Price) * 0.56).toFixed(2))
      setCurrencyType('dollar')
    } else {
      setPriceCinemaWorld((parseFloat(cinemaWorld.Price) * 1.77).toFixed(2))
      setPriceFilmWorld((parseFloat(priceCinemaWorld) * 1.77).toFixed(2))
      setCurrencyType('pound')
    }
    console.log('priceFilmWorld=> ',priceFilmWorld)
    console.log('priceFilmWorld=> ',priceFilmWorld)
  }

  const addCurrType = () => {
    return currencyType === 'dollar' ? '$' : '£'
  }

  return (
    <section>
      <div className="movie-box">
        <Link className="btn-primary" to="/">
          &#8592; Back
        </Link>
        <img
          className="movie-box__poster"
          src={cinemaWorld?.Poster || filmWorld?.Poster}
          alt="Movie poster"
        />
        <div className="movie-box__title-wrapper">
          <h1 className="movie-box__title">
            {cinemaWorld?.Title || filmWorld?.Title}
          </h1>
        </div>
        <div className="movie-box__text">
          <p className="movie-box__plot">Plot:</p>
          <p className="movie-box__plot--description">
            {cinemaWorld?.Plot || filmWorld?.Plot}
          </p>
          <img
            src={ratingDisplay(cinemaWorld?.Rated, filmWorld?.Rated)}
            className="movie-box__rating"
            alt="Movie rating"
          />
          <a
            href="#"
            className="btn-prices"
            id={colorizePrice(filmWorld?.Price, cinemaWorld?.Price)}
          >
            <p className="fw">Film World</p>
            {filmWorld?.Price ? addCurrType() + filmWorld?.Price : <p>N/A</p>}
          </a>
          <a
            href="#"
            className="btn-prices"
            id={colorizePrice(cinemaWorld?.Price, filmWorld?.Price)}
          >
            <p className="cw">Cinema World</p>
            {cinemaWorld?.Price ? addCurrType() + priceCinemaWorld : <p>N/A</p>}
          </a>
        <button onClick={() => convertPrice()} className='movie-box__convertPrice' aria-label='convertPrice'>Change to {currencyType}</button>
        </div>
      </div>
    </section>
  );
};


