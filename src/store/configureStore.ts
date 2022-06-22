import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../reducers/movies";
import movieReducer from "../reducers/movie";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// might have to provide types for moview
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      movie: movieReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
