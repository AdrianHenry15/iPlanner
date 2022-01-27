var tasks = {};

function getLiveDate() {
    var today = new Date();
    var date = today.toLocaleDateString("en-EN", { weekday: 'long' }) + ', ' + (today.getMonth() + 1) + '/' + today.getDate();

    
  $("#currentDay").append(date);
}
getLiveDate(); 



