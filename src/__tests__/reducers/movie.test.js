import movieReducer from "../../reducers/movie";
import movie from "../fixtures/movie";

test("Should set the movie default state", () => {
  const state = movieReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    cinemaWorld: { error: null, loading: false, data: {} },
    filmWorld: { error: null, loading: false, data: {} },
  });
});

// Test returning console error
test("Should begin fetching individual movie", () => {
  const initialState = {
    loading: false,
    data: {},
    error: null,
  };

  const action = {
    type: "FETCH_MOVIE_BEGIN",
  };

  const state = movieReducer(initialState, action);
  expect(state.cinemaWorld.data).toEqual({});
  expect(state.filmWorld.data).toEqual({});
});

test("Should return success when movie is fetched", () => {
  const provider = "cinemaWorld";
  const action = {
    type: "FETCH_MOVIE_SUCCESS",
    payload: { movie, provider },
  };
  const state = movieReducer(movie, action);
  expect(state.cinemaWorld.data.movie).toEqual(movie);
});

test("Should return error when movie is not fetched", () => {
  const provider = "cinemaWorld";
  const error = {
    cinemaWorld: {
      loading: false,
      data: {},
      error: undefined,
    },
    filmWorld: {
      loading: false,
      data: {},
      error: undefined,
    },
  };

  const action = {
    type: "FETCH_MOVIE_FAILURE",
    payload: { error, provider },
  };

  const state = movieReducer(error, action);
  expect(state).toEqual(error);
});
