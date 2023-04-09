import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultDate, fromLastMonth } from "../../common/common";
import { useAxios } from "../../common/useAxios";
import { WidgetTitle } from "../../types";
import { numberWithCommas } from "../../utils/format";
import { MyContext } from "../Theme/Theme";
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

const allRevenueUrl = `ftiles/dashboard/revenue/allRevenue?fromDate=${fromLastMonth}&toDate=${defaultDate.to}`;
const allInvoiceUrl = `ftiles/dashboard/invoice/allInvoice?fromDate=${fromLastMonth}&toDate=${defaultDate.to}`;

const TopWidget: FunctionComponent<TopWidgetProps> = ({ type }) => {
  let data;

  const [revenueDataUrl, setRevenueDataUrl] = useState<string>(allRevenueUrl);
  const [invoiceDataUrl, setInvoiceDataUrl] = useState<string>(allInvoiceUrl);
  const [invoiceData, setInvoiceData] = useState<number>();
  const [revenueData, setRevenueData] = useState<number>();
  const { branchData } = useContext<any>(MyContext);
  // const [branch, setBranch] = useState<number[]>(initialBranchesList);
  let {
    apiData: apiRevenueData,
    loading: allRevenueDataLoading,
  }: any = useAxios(revenueDataUrl);
  let {
    apiData: apiInvoiceData,
    loading: allInvoiceDataLoading,
  }: any = useAxios(invoiceDataUrl);

  useEffect(() => {
    setInvoiceData(apiInvoiceData);
    setRevenueData(apiRevenueData);
  }, [apiInvoiceData, apiRevenueData]);

  useEffect(() => {
    setRevenueDataUrl(
      `ftiles/dashboard/revenue/allRevenue?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&branchIds=${branchData}`
    );
    setInvoiceDataUrl(
      `ftiles/dashboard/invoice/allInvoice?fromDate=${fromLastMonth}&toDate=${defaultDate.to}&branchIds=${branchData}`
    );
  }, [branchData]);

  switch (type) {
    case WidgetTitle.TOTAL_INVOICE:
      data = {
        title: allInvoiceDataLoading
          ? "0 hóa đơn"
          : invoiceData
          ? `${invoiceData} hóa đơn`
          : "0 hóa đơn",
        amount: allRevenueDataLoading
          ? "0"
          : revenueData
          ? numberWithCommas(revenueData)
          : "0",
        link: "Doanh thu",
        icon: null,
      };
      break;

    case WidgetTitle.TODAY_ORDERS:
      data = {
        title: "Số đơn hôm nay",
        amount: allInvoiceDataLoading ? 0 : invoiceData ? `${invoiceData}` : 0,
        link: "Xem tất cả đơn",
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
