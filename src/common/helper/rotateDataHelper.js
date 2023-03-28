import e from "express";


export function rotateDataForStackedBar(data, timeUnit){
    const newData = data.data;
    let allBranchesInThisData = []
    let allDay = [];

    for(let day in newData){
        allDay.push(day);
    }

    for(let day in newData){
        let branchInThisDay = newData[day];
        const allBranchName = branchInThisDay.map((branch) => branch.branchName);
        for(let branch of allBranchName){
            if(!allBranchesInThisData.includes(branch)){
                allBranchesInThisData.push(branch)
            }
        }
    }


    const temp = {}

    for(let day in allDay){
        const key = allDay[day];
        let tmp = {};

        for(let branch in newData[key]){
            if(temp[newData[key][branch].branchName] === undefined){
                temp[newData[key][branch].branchName] = [];
            }
            const revenue = newData[key][branch].revenue;
            tmp[key] = revenue;

            temp[newData[key][branch].branchName].push(tmp)
            tmp = {};
        }
    }

    let result = _addNull(temp, timeUnit, allDay, allBranchesInThisData);
    _addMissingTime(result, timeUnit)
    return result;
}




function _addNull(temp, timeUnit, allDay, allBranchesInThisData){
    let result = {};
    for(let branch in temp){
        let allUnitTimeInThisBranch = temp[branch]
        const arr = _extractArr(allUnitTimeInThisBranch);

        allDay.forEach((day)=>{
            if(!arr.includes(day)){
                let tmp = {}
                tmp[day] = null;
                allUnitTimeInThisBranch.push(tmp);
            }
        })

        allUnitTimeInThisBranch = _sort(allUnitTimeInThisBranch, timeUnit);
        result[branch] = allUnitTimeInThisBranch;
    }


    return result;
}

function _addMissingTime(data,timeUnit){
    let tmpData = Object.assign({}, data)
    let completedTime = [];

    if(timeUnit==="weekday"){
        completedTime = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    }

    if(timeUnit==="hour"){
        for(let i=0; i<=24; i++){
            completedTime.push(i.toString())
        }
    }

    for(let i in tmpData){
        let keysList = [];

        tmpData[i].forEach((e)=>{
            keysList.push(Object.keys(e)[0]);
        })
        tmpData[i] =keysList
    }





    for(let time in completedTime){
        let tmpObj = {};
        for(let key in tmpData){
            if(!tmpData[key].includes(time)){
                tmpObj[time] = null;
                data[key].push(tmpObj)
            }
            tmpObj = {};
        }
    }


    for(let branch in data){
        let allUnitTimeInThisBranch = data[branch]

        allUnitTimeInThisBranch = _sort(allUnitTimeInThisBranch, timeUnit);
        data[branch] = allUnitTimeInThisBranch;
    }

    console.log(data)
}




function _extractArr(arr){
    const days = [];

    for (const object of arr) {
        const day = Object.keys(object)[0];
        days.push(day);
    }

    return days;
}


function _sort(array, timeUnit){
    const sortedArray = array.sort((a, b) => {
        const dayA = Object.keys(a)[0];
        const dayB = Object.keys(b)[0];
        let order = [];
        if(timeUnit==="weekday"){
            order = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        }

        if(timeUnit==="date"){
            for(let i=1; i<=31; i++){
                order.push(i.toString())
            }
        }

        if(timeUnit==="hour"){
            for(let i=0; i<=24; i++){
                order.push(i.toString())
            }
        }
        return order.indexOf(dayA) - order.indexOf(dayB);
    });

    return sortedArray;
}
