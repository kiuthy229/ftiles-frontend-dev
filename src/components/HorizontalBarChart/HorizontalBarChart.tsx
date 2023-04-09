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
  HorizontalBarChartFilterOptions,
  HORIZONTAL_BAR_CHART_TITLE,
  LOADING_MESSAGE,
  NOT_FOUND_MESSAGE,
  TimeRangeFilterOptions,
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
import { TimeRange } from "../../types";

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
  const [date, setDate] = useState<TimeRange>({
    from: fromLastMonth,
    to: defaultDate.to,
  });
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    HorizontalBarChartFilterOptions[0]
  );
  const [selectedTimeRangeOption, setSelectedTimeRangeOption] = useState(
    TimeRangeFilterOptions[3]
  );
  const [filterOption, setFilterOption] = useState<string>(
    HorizontalBarChartFilterOptions[0].value
  );
  let topProductsData: AllTopProductsData[] = [];
  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);

  topProductsData = useMemo(() => apiData, [apiData]);

  useEffect(() => {
    if (url.includes("&by=revenue" || "&by=quantity")) {
      setUrl(
        url.replace("&by=revenue" || "&by=quantity", `&by=${filterOption}`)
      );
    }
  }, [filterOption]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/product/allTopProduct?fromDate=${date.from}&toDate=${date.to}&by=${filterOption}&branchIds=${branchData}`
    );
  }, [branchData]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/product/allTopProduct?fromDate=${date.from}&toDate=${
        date.to
      }&by=${filterOption}${
        branchData && branchData.length > 0 ? `&branchIds=${branchData}` : ``
      }`
    );
  }, [date]);

  useEffect(() => {
    switch (selectedTimeRangeOption.value) {
      case "today": {
        setDate({
          from: defaultDate.from,
          to: defaultDate.to,
        });
        break;
      }
      case "yesterday": {
        setDate({
          from:
            new Date(new Date().setDate(new Date().getDate() - 1))
              .toJSON()
              .substring(0, 11) + "00:00:00.0000000",
          to: new Date().toJSON().substring(0, 11) + "00:00:00.0000000",
        });
        break;
      }
      case "last_week": {
        setDate({
          from:
            new Date(new Date().setDate(new Date().getDate() - 7))
              .toJSON()
              .substring(0, 11) + "00:00:00.0000000",
          to: defaultDate.to,
        });
        break;
      }
      case "this_month": {
        setDate({
          from: new Date(new Date().setDate(new Date().getDate() - 30))
            .toJSON()
            .replace(/.$/, "0000"),
          to: defaultDate.to,
        });
        break;
      }
      case "last_month": {
        setDate({
          from: new Date(new Date().setDate(new Date().getDate() - 60))
            .toJSON()
            .replace(/.$/, "0000"),
          to: new Date(new Date().setDate(new Date().getDate() - 30))
            .toJSON()
            .replace(/.$/, "0000"),
        });
        break;
      }
      case "last_quarter": {
        setDate({
          from: new Date(new Date().setDate(new Date().getDate() - 90))
            .toJSON()
            .replace(/.$/, "0000"),
          to: new Date().toJSON().replace(/.$/, "0000"),
        });
        break;
      }
      default:
        break;
    }
  }, [selectedTimeRangeOption]);

  const handleChangeFilterOption = (e: { value: string; label: string }) => {
    setSelectedFilterOption(e);
    setFilterOption(e.value);
  };

  const handleChangeTimeRangeOption = (e: { value: string; label: string }) => {
    setSelectedTimeRangeOption(e);
  };

  const labels = loading
    ? LOADING_MESSAGE
    : topProductsData && topProductsData.length > 0
    ? topProductsData.map((product) => wrapLabelAxis(product.productName, 20))
    : NOT_FOUND_MESSAGE;

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: loading
          ? LOADING_MESSAGE
          : topProductsData && topProductsData.length > 0
          ? topProductsData.map((product) => product.revenue)
          : NOT_FOUND_MESSAGE,
        backgroundColor: loading
          ? "#8994a6"
          : topProductsData
          ? "#FFB26B"
          : "#8994a6",
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
          defaultValue={selectedFilterOption}
          onChange={(event: any) => handleChangeFilterOption(event)}
          options={HorizontalBarChartFilterOptions}
        />
        <StyledSelect
          defaultValue={selectedTimeRangeOption}
          onChange={(e: any) => handleChangeTimeRangeOption(e)}
          options={TimeRangeFilterOptions}
        />
      </HorizontalBarChartHeader>
      <StyledHorizontalBarChart options={options} data={data as any} />
    </HorizontalBarChartContainer>
  );
};

export default HorizontalBarChart;
