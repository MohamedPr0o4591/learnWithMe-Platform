// Getting elements from DOM 
var digitalClock = document.getElementById('digital');
var dayOfWeek = document.getElementById('dayOfWeek');
var dateDayMonth = document.getElementById('date');
var secondHand = document.getElementById("secondHand");
var minuteHand = document.getElementById("minuteHand");
var hour = document.getElementById("hourHand");

function startClock() {

	var date = new Date();

	var today = date.getDate();		// Returns the day of the month 
	var month = date.getMonth();	// Returns the month 
	var day = date.getDay();		// Returns the day of the week 
	var hour = date.getHours();		// Returns the hour 

	var minutes = date.getMinutes();		// Returns the minutes
	var seconds = date.getSeconds();		// Returns the seconds

	hourHand.style.transform = 'rotate('+(hour%12+minutes/60)*30+'deg)';
	secondHand.style.transform = 'rotate('+(seconds )*6+'deg)';
	minuteHand.style.transform = 'rotate('+(minutes )*6+'deg)';

	// Begin checking numbers: if number small than 10 adding "0" to prefix
	hour = checkNumbers(hour);
	minutes = checkNumbers(minutes);
	// End checking

	
	digitalClock.innerHTML=hour+" : "+minutes;

	// Array of the day of week
	var daysList = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
	
	// Array of the name of months
	var monthsList = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]

	dayOfWeek.innerHTML = daysList[day]; //writing day of week to 
	dateDayMonth.innerHTML = monthsList[month] + " " + today;

	setTimeout(startClock, 1000);

}

function checkNumbers(i){
	if(i<10){
		i="0"+i;
	}
	return i;		
}