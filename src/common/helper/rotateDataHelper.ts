import e from "express";
export const sampleData = {
  data: {
    "8": [
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 3065600,
        invoices: ["HD000140"],
        revenueByPercent: 0,
      },
    ],
    "9": [
      {
        branchId: "1000000114",
        branchName: "3. Kho Tổng Miền Nam",
        revenue: 5469768,
        invoices: ["HD000258", "HD000256"],
        revenueByPercent: 0.77,
      },
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: ["HD000257"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 1670400,
        invoices: ["HDD_TH000005"],
        revenueByPercent: 0.23,
      },
    ],
    "10": [
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 235071520,
        invoices: [
          "HD000178",
          "HD000177",
          "HD000176",
          "HD000175",
          "HD000174",
          "HD000173",
          "HD000172",
          "HD000155",
        ],
        revenueByPercent: 0.02,
      },
      {
        branchId: "1000000145",
        branchName: "2. Kho Ngoại Quan",
        revenue: 13690300000,
        invoices: ["HD000187"],
        revenueByPercent: 0.98,
      },
    ],
    "11": [
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: ["HD000191", "HD000190", "HD000136.01"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 0,
        invoices: ["HD000157.01"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000158",
        branchName: "Chi nhánh thuế",
        revenue: 504601350,
        invoices: ["HD000260"],
        revenueByPercent: 1,
      },
    ],
    "12": [
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: ["HD000165"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 93066800,
        invoices: ["HD000158", "HD000141"],
        revenueByPercent: 1,
      },
    ],
    "13": [
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: ["HD000179", "HD000168", "HD000167", "HD000166"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 131160000,
        invoices: ["HD000137"],
        revenueByPercent: 1,
      },
    ],
    "14": [
      {
        branchId: "1000000114",
        branchName: "3. Kho Tổng Miền Nam",
        revenue: 15919536,
        invoices: ["HD000270", "HD000268", "HD000266", "HD000264", "HD000262"],
        revenueByPercent: 0.14,
      },
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: [
          "HD000271",
          "HD000269",
          "HD000265",
          "HD000263",
          "HD000261",
          "HD000181.01",
          "HD000180",
          "HD000169",
        ],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 100440000,
        invoices: ["HD000188", "HD000185"],
        revenueByPercent: 0.86,
      },
    ],
    "15": [
      {
        branchId: "1000000114",
        branchName: "3. Kho Tổng Miền Nam",
        revenue: 7556904,
        invoices: ["HD000242", "HD000241"],
        revenueByPercent: 0.08,
      },
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: ["HD000171", "HD000170"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 90000000,
        invoices: ["HD000183", "HD000182"],
        revenueByPercent: 0.92,
      },
    ],
    "16": [
      {
        branchId: "1000000114",
        branchName: "3. Kho Tổng Miền Nam",
        revenue: 20340312,
        invoices: [
          "HD000272.01",
          "HD000252",
          "HD000250",
          "HD000248",
          "HD000246",
          "HD000244",
        ],
        revenueByPercent: 0.27,
      },
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: [
          "HD000253",
          "HD000251",
          "HD000249",
          "HD000247",
          "HD000245.01",
          "HD000240.01",
          "HD000243",
        ],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 54736200,
        invoices: ["HD000139"],
        revenueByPercent: 0.73,
      },
    ],
    "17": [
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 22182400,
        invoices: ["HD000186", "HD000184"],
        revenueByPercent: 0,
      },
    ],
    "18": [
      {
        branchId: "1261039",
        branchName: "Dev Test Kho Tổng",
        revenue: 1100,
        invoices: ["HD000239"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000114",
        branchName: "3. Kho Tổng Miền Nam",
        revenue: 55713000,
        invoices: ["HD000229"],
        revenueByPercent: 0.44,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 71050000,
        invoices: ["HD000231"],
        revenueByPercent: 0.56,
      },
    ],
    "20": [
      {
        branchId: "1000000114",
        branchName: "3. Kho Tổng Miền Nam",
        revenue: 13170000,
        invoices: ["HD000254"],
        revenueByPercent: 0.13,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 90000000,
        invoices: ["HD000255.01"],
        revenueByPercent: 0.87,
      },
    ],
    "22": [
      {
        branchId: "1000000115",
        branchName: "Hồ Chí Minh 1 (Đại lý)",
        revenue: 0,
        invoices: ["HD000156"],
        revenueByPercent: 0,
      },
      {
        branchId: "1000000131",
        branchName: "Hồ Chí Minh 3",
        revenue: 0,
        invoices: ["HD000134"],
        revenueByPercent: 0,
      },
    ],
  },
};
export function rotateDataForStackedBar(data: any, timeUnit: string) {
  const newData = data.data;
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
  console.log(result);
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
  console.log(data);
  return data;
}

// rotateDataForStackedBar(data, "hour");
