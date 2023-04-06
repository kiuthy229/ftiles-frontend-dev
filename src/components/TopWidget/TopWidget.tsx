import React, { FunctionComponent } from "react";
import { WidgetTitle } from "../../common/common";
import {
  WidgetHeader,
  WidgetPercentage,
  WidgetContainer,
  WidgetSide,
  WidgetAmount,
  WidgetLink,
} from "./TopWidget.style";

interface TopWidgetProps {
  type: WidgetTitle;
}

const TopWidget: FunctionComponent<TopWidgetProps> = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case WidgetTitle.TOTAL_INVOICE:
      data = {
        title: "71 hóa đơn",
        isMoney: false,
        link: "See all invoices",
        icon: null,
      };
      break;
    case WidgetTitle.TOTAL_REQUEST:
      data = {
        title: "0 phiếu",
        isMoney: false,
        link: "View all orders",
        icon: null,
      };
      break;
    case WidgetTitle.TODAY_ORDERS:
      data = {
        title: "Số đơn hôm nay",
        isMoney: true,
        link: "View net earnings",
        icon: null,
      };
      break;
    case WidgetTitle.RECENT_ACTIVITY:
      data = {
        title: "Hoạt động gần đây",
        isMoney: true,
        link: "See details",
        icon: null,
      };
      break;
    default:
      break;
  }

  return (
    <WidgetContainer>
      <WidgetSide>
        <WidgetHeader>{data ? data.title : null}</WidgetHeader>
        <WidgetAmount>{amount}</WidgetAmount>
        <WidgetLink>{data ? data.link : null}</WidgetLink>
      </WidgetSide>
      <WidgetSide>
        <WidgetPercentage>{diff} %</WidgetPercentage>
      </WidgetSide>
    </WidgetContainer>
  );
};

export default TopWidget;
