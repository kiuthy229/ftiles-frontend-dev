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
import axios from "axios";
import {
  horizontalBarChartFilterOptions,
  horizontalBarChartTitle,
  initialBranchesList,
  requestURL,
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
  const { branchData } = useContext<any>(MyContext);
  const [branch, setBranch] = useState<number[]>(initialBranchesList);

  const fetchData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/product/allTopProduct?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000&by=${option}&branchIds=${branch}`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setTopProductsData(data.data.data);
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, [option, branch]);

  useEffect(() => {
    setTopProductsData([]);
    setBranch(branchData);
  }, [branchData]);

  const handleChangeFilterOption = (e: any) => {
    setSelectedOption(e);
    setOption(e.value);
    setTopProductsData([]);
  };

  const labels = topProductsData.map((product) =>
    wrapLabelAxis(product.productName, 20)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: topProductsData.map((product) => product.revenue),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <HorizontalBarChartContainer>
      <HorizontalBarChartHeader>
        <HorizontalBarChartTitle>
          {horizontalBarChartTitle}
        </HorizontalBarChartTitle>
        <StyledSelect
          defaultValue={selectedOption}
          onChange={(e: any) => handleChangeFilterOption(e)}
          options={horizontalBarChartFilterOptions}
        />
      </HorizontalBarChartHeader>
      <StyledHorizontalBarChart options={options} data={data} />
    </HorizontalBarChartContainer>
  );
};

export default HorizontalBarChart;
