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

export enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
  RESET = "reset",
}

export enum ReviewStatus {
  NEEDS_REVIEW = "Needs review",
  REVIEW_DONE = "Review done",
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

export enum LimitStatusType {
  KEEP_LIMIT = "Keep Limit",
  REDUCE_LIMIT = "Reduce Limit",
  CLOSE_CARD = "Close Card",
}

export type Builder<T> = (overrides?: Partial<T>) => T;

export enum CreditCardProvider {
  NAB = "NAB",
  CBA = "CBA",
}
