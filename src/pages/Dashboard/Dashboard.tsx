import React from "react";
import { widgetList, WidgetTitle } from "../../common/common";
import BarChart from "../../components/StackedBarChart/StackedBarChart";
import HorizontalBarChart from "../../components/HorizontalBarChart/HorizontalBarChart";
import Navbar from "../../components/Navbar/Navbar";
import Notification from "../../components/Notification/NotificationItem";
import PieChart from "../../components/PieChart/PieChart";
import SideBar from "../../components/SideBar/SideBar";
import TopWidget from "../../components/TopWidget/TopWidget";
import {
  ActivitiesContainer,
  BottomContainer,
  ChartsContainer,
  Home,
  HomeContainer,
  WidgetsContainer,
} from "./Dashboard.style";

const Dashboard: React.FC = () => {
  return (
    <Home>
      <SideBar />
      <HomeContainer>
        <Navbar />
        <WidgetsContainer>
          {widgetList.map((widget, id) => (
            <TopWidget type={widget} key={id} />
          ))}
        </WidgetsContainer>
        <ChartsContainer>
          <BarChart />
          <PieChart />
        </ChartsContainer>
        <BottomContainer>
          <HorizontalBarChart />
        </BottomContainer>
      </HomeContainer>
      <ActivitiesContainer>
        <Notification />
      </ActivitiesContainer>
    </Home>
  );
};

export default Dashboard;
