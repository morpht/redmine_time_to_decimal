# tl;dr
* Calculates diff between start and stop time in time entry description when using https://github.com/LeviticusMB/bestest_timer
* Chrome: https://www.google.cz/search?q=tampermonkey+chrome
* Firefox: https://www.google.cz/search?q=greasemonkey#q=greasemonkey+firefox
* IE: http://stackoverflow.com/questions/11876852/how-to-run-a-modern-userscript-on-internet-explorer
* https://github.com/morpht/redmine_time_to_decimal/raw/master/Time2decimal.user.js

# What it does
* For users of https://github.com/LeviticusMB/bestest_timer redmine extension.
* Bestest_timer saves exact time in time entry description in following format: `Your message. [11:03–11:26]`
* This extenions kicks in when editing these entries.
* It shows new form element that calculates number of minutes between start and finish time.
* Also allows to one-click add this value as decimal number to remine's field.

# Installation
* It's small script running in your browser.
* You need something like Greasemonkey for FireFox ("Allows you to customize the way a web page displays or behaves, by using small bits of JavaScript.") to run the script. https://addons.mozilla.org/cs/firefox/addon/greasemonkey/
* There is Chrome alternative, Tampermonkey: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
* After installing the browser extension, install the script: http://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts / http://tampermonkey.net/faq.php?ext=dhdg#Q102
* The script you need is here: https://github.com/morpht/redmine_time_to_decimal/raw/master/Time2decimal.user.js Just visit the URL and Tamper/Grease monkeay should catch it. Or do whatever their manual says. :)
