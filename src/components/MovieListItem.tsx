import React, {FC} from "react";
import { Link } from "react-router-dom";

interface IMovieListItem {
  ID: string,
  Title: string,
  Poster: string

}
export const MovieListItem: FC<IMovieListItem> = ({ ID, Title, Poster }) => {
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

