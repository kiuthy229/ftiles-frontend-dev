import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import {
  PieChartContainer,
  PieChartTitle,
  PieChartTitleContainer,
  StyledPieSelect,
} from "./PieChart.style";
import { MyContext } from "../Theme/Theme";
import { useAxios } from "../../common/useAxios";
import {
  defaultDate,
  fromLastMonth,
  LOADING_MESSAGE,
  NOT_FOUND_MESSAGE,
  PIE_CHART_TITLE,
  TimeRangeFilterOptions,
} from "../../common/common";
import { TimeRange } from "../../types";

//doanh thu thuần theo chi nhánh tháng này
export type AllBranchRevenueData = {
  allInvoiceRevenueByEachBranch: BranchData;
  totalRevenueOfDay: number;
};

type BranchData = {
  branchId: string;
  branchName: string;
  revenue: number;
  revenueByPercent: number;
};

const options = {
  animation: false as false,
  responsive: true,
  pieceLabel: {
    render: "label",
    arc: true,
    fontColor: "#000",
    position: "outside",
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom" as "bottom",
      align: "end" as "end",
    },
    outlabels: {
      text: "%l %p",
      color: "black",
      stretch: 45,
      font: {
        resizable: true,
        minSize: 12,
        maxSize: 18,
      },
    },
  },
  maintainAspectRatio: true,
};

const defaultUrl = `ftiles/dashboard/revenue/allBranchRevenue?fromDate=${fromLastMonth}&toDate=${defaultDate.to}`;

const PieChart: React.FC = ({}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [url, setUrl] = useState<string>(defaultUrl);
  let { apiData, loading }: any = useAxios(url);
  const { branchData } = useContext<any>(MyContext);
  const [selectedOption, setSelectedOption] = useState(
    TimeRangeFilterOptions[3]
  );
  const [date, setDate] = useState<TimeRange>({
    from: defaultDate.from,
    to: defaultDate.to,
  });

  useLayoutEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenue?fromDate=${date.from}&toDate=${date.to}&branchIds=${branchData}`
    );
  }, [branchData]);

  useEffect(() => {
    setUrl(
      `ftiles/dashboard/revenue/allBranchRevenue?fromDate=${date.from}&toDate=${
        date.to
      }${branchData && branchData.length > 0 ? `&branchIds=${branchData}` : ``}`
    );
  }, [date]);

  useEffect(() => {
    switch (selectedOption.value) {
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
            .replace(/.$/, "000"),
          to: defaultDate.to,
        });
        break;
      }
      case "last_month": {
        setDate({
          from: new Date(new Date().setDate(new Date().getDate() - 60))
            .toJSON()
            .replace(/.$/, "000"),
          to: new Date(new Date().setDate(new Date().getDate() - 30))
            .toJSON()
            .replace(/.$/, "000"),
        });
        break;
      }
      case "last_quarter": {
        setDate({
          from: new Date(new Date().setDate(new Date().getDate() - 90))
            .toJSON()
            .replace(/.$/, "000"),
          to: new Date().toJSON().replace(/.$/, "000"),
        });
        break;
      }
      default:
        break;
    }
  }, [selectedOption]);

  const handleChangeFilterOption = (e: { value: string; label: string }) => {
    setSelectedOption(e);
  };

  const data = {
    labels: loading
      ? LOADING_MESSAGE
      : apiData && apiData.allInvoiceRevenueByEachBranch.length !== 0
      ? apiData.allInvoiceRevenueByEachBranch.map(
          (branch: BranchData) => branch.branchName
        )
      : NOT_FOUND_MESSAGE,
    datasets: [
      {
        label: "",
        data: loading
          ? [100]
          : apiData && apiData.allInvoiceRevenueByEachBranch.length !== 0
          ? apiData.allInvoiceRevenueByEachBranch.map(
              (branch: BranchData) => branch.revenue
            )
          : [100],
        backgroundColor: [
          "#FFD56B",
          "#0E49B5",
          "#54E346",
          "#E05297",
          "#FF449F",
          "#FFB26B",
          "#01C5C4",
          "#40A8C4",
          "#91D18B",
          "#E8505B",
          "#12947F",
          "#5FDDE5",
          "#EA6227",
          "649D66",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <PieChartContainer>
      <PieChartTitleContainer>
        <PieChartTitle>{PIE_CHART_TITLE}</PieChartTitle>
        <StyledPieSelect
          defaultValue={selectedOption}
          onChange={(e: any) => handleChangeFilterOption(e)}
          options={TimeRangeFilterOptions}
        />
      </PieChartTitleContainer>

      <Pie
        data={data}
        options={options}
        style={{ width: 320, maxHeight: 320 }}
      />
    </PieChartContainer>
  );
};

export default PieChart;
