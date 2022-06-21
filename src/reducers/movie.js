import { combineReducers } from "redux";
import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../actions/movie";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const movieReducer = (provider) => (state = initialState, action) => {
  if (action.payload && action.payload.provider === provider) {
    switch (action.type) {
      case FETCH_MOVIE_BEGIN:
        return { ...state, ...initialState, loading: true };
      case FETCH_MOVIE_SUCCESS:
        return {
          ...state,
          ...initialState,
          data: action.payload,
        };
      case FETCH_MOVIE_FAILURE:
        return { ...state, ...initialState, error: action.error };
      default:
        return state;
    }
  }
  return state;
};

export default combineReducers({
  cinemaWorld: movieReducer("cinemaWorld"),
  filmWorld: movieReducer("filmWorld"),
});
