$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.to-dos').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value)
    });

    function getLiveDate() {
        var today = new Date();
        var date = today.toLocaleDateString("en-EN", { weekday: 'long' }) + ', ' + (today.getMonth() + 1) + '/' + today.getDate();


        $("#currentDay").append(date);
    }
    getLiveDate();

    function getTime() {
        
    }
    var interval = setInterval()

});








