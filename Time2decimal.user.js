// ==UserScript==
// @name         Time to Decimal
// @namespace    http://www.studioillek.cz/
// @version      0.1
// @description  Convert minutes to decimal for Redmine time entries.
// @author       Petr Illek
// @match        https://redmine.morpht.com/time_entries/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    $(document).ready(function() {
        // Create some new markup.
        $('.box.tabular').append('<span id="timetodecimal"><input type="number" value="" placeholder="Time in minutes" id="minutes"></span>');
        $('#timetodecimal').append('<p id="decimaltime"></p>');

        // Add CSS styling.
        $(".box.tabular").css("position", "relative");
        $('#minutes').css("text-align", "right").css("width", "150px").css("float", "right");
        $("#timetodecimal").css("position", "absolute").css("right", "15px").css("top", "15px");
        $('#decimaltime').css("font-size", "15px").css("text-align", "right").css("padding", "5px").css("display", "block").css("clear", "both");

        // Minutes field changes its value.
        $('#minutes').change(function() {
            var timeToDecimal = $("#minutes").val()/60;
            $("#decimaltime").html("Decimal time: " + (timeToDecimal.toFixed(2)));
        });

        // Change in Comment field.
        var typingTimer;                // Timer identifier.
        var doneTypingInterval = 300;
        var $input = $('#time_entry_comments');

        // On keyup, start the countdown.
        $input.on('keyup', function () {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });

        // On keydown, clear the countdown.
        $input.on('keydown', function () {
            clearTimeout(typingTimer);
        });

        // User is finished typing.
        function doneTyping () {
            // We need to check if there is some time span already.
            var timeEntryComments = $("#time_entry_comments").val();
            var regExp = /\[([^\]]+)\]/;
            var timeEntry = regExp.exec(timeEntryComments);
            var timeSplit = timeEntry[1].split("–");
            var timeStart = timeSplit[0].split(":");
            var timeEnd = timeSplit[1].split(":");
            var timeStartMinutes = (+timeStart[0])*60 + (+timeStart[1]);
            var timeEndMinutes = (+timeEnd[0])*60 + (+timeEnd[1]);
            $("#minutes").val(timeEndMinutes - timeStartMinutes).change();
        }
    });
})();