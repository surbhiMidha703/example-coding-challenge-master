import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../reducers/movies";
import movieReducer from "../reducers/movie";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// might have to provide types for moview
export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      movie: movieReducer,
    }),
    // composeWithDevTools(),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
