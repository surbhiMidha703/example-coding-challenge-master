import { AnyAction } from "redux";
import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "../actions/movies";

interface IInitialState {
  items: [],
  loading: boolean,
  error: {message: string} | null,
}

const initialState: IInitialState = {
  items: [],
  loading: false,
  error: null,
};

// interface IAction {
//   type: string,
//   payload: {
//     movies: [],
//     error: string
//   }
// }
export default function moviesReducer(state = initialState, action: AnyAction): IInitialState {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.movies,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}
