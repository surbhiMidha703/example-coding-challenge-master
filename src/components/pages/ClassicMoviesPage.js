import React from "react";
import { connect } from "react-redux";
import { fetchCinemaWorld, fetchFilmWorld } from "../../actions/movie";
import Movie from "../Movie";
import loadingSpinner from "../../__ASSETS__/loadSpinner.gif";

class ClassicMovies extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCinemaWorld(this.props.id));
    this.props.dispatch(fetchFilmWorld(this.props.id));
  }

  render() {
    return (
      <main>
        {this.props.movie.cinemaWorld.loading === true &&
        this.props.movie.filmWorld.loading === true ? (
          <img
            className="section-features__spinner"
            src={loadingSpinner}
            alt="Loading spinner"
          />
        ) : (
          <Movie movie={this.props.movie} />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    movie: state.movie,
    id: props.match.params.id,
  };
};

export default connect(mapStateToProps)(ClassicMovies);
