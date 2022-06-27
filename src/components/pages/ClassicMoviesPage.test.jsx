import { render, screen } from "@testing-library/react";
import { ClassicMoviesPage } from "./ClassicMoviesPage";
import { fetchMoviesFromStreamingProviders } from "../../actions/movie";
import { useSelector, Provider } from "react-redux";
import { IInitialState } from "../../reducers/movie";
import configureStore from "redux-mock-store";
import { Router } from "react-router-dom";
import {
  renderWithIntl,
  renderWithStore,
} from "../../__tests__/rtl-test-helper";
import { createMemoryHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../../store/configureStore";
import thunk from "redux-thunk";
// import { Store } from "../../store/configureStore";
const storeMiddleware = applyMiddleware(thunk);
// const mockUseSelector = useSelector as jest.Mock
const mockUseSelector = useSelector;
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  //   useDispatch: jest.fn().mockReturnValue ("dispatched action"),
  useDispatch: () => jest.fn(),
  // ...jest.useAc
}));

jest.mock("../../actions/movie.js", () => ({
  fetchMoviesFromStreamingProviders: jest
    .fn()
    .mockImplementation(() => Promise.resolve({ provider: "cinemaWorld" })),
}));

// jest.mock('react-router-dom', () => ({
//   Link: jest.fn().mockImplementation(({ children }) => {
//     return children;
//   }),
// }))

beforeAll(() => {
  mockUseSelector.mockImplementation((callback) => {
    return callback(store);
  });
});

afterEach(() => {
  mockUseSelector.mockClear();
  jest.clearAllMocks();
});

test("page is loading when data is being fetched", async () => {
  const history = createMemoryHistory();
  const initialState = {
    movies: {
      loading: false,
      error: null,
    },
    movie: {
      cinemaWorld: {
        loading: true,
        data: {},
        error: null,
      },
      filmWorld: {
        loading: true,
        data: {},
        error: null,
      },
    },
  };
  const store = createStore(rootReducer, initialState, storeMiddleware);
  renderWithIntl(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <ClassicMoviesPage />
      </Router>
    </Provider>
  );
  //   const options = { initialState };
  //   render(<ClassicMoviesPage/>)
  //   <Router location={history.location} navigator={history}>
  //   renderWithIntl(<ClassicMoviesPage />, initialState, history);
  //   </Router>;

  screen.debug();
});
