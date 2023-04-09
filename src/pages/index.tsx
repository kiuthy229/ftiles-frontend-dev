import React from "react";

import Dashboard from "./Dashboard/Dashboard";
import SellProduct from "./SellProduct/SellProduct";

import { NavigationPages } from "../store/navigation/navigationSlice";
import { useAppSelector } from "../store/hook";
import { selectNavigationState } from "../store/navigation/navigationSelector";

export const PAGE_LIST = {
  [NavigationPages.DASHBOARD]: Dashboard,
  [NavigationPages.SELL_PRODUCT]: SellProduct,
};

export const getPageComponent = (pageId: NavigationPages) => {
  const Page: React.FC = PAGE_LIST[pageId];

  if (!Page) {
    throw new Error("PAGE_NOT_FOUND");
  }

  return Page;
};

export const PageContainer = () => {
  const { pageId } = useAppSelector(selectNavigationState);

  const Page = getPageComponent(pageId);

  return <Page />;
};
