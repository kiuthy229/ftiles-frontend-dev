import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

export type BarChartProps = {};

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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: ["143000000", "234000000", "3434000000", "456000000", "657000000", "6557000000", "534000000"],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: ["234000000", "348000000", "345000000", "472000000", "334000000", "356000000", "746000000"],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: ["143000000", "234000000", "3434000000", "456000000", "657000000", "567000000", "534000000"],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 1",
    },
  ],
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

  return <Bar data={data} options={options} className="barchart__chart" />;
};

export default BarChart;
