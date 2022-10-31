
// hooks to DOM
var currentDayEl = document.getElementById('currentDay');
var calendarEl = document.getElementById('calendar');
var spanTags = document.querySelectorAll("span");

var currentDate = moment().format('dddd MMMM Do');
var currentHour = moment('12:00','hh:mm').format('HH')
console.log(currentHour)
currentDayEl.textContent = currentDate
// set the class for each span tag based on the current time
for (var i = 0; i < spanTags.length; i++) {
    if (i + 9 > currentHour){
    spanTags[i].setAttribute("class", "future");
    console.log('future')
    }
    else if (i +9 < currentHour){
        spanTags[i].setAttribute("class","past")
        console.log('past')
    }
    else if (i+9 == currentHour){
        spanTags[i].setAttribute("class","present")
        console.log('present')
    }
}

calendarEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".future") || (element.matches(".past")) || (element.matches(".present"))) {
        // element.setAttribute("class", "textarea")
        console.log("ok")
        // EVENT LISTENER: type a key
        // Keydown event
        document.addEventListener("keydown", function (event) {
            console.log("keydown happened");
            var key = event.key;
                element.textContent += event.key;
              
            
          });

    }
    else( console.log("not ok"))
});

calendarEl.addEventListener("click", function(event){
var element = event.target;
if (element.matches(".saveBtn")){

    console.log("saved")
}

})

