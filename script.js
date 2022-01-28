$(document).ready(function () {
    var currentHour = moment().format('LT');


    function getLiveDate() {
        var today = new Date();
        var date = today.toLocaleDateString("en-EN", { weekday: 'long' }) + ', ' + (today.getMonth() + 1) + '/' + today.getDate();


        $("#currentDay").append(date);
    }
    getLiveDate();

    $("#clearFieldsBtn").click(function (event) {
        event.preventDefault;
        $("textarea").val("");
        localStorage.clear();
    })

    $(".time-block").each(function () {
        var timeContainer = $(this).attr("id").split("-")[1]

        if (currentHour == timeContainer) {
            $(this).addClass("present");
            $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeContainer) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeContainer) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    })
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.to-dos').val();
        var time = $(this).parent().attr('id').split("-")[1];
        localStorage.setItem(time, value)
    });
    $('#hour-9 .to-dos').val(localStorage.getItem("9"));
    $('#hour-10 .to-dos').val(localStorage.getItem("10"));
    $('#hour-11 .to-dos').val(localStorage.getItem("11"));
    $('#hour-12 .to-dos').val(localStorage.getItem("12"));
    $('#hour-13 .to-dos').val(localStorage.getItem("13"));
    $('#hour-14 .to-dos').val(localStorage.getItem("14"));
    $('#hour-15 .to-dos').val(localStorage.getItem("15"));
    $('#hour-16 .to-dos').val(localStorage.getItem("16"));
    $('#hour-17 .to-dos').val(localStorage.getItem("17"));




});








