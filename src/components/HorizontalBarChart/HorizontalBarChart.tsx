import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
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
  defaultDate,
  fromLastMonth,
  horizontalBarChartFilterOptions,
  HORIZONTAL_BAR_CHART_TITLE,
  LOADING_MESSAGE,
  NOT_FOUND_MESSAGE,
} from "../../common/common";
import {
  HorizontalBarChartContainer,
  HorizontalBarChartHeader,
  HorizontalBarChartTitle,
  StyledHorizontalBarChart,
} from "./HorizontalBarChart.style";
import { StyledSelect } from "../StackedBarChart/StackedBarChart.style";
import { wrapLabelAxis } from "../../utils/wrapLabelAxis";
import { MyContext } from "../Theme/Theme";
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
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  animation: false as false,
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

const defaultUrl = `ftiles/dashboard/product/allTopProduct?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&by=revenue`;

const HorizontalBarChart: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(
    horizontalBarChartFilterOptions[0]
  );
  const [option, setOption] = useState<string>(
    horizontalBarChartFilterOptions[0].value
  );
  let topProductsData: AllTopProductsData[] = [];
  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);

  topProductsData = useMemo(() => apiData, [apiData]);

  useEffect(() => {
    if (url.includes("&by=revenue")) {
      setUrl(url.replace("&by=revenue", `&by=${option}`));
    } else if (url.includes("&by=quantity")) {
      setUrl(url.replace("&by=quantity", `&by=${option}`));
    }
  }, [option]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/product/allTopProduct?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&by=${option}&branchIds=${branchData}`
    );
    console.log("branch data changed");
  }, [branchData]);

  const handleChangeFilterOption = (e: { value: string; label: string }) => {
    setSelectedOption(e);
    setOption(e.value);
  };

  const labels = loading
    ? LOADING_MESSAGE
    : topProductsData
    ? topProductsData.map((product) => wrapLabelAxis(product.productName, 20))
    : NOT_FOUND_MESSAGE;

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: loading
          ? LOADING_MESSAGE
          : topProductsData
          ? topProductsData.map((product) => product.revenue)
          : NOT_FOUND_MESSAGE,
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
