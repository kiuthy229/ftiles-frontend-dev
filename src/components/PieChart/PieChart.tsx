import React from "react";
import "./PieChart.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

export type PieChartProps = {
  size?: number;
  label?: string;
};

const PieChart: React.FC<PieChartProps> = ({ size = 240, label }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [""],
    datasets: [
      {
        label: "",
        data: [13568, 56024],
        backgroundColor: ["#FF993B", "#27AEF9"],
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
    <div
      className="piechart"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <div className="piechart__label">{label}</div>
      <Pie data={data} options={options} className="piechart__chart" />
    </div>
  );
};

export default PieChart;
