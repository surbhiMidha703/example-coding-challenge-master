import React from "react";
import { useSelector } from "react-redux";
import {MovieListItem} from "./MovieListItem";
import loadingSpinner from "../__ASSETS__/loadSpinner.gif";
import { IMovieData } from "./pages/types";
import { RootState } from "..";

export const MovieList = () => {
  const movies = useSelector((state: RootState) => state.movies.items)
  const loading = useSelector((state: RootState) => state.movies.loading) 
  const error = useSelector((state: RootState) => state.movies.error)

  if (error) {
    return <div className="error-message">Error! {error.message}</div>;
  }

  return (
    <section className="section-features">
      {loading ? (
        <img
          className="section-features__spinner"
          src={loadingSpinner}
          alt="loading spinner"
        />
      ) : (
        <div className="row-wrap">
          {movies ? (
            movies.map((movie: IMovieData) => {
              return <MovieListItem key={movie.ID} {...movie} />;
            })
          ) : (
            <p className="error-message">
              No movies to display right now, please check back later.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

