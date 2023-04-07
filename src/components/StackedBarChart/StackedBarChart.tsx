import React, { useEffect, useLayoutEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import {
  requestURL,
  stackedBarChartFilterOptions,
  stackedBarChartTitle,
} from "../../common/common";
import { rotateDataForStackedBar } from "../../common/helper/rotateDataHelper";
import {
  StackedBarChart,
  StackedBarChartHeader,
  StackedBarChartTitle,
  StyledSelect,
} from "./StackedBarChart.style";
import { map } from "../../utils/sortWeekDays";
import axios from "axios";

//doanh thu thuần tháng này
export interface AllRevenueDetails {
  branchId: string;
  branchName: string;
  revenue: number;
  invoices: string[];
  revenueByPercent: number;
}
export type AllRevenueStates = Record<string, AllRevenueDetails[]>;

export const options = {
  skipNull: false,
  plugins: {
    title: {
      display: false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const BarChart: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [selectedOption, setSelectedOption] = useState(
    stackedBarChartFilterOptions[2]
  );
  const [revenueByDayData, setRevenueByDayData] = useState<AllRevenueStates>(
    {}
  );
  const [rotateData, setRotateData] = useState<any>({});
  const [_, setOption] = useState<string>("weekday");

  const fetchData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000&timeUnit=weekday`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setRevenueByDayData(data.data.data);
        setRotateData(rotateDataForStackedBar(data.data, "weekday"));
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const handleChangeFilterOption = (e: any) => {
    setSelectedOption(e);
    setOption(e.value);
  };

  let labels = Object.keys(revenueByDayData).sort(
    (a: any, b: any) => map[a] - map[b]
  );

  const data = {
    labels,
    datasets: [
      {
        label: Object.keys(rotateData)[0],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        data: Object.values(rotateData)[0],
      },
      {
        label: Object.keys(rotateData)[1],
        backgroundColor: "rgba(75, 342, 142, 0.5)",
        data: Object.values(rotateData)[1],
      },
      {
        label: Object.keys(rotateData)[2],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: Object.values(rotateData)[2],
      },
      {
        label: Object.keys(rotateData)[3],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: Object.values(rotateData)[3],
      },
      {
        label: Object.keys(rotateData)[4],
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        data: Object.values(rotateData)[4],
      },
    ],
  };

  return (
    <StackedBarChart>
      <StackedBarChartHeader>
        <StackedBarChartTitle>{stackedBarChartTitle}</StackedBarChartTitle>

        <StyledSelect
          defaultValue={selectedOption}
          onChange={(e: any) => handleChangeFilterOption(e)}
          options={stackedBarChartFilterOptions}
        />
      </StackedBarChartHeader>

      <Bar data={data} options={options} />
    </StackedBarChart>
  );
};

export default BarChart;
