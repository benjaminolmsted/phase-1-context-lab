/* Your Code Here */
 function createEmployeeRecord(recordArray){
     return {
         firstName: recordArray[0],
         familyName: recordArray[1],
         title: recordArray[2],
         payPerHour: recordArray[3],
         timeInEvents: [],
         timeOutEvents: []
     }
 }

 function createEmployeeRecords(empArray){
     return empArray.map((employee) =>{
        return createEmployeeRecord(employee)
     })
 }

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    const inTimeEvent = this.timeInEvents.find(event => event.date === date )
    const outTimeEvent = this.timeOutEvents.find(event => event.date === date)
    return (outTimeEvent.hour - inTimeEvent.hour)/100
}

function wagesEarnedOnDate(date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function findEmployeeByFirstName(scrArray, name){
    let employee;
    scrArray.forEach( emp => {
        if(emp.firstName === name){
            employee = emp;
        }
    })
    return employee
}

function calculatePayroll(empRecords){
    return empRecords.reduce((acc, emp) =>{
        return acc + allWagesFor.call(emp)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

