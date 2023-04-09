import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

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
  StackedBarChartTimeRangeFilterOptions,
  STACKED_BAR_CHART_TITLE,
} from "../../common/common";
import {
  StackedBarChartContainer,
  StackedBarChartHeader,
  StackedBarChartTitle,
  StyledSelect,
} from "./StackedBarChart.style";
import { MyContext } from "../Theme/Theme";
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
  animation: false as false,
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
    StackedBarChartTimeRangeFilterOptions[0]
  );
  let rotateData: AllRevenueStates = {};
  const [option, setOption] = useState<string>(
    StackedBarChartTimeRangeFilterOptions[0].value
  );
  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);

  rotateData = useMemo(() => rotateDataForStackedBar(apiData, option), [
    apiData,
    option,
  ]);

  useEffect(() => {
    if (
      url.includes("&timeUnit=weekday" || "&timeUnit=date" || "&timeUnit=hour")
    ) {
      setUrl(
        url.replace(
          "&timeUnit=weekday" || "&timeUnit=date" || "&timeUnit=hour",
          `&timeUnit=${option}`
        )
      );
    }
  }, [option]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&timeUnit=${option}&branchIds=${branchData}`
    );
  }, [branchData]);

  const handleChangeFilterOption = (e: { value: string; label: string }) => {
    setSelectedOption(e);
    setOption(e.value);
  };

  let labels = loading
    ? LOADING_MESSAGE
    : option === StackedBarChartTimeRangeFilterOptions[0].value
    ? weekDays
    : option === StackedBarChartTimeRangeFilterOptions[1].value
    ? date
    : hour;
  const data = {
    labels,
    datasets: [
      {
        label: Object.keys(rotateData)[0] ? Object.keys(rotateData)[0] : "",
        backgroundColor: "#009FBD",
        data: Object.values(rotateData)[0],
      },
      {
        label: Object.keys(rotateData)[1] ? Object.keys(rotateData)[1] : "",
        backgroundColor: "#FCE22A",
        data: Object.values(rotateData)[1],
      },
      {
        label: Object.keys(rotateData)[2] ? Object.keys(rotateData)[2] : "",
        backgroundColor: "#0081C9",
        data: Object.values(rotateData)[2],
      },
      {
        label: Object.keys(rotateData)[3] ? Object.keys(rotateData)[3] : "",
        backgroundColor: "#AACB73",
        data: Object.values(rotateData)[3],
      },
      {
        label: Object.keys(rotateData)[4] ? Object.keys(rotateData)[4] : "",
        backgroundColor: "#40DFEF",
        data: Object.values(rotateData)[4],
      },
      {
        label: Object.keys(rotateData)[5] ? Object.keys(rotateData)[5] : "",
        backgroundColor: "#B34180",
        data: Object.values(rotateData)[5],
      },
      {
        label: Object.keys(rotateData)[6] ? Object.keys(rotateData)[6] : "",
        backgroundColor: "#F9E2AF",
        data: Object.values(rotateData)[6],
      },
      {
        label: Object.keys(rotateData)[7] ? Object.keys(rotateData)[7] : "",
        backgroundColor: "#FA9884",
        data: Object.values(rotateData)[7],
      },
      {
        label: Object.keys(rotateData)[8] ? Object.keys(rotateData)[8] : "",
        backgroundColor: "#576CBC",
        data: Object.values(rotateData)[8],
      },
      {
        label: Object.keys(rotateData)[9] ? Object.keys(rotateData)[9] : "",
        backgroundColor: "#A9907E",
        data: Object.values(rotateData)[9],
      },
      {
        label: Object.keys(rotateData)[10] ? Object.keys(rotateData)[10] : "",
        backgroundColor: "#7743DB",
        data: Object.values(rotateData)[10],
      },
      {
        label: Object.keys(rotateData)[11] ? Object.keys(rotateData)[11] : "",
        backgroundColor: "#9ADCFF",
        data: Object.values(rotateData)[11],
      },
      {
        label: Object.keys(rotateData)[12] ? Object.keys(rotateData)[12] : "",
        backgroundColor: "#55B3B1",
        data: Object.values(rotateData)[12],
      },
      {
        label: Object.keys(rotateData)[13] ? Object.keys(rotateData)[13] : "",
        backgroundColor: "#FF7B54",
        data: Object.values(rotateData)[13],
      },      {
        label: Object.keys(rotateData)[13] ? Object.keys(rotateData)[13] : "",
        backgroundColor: "#0E49B5",
        data: Object.values(rotateData)[13],
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
          options={StackedBarChartTimeRangeFilterOptions}
        />
      </StackedBarChartHeader>

      <Bar data={data as any} options={options} style={{ maxHeight: 450 }} />
    </StackedBarChartContainer>
  );
};

export default StackedBarChart;
