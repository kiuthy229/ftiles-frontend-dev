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
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY",
    },
  },
};

const labels = [
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
  "Gạch Ftiles 600x1200 1M62007",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        "149000000",
        "234000000",
        "343400000",
        "456000000",
        "650000700",
        "567000000",
        "534000000",
        "346000000",
        "754000000",
        "984000000",
        "456000000",
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const HorizontalBarChart: React.FC = () => {
  return <Bar options={options} data={data} />;
};

export default HorizontalBarChart;
