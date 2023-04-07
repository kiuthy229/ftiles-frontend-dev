export const requestURL = "https://ftiles-backend-dev.ftiles.tech/";

export enum WidgetTitle {
  TOTAL_INVOICE = "total_invoice",
  TOTAL_REQUEST = "total_request",
  TODAY_ORDERS = "today_orders",
  RECENT_ACTIVITY = "recent_activity",
}

export const widgetList = [
  WidgetTitle.TOTAL_INVOICE,
  WidgetTitle.TOTAL_REQUEST,
  WidgetTitle.TODAY_ORDERS,
  WidgetTitle.RECENT_ACTIVITY,
];

export const stackedBarChartTitle = "DOANH THU THUẦN THÁNG NÀY";

export const horizontalBarChartTitle = "TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY";

export const stackedBarChartFilterOptions = [
  { value: "weekday", label: "Theo thứ" },
  { value: "date", label: "Theo ngày" },
  { value: "hour", label: "Theo giờ" },
];

export const horizontalBarChartFilterOptions = [
  { value: "revenue", label: "Theo revenue" },
  { value: "quantity", label: "Theo quantity" },
];

export const initialBranchesList = [
  1000000145,
  1000000114,
  1000000158,
  1261039,
  1000000115,
  1000000131,
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
