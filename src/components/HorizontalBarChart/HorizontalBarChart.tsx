import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  horizontalBarChartFilterOptions,
  HORIZONTAL_BAR_CHART_TITLE,
} from "../../common/common";
import {
  HorizontalBarChartContainer,
  HorizontalBarChartHeader,
  HorizontalBarChartTitle,
  StyledHorizontalBarChart,
} from "./HorizontalBarChart.style";
import { StyledSelect } from "../StackedBarChart/StackedBarChart.style";
import { wrapLabelAxis } from "../../utils/wrapLabelAxis";
import { MyContext } from "../Theme";
import { useAxios } from "../../common/useAxios";

export type AllTopProductsData = {
  productId: string;
  productCode: string;
  productName: string;
  revenue: number;
  quantity: number;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement as any,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const defaultUrl =
  "ftiles/dashboard/product/allTopProduct?fromDate=2023-03-1T00:00:00.0000000&toDate=2023-03-31T23:59:00.0000000&by=revenue";

const HorizontalBarChart: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(
    horizontalBarChartFilterOptions[0]
  );
  const [option, setOption] = useState<string>(
    horizontalBarChartFilterOptions[0].value
  );
  const [topProductsData, setTopProductsData] = useState<AllTopProductsData[]>(
    []
  );
  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);

  useLayoutEffect(() => {
    setTopProductsData(apiData);
  }, [apiData]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/product/allTopProduct?fromDate=2023-03-01T00:00:00.0000000&toDate=2023-03-31T23:59:00.0000000&by=${option}&branchIds=${branchData}`
    );
  }, [branchData, option]);

  const handleChangeFilterOption = (e: any) => {
    setSelectedOption(e);
    setOption(e.value);
    setTopProductsData([]);
  };

  const labels = loading
    ? null
    : topProductsData
    ? topProductsData.map((product) => wrapLabelAxis(product.productName, 20))
    : null;

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: loading
          ? null
          : topProductsData
          ? topProductsData.map((product) => product.revenue)
          : null,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <HorizontalBarChartContainer>
      <HorizontalBarChartHeader>
        <HorizontalBarChartTitle>
          {HORIZONTAL_BAR_CHART_TITLE}
        </HorizontalBarChartTitle>
        <StyledSelect
          defaultValue={selectedOption}
          onChange={(e: any) => handleChangeFilterOption(e)}
          options={horizontalBarChartFilterOptions}
        />
      </HorizontalBarChartHeader>
      <StyledHorizontalBarChart options={options} data={data as any} />
    </HorizontalBarChartContainer>
  );
};

export default HorizontalBarChart;
