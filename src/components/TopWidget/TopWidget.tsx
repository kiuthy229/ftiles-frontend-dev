import axios from "axios";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  initialBranchesList,
  requestURL,
  WidgetTitle,
} from "../../common/common";
import { numberWithCommas } from "../../utils/format/format";
import { MyContext } from "../Theme";
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

  const [invoiceData, setInvoiceData] = useState<number>();
  const [revenueData, setRevenueData] = useState<number>();
  const { branchData } = useContext<any>(MyContext);
  const [branch, setBranch] = useState<number[]>(initialBranchesList);

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
        `${requestURL}ftiles/dashboard/invoice/allInvoice?fromDate=2023-02-01T00:00:00.0000000&toDate=2023-02-28T23:59:00.0000000&branchIds=${branch}`,
        { data: { method: "HEAD", mode: "no-cors" } }
      )
      .then((data: any) => {
        setInvoiceData(data.data.data);
      });
  };

  useLayoutEffect(() => {
    fetchRevenueData();
    fetchInvoiceData();
  }, [branch]);

  useEffect(() => {
    setInvoiceData(0);
    setBranch(branchData);
  }, [branchData]);

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
        link: "Xem tất cả phiếu",
        icon: null,
      };
      break;
    case WidgetTitle.TODAY_ORDERS:
      data = {
        title: "Số đơn hôm nay",
        amount: 0,
        link: "Xem tất cả đơn",
        icon: null,
      };
      break;
    case WidgetTitle.RECENT_ACTIVITY:
      data = {
        title: "Hoạt động gần đây",
        amount: 0,
        link: "Xem chi tiết",
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
