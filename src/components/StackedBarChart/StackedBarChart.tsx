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
  initialBranchesList,
  requestURL,
  stackedBarChartFilterOptions,
  stackedBarChartTitle,
} from "../../common/common";
import {
  StackedBarChartContainer,
  StackedBarChartHeader,
  StackedBarChartTitle,
  StyledSelect,
} from "./StackedBarChart.style";
import axios from "axios";
import { MyContext } from "../Theme";

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
      max: 16000000000,
    },
  },
};

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
  const [rotateData, setRotateData] = useState<any>({});
  const [option, setOption] = useState<string>(
    stackedBarChartFilterOptions[0].value
  );

  const { branchData } = useContext<any>(MyContext);
  const [branch, setBranch] = useState<number[]>(initialBranchesList);

  const fetchData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000&timeUnit=${option}&branchIds=${branch}`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setRevenueByTimeUnitData(data.data.data);
        setRotateData(rotateDataForStackedBar(data.data, option));
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, [option, branchData]);

  useEffect(() => {
    setRevenueByTimeUnitData({});
    setBranch(branchData);
  }, [branchData]);

  const handleChangeFilterOption = (e: any) => {
    setSelectedOption(e);
    setOption(e.value);
    setRevenueByTimeUnitData({});
  };

  let labels =
    option === stackedBarChartFilterOptions[0].value
      ? weekDays
      : option === stackedBarChartFilterOptions[1].value
      ? date
      : hour;
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
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        data: Object.values(rotateData)[4],
      },
      {
        label: Object.keys(rotateData)[5],
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        data: Object.values(rotateData)[5],
      },
    ],
  };

  return (
    <StackedBarChartContainer>
      <StackedBarChartHeader>
        <StackedBarChartTitle>{stackedBarChartTitle}</StackedBarChartTitle>

        <StyledSelect
          defaultValue={selectedOption}
          onChange={(e: any) => handleChangeFilterOption(e)}
          options={stackedBarChartFilterOptions}
        />
      </StackedBarChartHeader>

      <Bar data={data} options={options} style={{ maxHeight: 450 }} />
    </StackedBarChartContainer>
  );
};

export default StackedBarChart;
