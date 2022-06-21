import React, { useEffect} from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCinemaWorld, fetchFilmWorld } from "../../actions/movie";
import Movie from "../Movie";
import loadingSpinner from "../../__ASSETS__/loadSpinner.gif";

export const ClassicMoviesPage = () => {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movie)
  const params = useParams()

  useEffect(() => {
    dispatch(fetchCinemaWorld(params.id))
    dispatch(fetchFilmWorld(params.id))
  },[])

    return (
      <main>
        {movie.cinemaWorld.loading === true &&
        movie.filmWorld.loading === true ? (
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
