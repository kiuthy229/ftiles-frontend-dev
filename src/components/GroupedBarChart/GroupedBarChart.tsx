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
import axios from "axios";
import { requestURL } from "../../common/common";

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
  plugins: {
    title: {
      display: true,
      text: "DOANH THU THUẦN THÁNG NÀY",
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

  const [revenueByDayData, setRevenueByDayData] = useState<AllRevenueStates>(
    {}
  );

  const fetchData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/revenue/allBranchRevenueByTimeUnit?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000&timeUnit=weekday`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setRevenueByDayData(data.data.data);
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  let allBranchesInThisData: any[] = [];
  let allDay = [];

  for (let day in revenueByDayData) {
    allDay.push(day);
  }

  for (let day in revenueByDayData) {
    let branchInThisDay = revenueByDayData[day];
    const allBranchName = branchInThisDay.map(
      (branch: any) => branch.branchName
    );
    for (let branch of allBranchName) {
      if (!allBranchesInThisData.includes(branch)) {
        allBranchesInThisData.push(branch);
      }
    }
  }

  const temp: any = {};

  for (let day in allDay) {
    const key = allDay[day];

    for (let branch in revenueByDayData[key]) {
      if (temp[revenueByDayData[key][branch].branchName] === undefined) {
        temp[revenueByDayData[key][branch].branchName] = [];
      }
      temp[revenueByDayData[key][branch].branchName].push(
        revenueByDayData[key][branch].revenue
      );
    }
  }

  const labels = Object.keys(revenueByDayData).map((revenue) => revenue);

  const data = {
    labels,
    datasets: [
      {
        label: "3. Kho Tổng Miền Nam",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: temp["3. Kho Tổng Miền Nam"],
      },
      {
        label: "Hồ Chí Minh 1 (Đại lý)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        data: temp["Hồ Chí Minh 1 (Đại lý)"],
      },
      {
        label: "Hồ Chí Minh 3",
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        data: temp["Hồ Chí Minh 3"],
      },
      {
        label: "Chi nhánh thuế",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        data: temp["Chi nhánh thuế"],
      },
    ],
  };

  return <Bar data={data} options={options} className="barchart__chart" />;
};

export default BarChart;
