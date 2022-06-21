import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../reducers/movies";
import movieReducer from "../reducers/movie";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      movie: movieReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
