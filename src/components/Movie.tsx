import React, {FC, useState, useEffect} from "react";
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
  const [priceCinemaWorld, setPriceCinemaWorld] = useState(0)
  const [priceFilmWorld, setPriceFilmWorld] = useState(0)
  const [currencyType, setCurrencyType] = useState<string>('pound')
  const [currSym, setCurrSym] = useState('$')

  useEffect(()=> {
    setPriceFilmWorld(filmWorld?.Price)
    setPriceCinemaWorld(cinemaWorld?.Price)
  },[filmWorld?.Price, cinemaWorld?.Price])

  const convertPrice = (e) => {
    console.log('hello')
  if(e.target.value === 'pound'){
      setPriceCinemaWorld(parseFloat((cinemaWorld?.Price * 0.56).toFixed(2)))
      setPriceFilmWorld(parseFloat((filmWorld?.Price * 0.56).toFixed(2)))
      setCurrencyType('dollar')
      setCurrSym('£')
    } else {
      setPriceCinemaWorld(cinemaWorld.Price)
      setPriceFilmWorld(filmWorld.Price)
      setCurrencyType('pound')
      setCurrSym('$')
    }
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
            id={colorizePrice(priceFilmWorld, priceCinemaWorld)}
          >
            <p className="fw">Film World</p>
            {filmWorld?.Price ? currSym + priceFilmWorld : <p>N/A</p>}
          </a>
          <a
            href="#"
            className="btn-prices"
            id={colorizePrice(priceCinemaWorld, priceFilmWorld)}
          >
            <p className="cw">Cinema World</p>
            {cinemaWorld?.Price ? currSym + priceCinemaWorld : <p>N/A</p>}
          </a>
        <button onClick={(e) => convertPrice(e)} className='movie-box__convertPrice' aria-label='convertPrice' value={currencyType}>Change to {currencyType}</button>
        </div>
      </div>
    </section>
  );
};


