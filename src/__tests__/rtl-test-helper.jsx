import React, { FunctionComponent, ReactElement } from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
  queries,
  Queries,
  render,
} from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Import your own reducer
import { rootReducer, RootState, Store } from "../store/configureStore";

/**
 * Copied & Modified from Redux docs: https://redux.js.org/recipes/writing-tests#connected-components
 *
 * Added typescript annotations, which are based on imported types
 * `State` and `Store` which describe the specific store state.
 * note: could derive these types from the reducer instead of importing
 *
 * Added `store` property to the return so that dispatch can be called directly
 */

// add options initialState and store to the usual
// type ExtraOptions = {
//   initialState?: RootState;
//   store?: Store;
// };

// export const renderWithStore =
//   // <
//   // // supports generics for Queries and Container
//   // // copied types from RTL version
//   // Q extends Queries = typeof queries,
//   // C extends Element | DocumentFragment = HTMLElement
//   // >
//   (
//     ui,
//     // options argument includes the additional redux options
//     options = {}
//   ) => {
//     // returns the standard result plus a store property => {
//     // destructure additional properties from the options and set defaults
//     const {
//       initialState = undefined,
//       store = createStore(rootReducer, initialState),
//       ...renderOptions
//     } = options;

//     // define a new Wrapper which includes a redux store Provider
//     const Wrapper = ({ children }) => {
//       return <Provider store={store}>{children}</Provider>;
//     };

//     console.log("ui=>", ui);
//     console.log("Wrapper=>", Wrapper);
//     console.log("renderOptions=> ", renderOptions);
//     return {
//       // call the regular RTL render function
//       ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
//       // return store alongside the the other return values
//       store,
//     };
//   };

// re-export everything
export * from "@testing-library/react";
// override render method
// export { render };

export const renderWithStore = (component, initialState) => {
  const store = createStore(rootReducer, initialState);
  console.log("store=> ", store);
  render(<Provider store={store}>{component}</Provider>);
};
