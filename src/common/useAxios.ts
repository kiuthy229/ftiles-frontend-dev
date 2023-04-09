import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { AllTopProductsData } from "../components/HorizontalBarChart/HorizontalBarChart";
import { AllRevenueStates } from "../components/StackedBarChart/StackedBarChart";
import { AllBranchRevenueData } from "../components/PieChart/PieChart";
import { requestURL } from "./common";

export const useAxios = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<
    | number
    | AllTopProductsData[]
    | AllBranchRevenueData[]
    | AllRevenueStates
    | undefined
  >();

  const loadData = useCallback(async () => {
    setLoading(true);
    return await axios
      .get(`${requestURL}${url}`, {
        data: { method: "HEAD", mode: "no-cors" },
      })
      .then((data: any) => {
        setApiData(data.data.data);
        setLoading(false);
      });
  }, [url]);

  useLayoutEffect(() => {
    loadData();
  }, [url, loadData]);

  return { apiData, loading };
};
