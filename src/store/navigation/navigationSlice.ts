import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Builder } from "../../types";

export enum NavigationPages {
  DASHBOARD = "DASHBOARD",
  SELL_PRODUCT = "SELL_PRODUCT",
}

export interface NavigationInitialState {
  pageId: NavigationPages;
  lastActionPageId: NavigationPages;
}

export const buildNavigationState: Builder<NavigationInitialState> = (
  overrides
) => ({
  pageId: NavigationPages.DASHBOARD,
  lastActionPageId: NavigationPages.DASHBOARD,
  ...overrides,
});

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: buildNavigationState(),
  reducers: {
    jump: (state, action: PayloadAction<NavigationPages>) => {
      let newPageId = action.payload;
      const ALL_PAGE_IDS = Object.values(NavigationPages).filter(
        (value) => typeof value === "string"
      ) as NavigationPages[];
      if (ALL_PAGE_IDS.includes(newPageId)) {
        state.pageId = newPageId;
      }
    },
    saveLastActionPage: (state, action: PayloadAction<NavigationPages>) => {
      state.lastActionPageId = action.payload;
    },
  },
});

export const { jump, saveLastActionPage } = navigationSlice.actions;

export const navigationReducer = navigationSlice.reducer;
