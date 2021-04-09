$(document).ready(function() {
    $(function () {
        /**  open / closed script, uses ./js/openingTimes.jquery.js  */
        $('#open_or_closed').openingTimes({
            openingTimes: {
                'Monday': ['09:00', '18:00'],
                'Tuesday': ['17:00', '21:00'],
                'Wednesday': ['09:00', '18:00'],
                'Thursday': false,
                'Friday': ['12:00', '17:00'],
                'Saturday': ['12:00', '17:00'],
                'Sunday': ['12:00', '17:00']
            },
            openString: "OPEN! Come on in",
            closedString: "closed",
            openClass: "open2",
            closedClass: "closed2"
        });

        /**  This gets today's date and selects today's day of the week
         * numerically (Sun is 0, Mon is 1, etc), then changes the element in
         * about.html to "selected-day", which triggers ./css/style.css to
         * highlight the element a color, so the user knows what today is,
         * and whether the shop is open or closed (green or red).  */
        var date = new Date();
        var todaysDayOfWeek = date.getDay();
        // $("#"+todaysDayOfWeek+"").attr('id', 'selected-day');

        $('#openOrClosedh2').each(function() {
            if ($(this).is(':contains("OPEN")')) { //the shop is open, give the green color
                $("#"+todaysDayOfWeek+"").attr('id', 'selected-day-open');
            } else { //must be closed, give the red color
                $("#"+todaysDayOfWeek+"").attr('id', 'selected-day-closed');
            }
        });

    });

});