import React from "react";
import { Link } from "react-router-dom";

const MovieListItem = ({ ID, Title, Poster }) => {
  const slicedID = ID.slice(2, 9);

  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <Link to={`/ClassicMovies/${slicedID}`}>
          <img className="feature-box__image" src={Poster} alt="movie poster" />
        </Link>
        <p className="feature-box__text">{Title}</p>
      </div>
    </div>
  );
};

export default MovieListItem;
