
// declaring variable date to format month, day and year.
var date = moment().format("MMM Do YY");

// appending current day to date.

$("#currentDay").append("date");
console.log(date);
// declaring officehours using Arrays from time 9am-5pm
var officeHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

time();

// creating function time for background color
function time() {
    var currentTime = moment().format('H');
    for (var i = 0; i < officeHours.length; i++) {

        console.log(time)
        if (parseInt(officeHours[i]) > currentTime) {
            $("#" + officeHours[i].attr("style", "background-color: lightblue"));
        } else if (parseInt(officeHours[i]) < currentTime)
            $("#" + officeHours[i].attr("style", "background-color: lightorange"));
    } if (parseInt(officeHours[i]) == currentTime) {
        $("#" + officeHours[i].attr("style,", "background-color: lightred"));
    }
}


// creating onclick event for save button

$(",save-btn").on("click", function){
    var officeHours = $(this).parent().attr("id");
    var textContent = $("input").val().trim();
    localStorage.setItem(officeHours,textContent);
    console.log(officeHours, textContent);
}


// attaching individual to parent
$("#9am").children("input").val(localStorage.getItem("9AM"));
$("#10am").children("input").val(localStorage.getItem("10AM"));
$("#11am").children("input").val(localStorage.getItem("11AM"));
$("#12pm").children("input").val(localStorage.getItem("12PM"));
$("#1pm").children("input").val(localStorage.getItem("1pm"));
$("#2pm").children("input").val(localStorage.getItem("2PM"));
$("#3pm").children("input").val(localStorage.getItem("3PM"));
$("#4pm").children("input").val(localStorage.getItem("4Pm"));
$("#5pm").children("input").val(localStorage.getItem("5pm"));

