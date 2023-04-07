import axios from "axios";
import React, { FunctionComponent, useLayoutEffect, useState } from "react";
import { requestURL, WidgetTitle } from "../../common/common";
import { numberWithCommas } from "../../utils/format/format";
import {
  WidgetHeader,
  WidgetPercentage,
  WidgetContainer,
  WidgetLeftSide,
  WidgetRightSide,
  WidgetAmount,
  WidgetLink,
} from "./TopWidget.style";

interface TopWidgetProps {
  type: WidgetTitle;
}

const TopWidget: FunctionComponent<TopWidgetProps> = ({ type }) => {
  let data;

  const [invoiceData, setInvoiceData] = useState();
  const [revenueData, setRevenueData] = useState();

  const fetchRevenueData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/revenue/allRevenue?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setRevenueData(data.data.data);
      });
  };

  const fetchInvoiceData = async () => {
    return await axios
      .get(
        `${requestURL}ftiles/dashboard/invoice/allInvoice?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setInvoiceData(data.data.data);
      });
  };

  useLayoutEffect(() => {
    fetchRevenueData();
    fetchInvoiceData();
  }, []);

  switch (type) {
    case WidgetTitle.TOTAL_INVOICE:
      data = {
        title: invoiceData ? `${invoiceData} hóa đơn` : "0 hóa đơn",
        amount: revenueData ? numberWithCommas(revenueData) : "0",
        link: "Doanh thu",
        icon: null,
      };
      break;
    case WidgetTitle.TOTAL_REQUEST:
      data = {
        title: "0 phiếu",
        amount: 0,
        link: "View all orders",
        icon: null,
      };
      break;
    case WidgetTitle.TODAY_ORDERS:
      data = {
        title: "Số đơn hôm nay",
        amount: 0,
        link: "View net earnings",
        icon: null,
      };
      break;
    case WidgetTitle.RECENT_ACTIVITY:
      data = {
        title: "Hoạt động gần đây",
        amount: 0,
        link: "See details",
        icon: null,
      };
      break;
    default:
      break;
  }

  return (
    <WidgetContainer>
      <WidgetLeftSide>
        <WidgetHeader>{data ? data.title : null}</WidgetHeader>
        <WidgetAmount>{data ? data.amount : null}</WidgetAmount>
        <WidgetLink>{data ? data.link : null}</WidgetLink>
      </WidgetLeftSide>
      <WidgetRightSide>
        <WidgetPercentage>NaN</WidgetPercentage>
      </WidgetRightSide>
    </WidgetContainer>
  );
};

export default TopWidget;
