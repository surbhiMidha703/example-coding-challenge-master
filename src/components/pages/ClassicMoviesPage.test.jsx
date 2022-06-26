import { render, screen } from "@testing-library/react";
import { ClassicMoviesPage } from "./ClassicMoviesPage";
import { fetchMoviesFromStreamingProviders } from "../../actions/movie";
import { useSelector, Provider } from "react-redux";
import { IInitialState } from "../../reducers/movie";
import configureStore from "redux-mock-store";
import { renderWithStore } from "../../__tests__/rtl-test-helper";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

// const mockUseSelector = useSelector as jest.Mock
const mockUseSelector = useSelector;
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
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
    loading: true,
    data: {},
    error: null,
  };

  //   const options = { initialState };
  //   render(<ClassicMoviesPage/>)
  <Router location={history.location} navigator={history}>
    {renderWithStore(<ClassicMoviesPage />, initialState)}
  </Router>;
});
