import {
  PreloadedState,
  combineReducers,
  configureStore as reduxConfigureStore,
} from "@reduxjs/toolkit";
import { Builder } from "../types";

import {
  buildNavigationState,
  navigationReducer,
} from "./navigation/navigationSlice";

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export const buildRootState: Builder<RootState> = (overrides) => ({
  navigation: buildNavigationState(),
  ...overrides,
});

const configureStore = (preloadedState?: PreloadedState<RootState>) =>
  reduxConfigureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof configureStore>["dispatch"];

export default configureStore;
