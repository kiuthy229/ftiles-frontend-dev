import { WidgetTitle } from "../types";

export const requestURL = "https://ftiles-backend-dev.ftiles.tech/";

export const widgetList = [WidgetTitle.TOTAL_INVOICE, WidgetTitle.TODAY_ORDERS];

export const STACKED_BAR_CHART_TITLE = "DOANH THU THUẦN THÁNG NÀY";

export const HORIZONTAL_BAR_CHART_TITLE = "TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY";

export const PIE_CHART_TITLE = "DOANH THU THUẦN THEO CHI NHÁNH THÁNG NÀY";

export const StackedBarChartFilterOptions = [
  { value: "weekday", label: "Theo thứ" },
  { value: "date", label: "Theo ngày" },
  { value: "hour", label: "Theo giờ" },
];

export const HorizontalBarChartFilterOptions = [
  { value: "revenue", label: "Theo doanh thu" },
  { value: "quantity", label: "Theo số lượng" },
];

export const TimeRangeFilterOptions = [
  { value: "today", label: "Hôm nay" },
  { value: "yesterday", label: "Hôm qua" },
  { value: "last_week", label: "7 ngày qua" },
  { value: "this_month", label: "Tháng này" },
  { value: "last_month", label: "Tháng trước" },
  { value: "last_quarter", label: "Qúy trước" },
];

export const fromLastMonth =
  new Date(new Date().setDate(new Date().getDate() - 30))
    .toJSON()
    .substring(0, 11) + "23:59:00.0000000";

export const defaultDate = {
  from:
    new Date(new Date().setDate(new Date().getDate() - 1))
      .toJSON()
      .substring(0, 11) + "23:59:00.0000000",
  to: new Date().toJSON().substring(0, 11) + "23:59:00.0000000",
};

export const NOT_FOUND_MESSAGE = ["Hiện tại chưa có dữ liệu này"];

export const LOADING_MESSAGE = ["Đang tải..."];

export const BackgroundColors = [
  "#009FBD",
  "#FCE22A",
  "#0081C9",
  "#AACB73",
  "#40DFEF",
  "#B34180",
  "#F9E2AF",
  "#FA9884",
  "#576CBC",
  "#A9907E",
  "#7743DB",
  "#9ADCFF",
  "#55B3B1",
  "#FF7B54",
  "#0E49B5",
  "#FFD56B",
  "#0E49B5",
  "#54E346",
  "#E05297",
  "#FF449F",
  "#FFB26B",
  "#01C5C4",
  "#40A8C4",
  "#91D18B",
  "#E8505B",
  "#12947F",
  "#5FDDE5",
  "#EA6227",
  "649D66",
];

export const DisabledColor = ["#EEEEEE"];
