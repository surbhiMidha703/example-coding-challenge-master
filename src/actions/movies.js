import errorMessage from "../utils/errorMessage";
export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY_AUTH,
};

const cinemaWorldUrl = `${process.env.REACT_APP_BASE_URL}cinemaworld/movies`;

let fetchRequest = 3;
export function fetchMovies() {
  return (dispatch) => {
    dispatch(fetchMoviesBegin());
    fetchRequest--;
    return fetch(cinemaWorldUrl, {
      headers,
    })
      .then(errorMessage)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchMoviesSuccess(json["Movies"]));
        return json;
      })
      .catch((error) =>
        fetchRequest > 0
          ? dispatch(fetchMovies())
          : dispatch(fetchMoviesFailure(error))
      );
  };
}
