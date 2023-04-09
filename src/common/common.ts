import { WidgetTitle } from "../types";

export const requestURL = "https://ftiles-backend-dev.ftiles.tech/";

export const widgetList = [WidgetTitle.TOTAL_INVOICE, WidgetTitle.TODAY_ORDERS];

export const STACKED_BAR_CHART_TITLE = "DOANH THU THUẦN THÁNG NÀY";

export const HORIZONTAL_BAR_CHART_TITLE = "TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY";

export const PIE_CHART_TITLE = "DOANH THU THUẦN THEO CHI NHÁNH THÁNG NÀY";

export const StackedBarChartTimeRangeFilterOptions = [
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

export const initialBranchesValue = [
  {
    id: 1000000146,
    branchName: "1. Kho Nhà Máy",
  },
  {
    id: 1000000145,
    branchName: "2. Kho Ngoại Quan",
  },
  {
    id: 1000000114,
    branchName: "3. Kho Tổng Miền Nam",
  },
  {
    id: 1000000204,
    branchName: "4. Kho Củ Chi",
  },
  {
    id: 1000000158,
    branchName: "Chi nhánh thuế",
  },
  {
    id: 1000000202,
    branchName: "Dev Test",
  },
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

export const NOT_FOUND_MESSAGE = ["No data for this branch/ time-range"];

export const LOADING_MESSAGE = ["Loading..."];
