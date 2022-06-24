import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { fetchCinemaWorld, fetchFilmWorld } from "../../actions/movie";
import {fetchMoviesFromStreamingProviders} from "../../actions/movie"
import {Movie} from "../Movie";
import loadingSpinner from "../../__ASSETS__/loadSpinner.gif";
import { RootState } from "../..";

export const ClassicMoviesPage = () => {
  const dispatch = useDispatch()
  const movie = useSelector((state: RootState) => state.movie);
  const params = useParams()

  useEffect(() => {
    // dispatch(fetchCinemaWorld(params.id))
    // dispatch(fetchFilmWorld(params.id))
    dispatch(fetchMoviesFromStreamingProviders(params.id))
  },[])

    return (
      <main>
        {movie?.cinemaWorld?.loading === true &&
        movie?.filmWorld?.loading === true ? (
          <img
            className="section-features__spinner"
            src={loadingSpinner}
            alt="Loading spinner"
          />
        ) : (
          <Movie movie={movie} />
        )}
      </main>
    );
  }
