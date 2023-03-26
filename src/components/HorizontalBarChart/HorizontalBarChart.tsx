import React, { useLayoutEffect, useState } from "react";
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
import axios from "axios";
import { requestURL } from "../../common/common";

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
      display: false,
    },
    title: {
      display: true,
      text: "TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY",
    },
  },
};

const HorizontalBarChart: React.FC = () => {
  const [topProductsData, setTopProductsData] = useState<AllTopProductsData[]>(
    []
  );

  const fetchData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/product/allTopProduct?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000&by=revenue`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setTopProductsData(data.data.data);
      });
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const labels = topProductsData.map((product) => product.productName);

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: topProductsData.map((product) => product.revenue),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default HorizontalBarChart;
