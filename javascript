$(document).ready(function() {
    // Get current day of the week
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDate = new Date();
    var dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Get current UTC time in milliseconds
    var utcTime = Date.now();

    // Update personal data attributes
    $('#slackUserName').text('Promise Nduji');
    $('#currentDayOfTheWeek').text('Today is ' + dayOfWeek);
    $('#currentUTCTime').text('Current UTC Time: ' + utcTime);
});
