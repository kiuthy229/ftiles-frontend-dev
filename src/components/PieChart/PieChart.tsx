import React, { useLayoutEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { requestURL } from "../../common/common";
import {
  PieChartContainer,
  PieChartTitle,
  PieChartTitleContainer,
} from "./PieChart.style";
import axios from "axios";

//doanh thu thuần theo chi nhánh tháng này
export type AllBranchRevenueData = {
  branchId: string;
  branchName: string;
  revenue: number;
  revenueByPercent: number;
};

let initialValue: AllBranchRevenueData = {
  branchId: "null",
  branchName: "null",
  revenue: 1100,
  revenueByPercent: 0,
};

const PieChart: React.FC = ({}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [branchRevenueData, setBranchRevenueData] = useState<
    AllBranchRevenueData[]
  >([initialValue]);

  const [_, setTotalRevenueOfDay] = useState<number>();

  const fetchData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/revenue/allBranchRevenue?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setBranchRevenueData(data.data.data.allInvoiceRevenueByEachBranch);
        setTotalRevenueOfDay(data.data.data.totalRevenueOfDay);
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const data = {
    labels: branchRevenueData.map((branch) => branch.branchName),
    datasets: [
      {
        label: "",
        data: branchRevenueData.map((branch) => branch.revenue),
        backgroundColor: [
          "#C6C7F8",
          "#95A4FC",
          "#BAEDBD",
          "#FEE4CD",
          "#EDBABA",
          "#D8BCDC",
          "#4C81D0",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    pieceLabel: {
      render: "label",
      arc: true,
      fontColor: "#000",
      position: "outside",
    },
    plugins: {
      legend: { display: false },
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
  return (
    <PieChartContainer>
      <PieChartTitleContainer>
        <PieChartTitle>DOANH THU THUẦN THEO CHI NHÁNH THÁNG NÀY</PieChartTitle>
      </PieChartTitleContainer>
      <Pie data={data} options={options} />
    </PieChartContainer>
  );
};

export default PieChart;
