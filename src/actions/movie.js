import errorMessage from "../utils/errorMessage";
export const FETCH_MOVIE_BEGIN = "FETCH_MOVIE_BEGIN";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchMovieBegin = (provider) => ({
  type: FETCH_MOVIE_BEGIN,
  payload: { provider },
});

export const fetchMovieSuccess = (movie, provider) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: { movie, provider },
});

export const fetchMovieFailure = (error, provider) => ({
  type: FETCH_MOVIE_FAILURE,
  payload: { error, provider },
});

const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY_AUTH,
};

// let fetchRequest = 6;
// export let fetchCinemaWorld = (id) => {
//   return (dispatch) => {
//     dispatch(fetchMovieBegin("cinemaWorld"));
//     fetchRequest--;
//     fetch(`${process.env.REACT_APP_BASE_URL}cinemaworld/movie/cw${id}`, {
//       headers,
//     })
//       .then(errorMessage)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(fetchMovieSuccess(json, "cinemaWorld"));
//         fetchRequest = 6;
//         return json;
//       })
//       .catch((error) =>
//         fetchRequest > 0
//           ? dispatch(fetchCinemaWorld(id))
//           : dispatch(fetchMovieFailure(error, "cinemaWorld"))
//       );
//   };
// };

// export let fetchFilmWorld = (id) => {
//   return (dispatch) => {
//     dispatch(fetchMovieBegin("filmWorld"));
//     fetchRequest--;
//     fetch(`${process.env.REACT_APP_BASE_URL}filmworld/movie/fw${id}`, {
//       headers,
//     })
//       .then(errorMessage)
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(fetchMovieSuccess(json, "filmWorld"));
//         fetchRequest = 6;
//         return json;
//       })
//       .catch((error) =>
//         fetchRequest > 0
//           ? dispatch(fetchFilmWorld(id))
//           : dispatch(fetchMovieFailure(error, "filmWorld"))
//       );
//   };
// };

// const urls = [
//   "https://swapi.co/api/people/1",
//   "https://swapi.co/api/people/2",
//   "https://swapi.co/api/people/3",
//   "https://swapi.co/api/people/4",
// ]

// const fetchData = async () => {
//   try {
//     const response = await Promise.all(
//       urls.map(url => fetch(url).then(res => res.json()))
//     )
//     console.log(response)
//   } catch (error) {
//     console.log("Error", error)
//   }
// }
// fetchData()

export const fetchMoviesFromStreamingProviders = (id) => async (dispatch) => {
  const movieURLs = [
    `${process.env.REACT_APP_BASE_URL}filmworld/movie/fw${id}`,
    `${process.env.REACT_APP_BASE_URL}cinemaworld/movie/cw${id}`,
  ];

  let response;
  try {
    await dispatch(fetchMovieBegin("cinemaWorld"));
    await dispatch(fetchMovieBegin("filmWorld"));
    response = await Promise.allSettled(
      movieURLs.map((url) =>
        fetch(url, {
          headers,
          retries: 3,
          retryDelay: 1000,
        }).then((res) => res.json())
      )
    );
    await dispatch(fetchMovieSuccess(response[0].value, "cinemaWorld"));
    await dispatch(fetchMovieSuccess(response[1].value, "filmWorld"));
    console.log("movies", response);
  } catch (e) {
    const errors = response
      .filter((res) => res.status === "reject")
      .map((res) => res.reason)
      .toString();
    dispatch(fetchMovieFailure(errors));
  }
};
