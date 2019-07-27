function getTime(){
	var today = new Date();
	var m = today.getMonth()+1;
	var d=today.getDate();
	var t=today.getHours();
	var current= m+'/'+d+' '+t
	return current;
}
var today_time=getTime();
document.getElementbyId('today-time').value(today_time);