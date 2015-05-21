var bgColor = setInterval(function displayColor() {
	var nowColor = new Date();
	var hoursColor = nowColor.getHours();
	var minutesColor = nowColor.getMinutes();
	var secondsColor = nowColor.getSeconds();

	var color = "#"+ hoursColor + minutesColor + secondsColor;
	document.body.style.background = color;
}, 50)

var dayDate = document.getElementById('day');

var updateDay = setInterval(function() {

	var dayArray = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
	];
	var monthArray = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
	];

	var mydate = new Date();
	var year = mydate.getYear();
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var dayNum = mydate.getDate();

	if (year < 1000) {
		year+=1900;
	}
	if(month <= 9) {
		month = '0'+month;
	}
	if(dayNum <= 9) {
		dayNum = '0'+dayNum;
	}

	month = monthArray[parseInt(month)];
	day = dayArray[parseInt(day)];


	dayDate.innerHTML = day + ', ' + month + ' ' + dayNum + ', ' + year;


}, 500);


var colorClock = document.getElementById('clock');

var updateClock = setInterval(function() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

//comment out for 24 hour clock
	if(hours > 12) {
		hours = hours - '12';
		hours = '0' + hours;
	}
//comment out for 24 hour clock
	
	if(minutes <= 9) {
		minutes = '0'+minutes;
	}
	if(seconds <= 9) {
		seconds = '0'+seconds;
	}
	colorClock.innerHTML = hours + ':' + minutes + ':' + seconds;

	var color = "#"+parseInt(hours) + parseInt(minutes) + parseInt(seconds);
	document.body.style.background = color;

}, 500);
