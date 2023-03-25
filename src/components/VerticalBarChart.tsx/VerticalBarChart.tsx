import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "DOANH THU THUẦN THÁNG NÀY",
    },
  },
};

const labels = ["SP1", "SP2", "SP3", "SP4", "SP5", "SP6", "SP7"];

export const data = {
  labels,
  datasets: [
    {
      label: "Doanh thu",
      data: [
        "143000000",
        "234000000",
        "3434000000",
        "456000000",
        "657000000",
        "567000000",
        "534000000",
        "346000000",
        "754000000",
        "984000000",
        "456000000",
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const VerticalBarChart: React.FC = () => {
  return <Bar options={options} data={data} />;
};

export default VerticalBarChart;
