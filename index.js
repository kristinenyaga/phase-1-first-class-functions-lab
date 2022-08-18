// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=(drivers)=>{
    return drivers.slice(0,2)
}
returnFirstTwoDrivers(drivers)
const returnLastTwoDrivers=(drivers)=>{
    return drivers.slice(-2)
}
returnLastTwoDrivers(drivers)
const selectingDrivers=[
        returnFirstTwoDrivers,
        returnLastTwoDrivers
    ]
function createFareMultiplier(integer){
    return (fare)=>fare*integer
 }
 const fareMultiplier=createFareMultiplier()
const fareDoubler=createFareMultiplier(2)
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers=function (arrayOfDrivers, first){
    return first(arrayOfDrivers)
}
selectDifferentDrivers(drivers,returnFirstTwoDrivers)