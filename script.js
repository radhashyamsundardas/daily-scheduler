
// declaring variable date to format month, day and year.
var date = moment().format("MMM Do YY");

// appending current day to date.

$("#currentDay").append("date");
console.log(date);
// declaring officehours using Arrays from time 9am-5pm
var officeHours = ["9", "10", "11", "12","13","14","15","16","17"]

function time (){
    var currentTime = moment().format('H');
}

