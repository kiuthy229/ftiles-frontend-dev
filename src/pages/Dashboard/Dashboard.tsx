import React from "react";
import { WidgetTitle } from "../../common/common";
import BarChart from "../../components/GroupedBarChart/GroupedBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart/HorizontalBarChart";
import Navbar from "../../components/Navbar/Navbar";
import Notification from "../../components/Notification/NotificationItem";
import PieChart from "../../components/PieChart/PieChart";
import SideBar from "../../components/SideBar/SideBar";
import TopWidget from "../../components/TopWidget/TopWidget";
import "./Dashboard.style.css";

const Dashboard: React.FC = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <TopWidget type={WidgetTitle.TOTAL_INVOICE} />
          <TopWidget type={WidgetTitle.TOTAL_REQUEST} />
          <TopWidget type={WidgetTitle.TODAY_ORDERS} />
          <TopWidget type={WidgetTitle.RECENT_ACTIVITY} />
        </div>
        <div className="charts">
          <BarChart />
          <PieChart />
        </div>
        <div className="listContainer">
          {/* <div className="listTitle"></div> */}
          <HorizontalBarChart />
        </div>
      </div>
      <div className="activity">
        <Notification />
      </div>
    </div>
  );
};

export default Dashboard;
