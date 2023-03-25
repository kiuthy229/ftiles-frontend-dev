import React from "react";
import BarChart from "../../components/GroupedBarChart/GroupedBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart/HorizontalBarChart";
import PieChart from "../../components/PieChart/PieChart";
import VerticalBarChart from "../../components/VerticalBarChart.tsx/VerticalBarChart";

const Dashboard: React.FC = () => {
  return (
    <>
      <PieChart size={240} label={"Doanh thu thuần theo chi nhánh tháng này"} />
      <BarChart />
      <HorizontalBarChart />
      <VerticalBarChart />
    </>
  );
};

export default Dashboard;
