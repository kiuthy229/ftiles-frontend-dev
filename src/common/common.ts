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
