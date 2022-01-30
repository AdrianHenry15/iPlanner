// Lets the document know that this whole file will be in jQuery
$(document).ready(function () {
    // These variables use moment.js and are for the live date and times to be displayed and used for logic
    let nowMoment = moment().format("MMMM Do YYYY")
    let displayDate = document.getElementById("currentDay");
    let currentHour = moment().format("HH")

    // This funtion displays the date in the header section of the webpage
    function getLiveDate() {
        var today = new Date();
        var date = today.toLocaleDateString("en-EN", { weekday: 'long' }) + ', ' + (today.getMonth() + 1) + '/' + today.getDate();


        $("#currentDay").append(date);
    }
    getLiveDate();

    // This funtion clears localstorage
    $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
    })

    // This function uses moment.js from the variables we placed in the top 
    // of the document to display different colors to the sections 
    // depending on if we are in the past, present or future.
    $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1]

        if (currentHour == timeDiv) {
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });
    // This function saves the user input into localstorage
    $('.saveBtn').on('click', function (event) {
        event.preventDefault();
        var value = $(this).siblings('.time-block').val();
        var time = $(this).parent().attr('id').split("-")[1];
        localStorage.setItem(time, value)
    });

    // This allows the saved data from the user to persist on the page
    $('#hour-09 .time-block').val(localStorage.getItem("09"));
    $('#hour-10 .time-block').val(localStorage.getItem("10"));
    $('#hour-11 .time-block').val(localStorage.getItem("11"));
    $('#hour-12 .time-block').val(localStorage.getItem("12"));
    $('#hour-13 .time-block').val(localStorage.getItem("13"));
    $('#hour-14 .time-block').val(localStorage.getItem("14"));
    $('#hour-15 .time-block').val(localStorage.getItem("15"));
    $('#hour-16 .time-block').val(localStorage.getItem("16"));
    $('#hour-17 .time-block').val(localStorage.getItem("17"));




});








