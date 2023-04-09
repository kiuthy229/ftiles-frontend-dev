export const requestURL = "https://ftiles-backend-dev.ftiles.tech/";

export enum WidgetTitle {
  TOTAL_INVOICE = "total_invoice",
  TODAY_ORDERS = "today_orders",
}

export const widgetList = [WidgetTitle.TOTAL_INVOICE, WidgetTitle.TODAY_ORDERS];

export enum EVENT_TYPE {
  SELL = "Bán đơn hàng",
  BUY = "Đặt hàng",
}

export const STACKED_BAR_CHART_TITLE = "DOANH THU THUẦN THÁNG NÀY";

export const HORIZONTAL_BAR_CHART_TITLE = "TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY";

export const PIE_CHART_TITLE = "DOANH THU THUẦN THEO CHI NHÁNH THÁNG NÀY";

export const stackedBarChartFilterOptions = [
  { value: "weekday", label: "Theo thứ" },
  { value: "date", label: "Theo ngày" },
  { value: "hour", label: "Theo giờ" },
];

export const horizontalBarChartFilterOptions = [
  { value: "revenue", label: "Theo revenue" },
  { value: "quantity", label: "Theo quantity" },
];

export const pieChartFilterOptions = [
  { value: "today", label: "Hôm nay" },
  { value: "yesterday", label: "Hôm qua" },
  { value: "last_week", label: "7 ngày qua" },
  { value: "this_month", label: "Tháng này" },
  { value: "last_month", label: "Tháng trước" },
  { value: "last_quarter", label: "Qúy trước" },
];

export const branches = [
  1000000146,
  1000000145,
  1000000114,
  1000000204,
  1000000158,
  1000000202,
  1261039,
  1000000201,
  1000000182,
  1000000160,
  1000000178,
  1000000161,
  1000000183,
  1000000180,
  1000000181,
  1000000179,
  1000000159,
  1000000184,
  1000000142,
  1000000115,
  1000000136,
  1000000131,
  1000000198,
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
