var colorClock = document.getElementById('clock');

var updateClock = setInterval(function() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	
	if(hours > 12) {
		hours = hours - '12';
		hours = '0' + hours;
	}
	if(minutes <= 9) {
		minutes = '0'+minutes;
	}
	if(seconds <= 9) {
		seconds = '0'+seconds;
	}
	colorClock.innerHTML = hours + ':' + minutes + ':' + seconds;
}, 500);






