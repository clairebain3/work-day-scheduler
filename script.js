
// hooks to DOM
var currentDayEl = document.getElementById('currentDay');
var calendarEl = document.getElementById('calendar');
var spanTags = document.querySelectorAll("span");
// declare variables
var currentDate = moment().format('dddd MMMM Do');
var currentHour = moment().format('HH')
let alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(
    ""
  );
// display current date on webpage
currentDayEl.textContent = currentDate
// set the class for each span tag based on the current time
// add any data from local storage
for (var i = 0; i < spanTags.length; i++) {
    if (i + 9 > currentHour){
    spanTags[i].setAttribute("class", "future");
    console.log('future')
    spanTags[i].textContent = localStorage.getItem(spanTags[i].id)
    }
    else if (i +9 < currentHour){
        spanTags[i].setAttribute("class","past")
        console.log('past')
        spanTags[i].textContent = localStorage.getItem(spanTags[i].id)
    }
    else if (i+9 == currentHour){
        spanTags[i].setAttribute("class","present")
        console.log('present')
        spanTags[i].textContent = localStorage.getItem(spanTags[i].id)
    }
}
// event listener for calendar
calendarEl.addEventListener("click", function (event) {
    var element = event.target;
    // check if the click was on a calendar hour
    if (element.matches(".future") || (element.matches(".past")) || (element.matches(".present"))) {
        // EVENT LISTENER: type a key
        // Keydown event
        document.addEventListener("keydown", function (event) {
           // check if key is alphanumeric
            var key = event.key;
            if (alphabetNumericCharacters.includes(key)) {
                element.textContent += event.key;
    }});

    }
});
// event listener to save the text in that row to local storage when save button is clicked
calendarEl.addEventListener("click", function(event){
var element = event.target;
if (element.matches(".saveBtn")){
    var rowParent = (element.closest("div"))
    var currentSpan = rowParent.querySelector("span")
    // var textContent = rowParent.children('span').eq(0).textContent
    var currentSpanId = currentSpan.id
    localStorage.setItem(currentSpanId, currentSpan.textContent);
}

})

