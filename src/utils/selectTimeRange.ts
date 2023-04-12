import { defaultDate, fromLastMonth } from "../common";
import { TimeRange } from "../types";

export const selectTimeRange = (selectedTimeRangeOptionValue: string) => {
  let date: TimeRange = { from: fromLastMonth, to: defaultDate.to };
  switch (selectedTimeRangeOptionValue) {
    case "today": {
      date = {
        from: defaultDate.from,
        to: defaultDate.to,
      };
      break;
    }
    case "yesterday": {
      date = {
        from:
          new Date(new Date().setDate(new Date().getDate() - 1))
            .toJSON()
            .substring(0, 11) + "00:00:00.0000000",
        to: new Date().toJSON().substring(0, 11) + "00:00:00.0000000",
      };
      break;
    }
    case "last_week": {
      date = {
        from:
          new Date(new Date().setDate(new Date().getDate() - 7))
            .toJSON()
            .substring(0, 11) + "00:00:00.0000000",
        to: defaultDate.to,
      };
      break;
    }
    case "this_month": {
      date = {
        from: new Date(new Date().setDate(new Date().getDate() - 30))
          .toJSON()
          .replace(/.$/, "0000"),
        to: defaultDate.to,
      };
      break;
    }
    case "last_month": {
      date = {
        from: new Date(new Date().setDate(new Date().getDate() - 60))
          .toJSON()
          .replace(/.$/, "0000"),
        to: new Date(new Date().setDate(new Date().getDate() - 30))
          .toJSON()
          .replace(/.$/, "0000"),
      };
      break;
    }
    case "last_quarter": {
      date = {
        from: new Date(new Date().setDate(new Date().getDate() - 90))
          .toJSON()
          .replace(/.$/, "0000"),
        to: new Date().toJSON().replace(/.$/, "0000"),
      };
      break;
    }
    default:
      break;
  }

  return date;
};
