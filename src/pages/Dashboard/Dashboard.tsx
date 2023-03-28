import React from "react";
import BarChart from "../../components/GroupedBarChart/GroupedBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart/HorizontalBarChart";
import Notification from "../../components/Notification/NotificationItem";
import PieChart from "../../components/PieChart/PieChart";
import VerticalBarChart from "../../components/VerticalBarChart.tsx/VerticalBarChart";

const Dashboard: React.FC = () => {
  return (
    <>
      <PieChart />
      <BarChart />
      <HorizontalBarChart />
      <Notification/>
    </>
  );
};

export default Dashboard;
