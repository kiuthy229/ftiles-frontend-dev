import React, { useContext, useEffect, useMemo, useState } from "react";

import { rotateDataForStackedBar } from "../../utils/rotateDataHelper";
import { dates, hours, week_days } from "../../utils/timeRangeLabelsData";
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
  NOT_FOUND_MESSAGE,
  BackgroundColors,
  StackedBarChartFilterOptions,
  STACKED_BAR_CHART_TITLE,
  TimeRangeFilterOptions,
} from "../../common";
import {
  StackedBarChartContainer,
  StackedBarChartHeader,
  StackedBarChartTitle,
  StyledSelect,
} from "./StackedBarChart.style";
import { MyContext } from "../Theme/Theme";
import { useAxios } from "../../common/useAxios";
import { selectTimeRange } from "../../utils/selectTimeRange";
import { TimeRange } from "../../types";

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
  const [date, setDate] = useState<TimeRange>({
    from: fromLastMonth,
    to: defaultDate.to,
  });
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    StackedBarChartFilterOptions[0]
  );
  const [selectedTimeRangeOption, setSelectedTimeRangeOption] = useState(
    TimeRangeFilterOptions[3]
  );
  let rotateData: AllRevenueStates = {};
  const [timeUnit, setTimeUnit] = useState<string>(
    StackedBarChartFilterOptions[0].value
  );
  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);

  rotateData = useMemo(() => rotateDataForStackedBar(apiData, timeUnit), [
    apiData,
    timeUnit,
  ]);

  useEffect(() => {
    console.log(
      Object.keys(rotateData).filter((data, id) => Object.keys(rotateData)[id])
    );
  }, [rotateData]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=${
        date.from
      }&toDate=${date.to}&timeUnit=${timeUnit}${
        branchData && branchData.length > 0 ? `&branchIds=${branchData}` : ``
      }`
    );
  }, [timeUnit]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=${
        date.from
      }&toDate=${date.to}${
        timeUnit ? `&timeUnit=${timeUnit}` : ``
      }&branchIds=${branchData}`
    );
  }, [branchData]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=${
        date.from
      }&toDate=${date.to}${timeUnit ? `&timeUnit=${timeUnit}` : ``}${
        branchData && branchData.length > 0 ? `&branchIds=${branchData}` : ``
      }`
    );
  }, [date]);

  useEffect(() => {
    setDate(selectTimeRange(selectedTimeRangeOption.value));
  }, [selectedTimeRangeOption]);

  const handleChangeFilterOption = (event: {
    value: string;
    label: string;
  }) => {
    setSelectedFilterOption(event);
    setTimeUnit(event.value);
  };

  const handleChangeTimeRangeOption = (e: { value: string; label: string }) => {
    setSelectedTimeRangeOption(e);
  };

  let labels = loading
    ? LOADING_MESSAGE
    : apiData && timeUnit
    ? timeUnit === StackedBarChartFilterOptions[0].value
      ? week_days
      : timeUnit === StackedBarChartFilterOptions[1].value
      ? dates
      : hours
    : [NOT_FOUND_MESSAGE];

  const data = {
    labels,
    datasets: loading
      ? []
      : rotateData
      ? Object.entries(rotateData).map((data, id) => ({
          label: data[0],
          data: data[1],
          backgroundColor: BackgroundColors[id],
        }))
      : [],
  };

  return (
    <StackedBarChartContainer>
      <StackedBarChartHeader>
        <StackedBarChartHeader>
          <StackedBarChartTitle>{STACKED_BAR_CHART_TITLE}</StackedBarChartTitle>
          <StyledSelect
            defaultValue={selectedFilterOption}
            onChange={(event: any) => handleChangeFilterOption(event)}
            options={StackedBarChartFilterOptions}
          />
        </StackedBarChartHeader>

        <div>
          <StyledSelect
            defaultValue={selectedTimeRangeOption}
            onChange={(e: any) => handleChangeTimeRangeOption(e)}
            options={TimeRangeFilterOptions}
          />
        </div>
      </StackedBarChartHeader>

      <Bar data={data as any} options={options} style={{ maxHeight: 450 }} />
    </StackedBarChartContainer>
  );
};

export default StackedBarChart;
