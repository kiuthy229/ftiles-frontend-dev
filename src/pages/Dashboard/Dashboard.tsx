import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import ThemeProvider from "../../components/Theme/Theme";
import HorizontalBarChart from "../../components/HorizontalBarChart/HorizontalBarChart";
import PieChart from "../../components/PieChart/PieChart";
import StackedBarChart from "../../components/StackedBarChart/StackedBarChart";
import SideBar from "../../components/SideBar/SideBar";
import TopWidget from "../../components/TopWidget/TopWidget";
import Notification from "../../components/Notification/NotificationItem";

import { widgetList } from "../../common/common";
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
    <ThemeProvider>
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
            <StackedBarChart />
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
    </ThemeProvider>
  );
};

export default Dashboard;
