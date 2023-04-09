import e from "express";
export function rotateDataForStackedBar(data: any, timeUnit: string) {
  const newData = data;
  let allBranchesInThisData: any = [];
  let allDay = [];

  for (let day in newData) {
    allDay.push(day);
  }

  for (let day in newData) {
    let branchInThisDay = newData[day];
    const allBranchName = branchInThisDay.map(
      (branch: any) => branch.branchName
    );
    for (let branch of allBranchName) {
      if (!allBranchesInThisData.includes(branch)) {
        allBranchesInThisData.push(branch);
      }
    }
  }

  const temp: any = {};

  for (let day in allDay) {
    const key = allDay[day];
    let tmp: any = {};

    for (let branch in newData[key]) {
      if (temp[newData[key][branch].branchName] === undefined) {
        temp[newData[key][branch].branchName] = [];
      }
      const revenue = newData[key][branch].revenue;
      tmp[key] = revenue;

      temp[newData[key][branch].branchName].push(tmp);
      tmp = {};
    }
  }

  let result = _addNull(temp, timeUnit, allDay, allBranchesInThisData);
  _addMissingTime(result, timeUnit);
  // console.log(result);
  return _flatArr(result);
}

function _addNull(
  temp: any,
  timeUnit: string,
  allDay: any,
  allBranchesInThisData: any
) {
  let result: any = {};
  for (let branch in temp) {
    let allUnitTimeInThisBranch = temp[branch];
    const arr = _extractArr(allUnitTimeInThisBranch);

    allDay.forEach((day: any) => {
      if (!arr.includes(day)) {
        let tmp: any = {};
        tmp[day] = null;
        allUnitTimeInThisBranch.push(tmp);
      }
    });

    allUnitTimeInThisBranch = _sort(allUnitTimeInThisBranch, timeUnit);
    result[branch] = allUnitTimeInThisBranch;
  }

  return result;
}

function _addMissingTime(data: any, timeUnit: string) {
  let tmpData = Object.assign({}, data);
  let completedTime: any = [];

  if (timeUnit === "weekday") {
    completedTime = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
  }

  if (timeUnit === "hour") {
    for (let i = 0; i <= 23; i++) {
      completedTime.push(i.toString());
    }
  }

  if (timeUnit === "date") {
    for (let i = 1; i < 31; i++) {
      completedTime.push(i.toString());
    }
  }

  for (let i in tmpData) {
    let keysList: any = [];

    tmpData[i].forEach((e: any) => {
      keysList.push(Object.keys(e)[0]);
    });
    tmpData[i] = keysList;
  }

  for (let time in completedTime) {
    let tmpObj: any = {};
    for (let key in tmpData) {
      if (!tmpData[key].includes(completedTime[time])) {
        tmpObj[completedTime[time]] = null;
        data[key].push(tmpObj);
      }
      tmpObj = {};
    }
  }

  for (let branch in data) {
    let allUnitTimeInThisBranch = data[branch];

    allUnitTimeInThisBranch = _sort(allUnitTimeInThisBranch, timeUnit);
    data[branch] = allUnitTimeInThisBranch;
  }
}

function _extractArr(arr: any) {
  const days = [];

  for (const object of arr) {
    const day = Object.keys(object)[0];
    days.push(day);
  }

  return days;
}

export function _sort(array: any, timeUnit: string) {
  const sortedArray = array.sort((a: any, b: any) => {
    const dayA = Object.keys(a)[0];
    const dayB = Object.keys(b)[0];
    let order: any = [];
    if (timeUnit === "weekday") {
      order = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    }

    if (timeUnit === "hour") {
      for (let i = 0; i <= 23; i++) {
        order.push(i.toString());
      }
    }

    if (timeUnit === "date") {
      for (let i = 1; i < 31; i++) {
        order.push(i.toString());
      }
    }
    return order.indexOf(dayA) - order.indexOf(dayB);
  });

  return sortedArray;
}

function _flatArr(data: any) {
  for (let i in data) {
    let keysList: any = [];
    data[i].forEach((e: any) => {
      keysList.push(Object.values(e)[0]);
    });
    data[i] = keysList;
  }
  return data;
}

// rotateDataForStackedBar(data, "hour");
