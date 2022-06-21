import React from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";
import loadingSpinner from "../__ASSETS__/loadSpinner.gif";

const MovieList = (props) => {
  const { error, loading, movies } = props;

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
            movies.map((movie) => {
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

const mapStateToProps = (state) => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps)(MovieList);
