
// hooks to DOM
var currentDayEl = document.getElementById('currentDay');
var calendarEl = document.getElementById('calendar');
var spanTags = document.querySelectorAll("span");

var currentDate = moment().format('dddd MMMM Do');
var currentHour = moment().format('HH')
console.log(currentHour)
currentDayEl.textContent = currentDate
// set the class for each span tag based on the current time
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
    var rowParent = (element.closest("div"))
    console.log(rowParent)
    var currentSpan = rowParent.querySelector("span")
    // var textContent = rowParent.children('span').eq(0).textContent
    var currentSpanId = currentSpan.id
    console.log(currentSpanId)
    localStorage.setItem(currentSpanId, currentSpan.textContent);
}

})

