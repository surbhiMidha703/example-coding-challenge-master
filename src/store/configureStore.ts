import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../reducers/movies";
import movieReducer from "../reducers/movie";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


export const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// might have to provide types for moview
export const configureStore = () => {
  const store = createStore(
    // combineReducers({
    //   movies: moviesReducer,
    //   movie: movieReducer,
    // }),
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export type Store = typeof store;

export type Reducer = typeof rootReducer;

export type RootState = ReturnType<Reducer>;
