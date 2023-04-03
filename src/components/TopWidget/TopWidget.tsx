import React, { FunctionComponent } from "react";
import { WidgetTitle } from "../../common/common";
import "./TopWidget.style.css";

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
    <div className="widget">
      <div className="left">
        <span className="title">{data ? data.title : null}</span>
        <span className="counter">{amount}</span>
        <span className="link">{data ? data.link : null}</span>
      </div>
      <div className="right">
        <div className="percentage positive">{diff} %</div>
        {data ? data.icon : null}
      </div>
    </div>
  );
};

export default TopWidget;
