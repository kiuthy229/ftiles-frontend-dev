import { NavigationPages } from "../store/navigation/navigationSlice";

export interface Doublet<T1, T2> {
  label: T1;
  value: T2;
}

export interface PageInfo {
  pageId: NavigationPages;
  pageTitle: string;
  navigationLabel: string;
}

export interface Triplet {
  key: string;
  label: string;
  value: string;
}
export interface Validation {
  name: string;
  message: string;
  expression?: any;
  depends?: string[];
}

export enum ErrorCode {
  BAD_USER_INPUT = "BAD_USER_INPUT",
}

export enum FormMessageVariant {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

export type Builder<T> = (overrides?: Partial<T>) => T;

export enum WidgetTitle {
  TOTAL_INVOICE = "total_invoice",
  TODAY_ORDERS = "today_orders",
}

export enum EVENT_TYPE {
  SELL = "Bán đơn hàng",
  BUY = "Đặt hàng",
}

export type TimeRange = {
  from: string;
  to: string;
};
