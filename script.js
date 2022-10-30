
// hooks to DOM
var currentDayEl = document.getElementById('currentDay');

var currentDate = moment().format('dddd MMMM Do');

currentDayEl.textContent = currentDate