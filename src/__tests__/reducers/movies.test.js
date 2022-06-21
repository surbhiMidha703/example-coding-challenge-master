import moviesReducer from "../../reducers/movies";
import movies from "../fixtures/movies";

test("Should set the movies default state", () => {
  const state = moviesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ error: null, loading: false, items: [] });
});

test("Should begin fetching movies", () => {
  const initialState = {
    items: [movies],
    loading: false,
    error: null,
  };

  const action = {
    type: "FETCH_MOVIES_BEGIN",
  };
  const state = moviesReducer(initialState, action);
  expect(state.loading).toBe(true);
  expect(state.items).toEqual([]);
});

test("Should return success when movies are fetched", () => {
  const action = {
    type: "FETCH_MOVIES_SUCCESS",
    payload: { movies },
  };
  const state = moviesReducer(movies, action);
  expect(state.items).toEqual(movies);
});

test("Should return error when movies are not fetched", () => {
  const error = {
    error: "error",
  };

  const action = {
    type: "FETCH_MOVIES_FAILURE",
    payload: { error },
  };
  const state = moviesReducer(error, action);
  expect(state.error).toEqual(error);
});
