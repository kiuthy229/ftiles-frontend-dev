import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import { rotateDataForStackedBar } from "../../common/helper/rotateDataHelper";
import { date, hour, weekDays } from "../../utils/timeRangeLabelsData";
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
  defaultDate,
  fromLastMonth,
  LOADING_MESSAGE,
  requestURL,
  stackedBarChartFilterOptions,
  STACKED_BAR_CHART_TITLE,
} from "../../common/common";
import {
  StackedBarChartContainer,
  StackedBarChartHeader,
  StackedBarChartTitle,
  StyledSelect,
} from "./StackedBarChart.style";
import axios from "axios";
import { MyContext } from "../Theme";
import { useAxios } from "../../common/useAxios";

//doanh thu thuần tháng này
export interface AllRevenueDetails {
  branchId: string;
  branchName: string;
  revenue: number;
  invoices: string[];
  revenueByPercent: number;
}
export type AllRevenueStates = Record<string, AllRevenueDetails[]>;

const options = {
  maintainAspectRatio: false,
  skipNull: true,
  plugins: {
    title: {
      display: true,
    },
    legend: {
      display: true,
      position: "bottom" as "bottom",
      align: "start" as "start",
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

const defaultUrl = `ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&timeUnit=weekday`;

const StackedBarChart: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [selectedOption, setSelectedOption] = useState(
    stackedBarChartFilterOptions[0]
  );
  const [_, setRevenueByTimeUnitData] = useState<AllRevenueStates>({});
  const [rotateData, setRotateData] = useState<AllRevenueStates>({});
  const [option, setOption] = useState<string>(
    stackedBarChartFilterOptions[0].value
  );
  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);

  useLayoutEffect(() => {
    setRotateData(rotateDataForStackedBar(apiData, option));
  }, [apiData, option]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&timeUnit=${option}&branchIds=${branchData}`
    );
  }, [branchData, option]);

  const handleChangeFilterOption = (e: { value: string; label: string }) => {
    setSelectedOption(e);
    setOption(e.value);
    setRevenueByTimeUnitData({});
  };

  let labels = loading
    ? LOADING_MESSAGE
    : option === stackedBarChartFilterOptions[0].value
    ? weekDays
    : option === stackedBarChartFilterOptions[1].value
    ? date
    : hour;
  const data = {
    labels,
    datasets: [
      {
        label: Object.keys(rotateData)[0] ? Object.keys(rotateData)[0] : "",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        data: Object.values(rotateData)[0],
      },
      {
        label: Object.keys(rotateData)[1] ? Object.keys(rotateData)[1] : "",
        backgroundColor: "rgba(75, 342, 142, 0.5)",
        data: Object.values(rotateData)[1],
      },
      {
        label: Object.keys(rotateData)[2] ? Object.keys(rotateData)[2] : "",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: Object.values(rotateData)[2],
      },
      {
        label: Object.keys(rotateData)[3] ? Object.keys(rotateData)[3] : "",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: Object.values(rotateData)[3],
      },
      {
        label: Object.keys(rotateData)[4] ? Object.keys(rotateData)[4] : "",
        backgroundColor: "#E8A0BF",
        data: Object.values(rotateData)[4],
      },
      {
        label: Object.keys(rotateData)[5] ? Object.keys(rotateData)[5] : "",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        data: Object.values(rotateData)[5],
      },
      {
        label: Object.keys(rotateData)[6] ? Object.keys(rotateData)[0] : "",
        backgroundColor: "#F9E2AF",
        data: Object.values(rotateData)[6],
      },
      {
        label: Object.keys(rotateData)[7] ? Object.keys(rotateData)[1] : "",
        backgroundColor: "#FA9884",
        data: Object.values(rotateData)[7],
      },
      {
        label: Object.keys(rotateData)[8] ? Object.keys(rotateData)[2] : "",
        backgroundColor: "#576CBC",
        data: Object.values(rotateData)[8],
      },
      {
        label: Object.keys(rotateData)[9] ? Object.keys(rotateData)[3] : "",
        backgroundColor: "#A9907E",
        data: Object.values(rotateData)[9],
      },
      {
        label: Object.keys(rotateData)[10] ? Object.keys(rotateData)[4] : "",
        backgroundColor: "#9DC08B",
        data: Object.values(rotateData)[10],
      },
      {
        label: Object.keys(rotateData)[11] ? Object.keys(rotateData)[5] : "",
        backgroundColor: "#BAD7E9",
        data: Object.values(rotateData)[11],
      },
    ],
  };

  return (
    <StackedBarChartContainer>
      <StackedBarChartHeader>
        <StackedBarChartTitle>{STACKED_BAR_CHART_TITLE}</StackedBarChartTitle>

        <StyledSelect
          defaultValue={selectedOption}
          onChange={(e: any) => handleChangeFilterOption(e)}
          options={stackedBarChartFilterOptions}
        />
      </StackedBarChartHeader>

      <Bar data={data as any} options={options} style={{ maxHeight: 450 }} />
    </StackedBarChartContainer>
  );
};

export default StackedBarChart;
