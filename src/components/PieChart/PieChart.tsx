import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import "./PieChart.css";
import { requestURL } from "../../common/common";

//doanh thu thuần theo chi nhánh tháng này
export type AllBranchRevenueData = {
  branchId: string;
  branchName: string;
  revenue: number;
  revenueByPercent: number;
};

const PieChart: React.FC = ({}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [branchRevenueData, setBranchRevenueData] = useState<
    AllBranchRevenueData[]
  >([]);

  const [totalRevenueOfDay, setTotalRevenueOfDay] = useState<number>();

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
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: true,
  };
  return (
    <div className="piechart" style={{ height: `240px`, width: `240px` }}>
      <div className="piechart__label">
        {"Doanh thu thuần theo chi nhánh tháng này"}
      </div>
      <Pie data={data} options={options} className="piechart__chart" />
    </div>
  );
};

export default PieChart;
