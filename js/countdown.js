function startTimer(duration) {
    var timer = duration, hours, minutes, seconds, days;
    setInterval(function () {
		if (timer <= 0) {
			return;
		}
        minutes = parseInt(timer / 60, 10);
        hours = parseInt(minutes / 60, 10)
        minutes = parseInt(minutes % 60, 10);
        seconds = parseInt(timer % 60, 10);
		days = parseInt(hours / 24, 10);
		hours = parseInt(hours % 24, 10);		
		
		days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

		$('#day').text(days);
        $('#hour').text(hours);
		$('#minute').text(minutes);
		$('#second').text(seconds);
	   
        if (--timer < 0) {
        }
    }, 1000);
}
Number.prototype.padLeft = function(base,chr){
   var  len = (String(base || 10).length - String(this).length)+1;
   return len > 0? new Array(len).join(chr || '0')+this : this;
}
    
function get_server_time_info() {
	var end_time = '2018-08-01 00:00:00';
	var d = new Date,
    current_time = [ d.getFullYear(),(d.getMonth()+1).padLeft(),
                    d.getDate().padLeft()
                    ].join('-')+
                    ' ' +
                  [ d.getHours().padLeft(),
                    d.getMinutes().padLeft(),
                    d.getSeconds().padLeft()].join(':');
	var end_time = strToDateTime(end_time);
	var current_time = strToDateTime(current_time);
	var duration = (end_time.getTime() - current_time.getTime()) / 1000;
	startTimer(duration);
}
function strToDateTime(dateString) {
var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
var dateArray = reggie.exec(dateString); 
var dateObject = new Date(
    (+dateArray[1]),
    (+dateArray[2])-1, // Careful, month starts at 0!
    (+dateArray[3]),
    (+dateArray[4]),
    (+dateArray[5]),
    (+dateArray[6])
);
return dateObject;
}
$(document).ready(function() {
	get_server_time_info()
});