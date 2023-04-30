// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

/* declaring variables */
var saveBtn = $(".saveBtn");
var displayTime = $("#currentDay");
var currentTime = dayjs.hour;


/* this refers to each save button */
saveBtn.each(function(){
$(this).on("click", function (){

  /* value */
  var localInput = $(this).siblings("textarea").val();
  /* key */
  var textAreaID = $(this).parent().attr("id");

  localStorage.setItem(textAreaID, localInput);
  console.log(localStorage.getItem(textAreaID));
});
});

/* displaying current date in header */ /* adding event listener */
function displayDate(){
  var currentDate = dayjs().format("MM DD, YYYY");
  displayTime.text(currentDate);
}
displayDate();

$(document).ready(funtion () {
  for (let i = 9; i < 18; i++) {
    var scheduledTimeSlot = localStorage.getItem(i);
    $("#${i}").children("textarea").val(scheduledTimeSlot);
    changeColor(i);
    console.log(i);
  } 



  function changeColor(i) {
    if (currentTime < i) {
      $("#${i}").removeClass("past");
      $("#${i}").removeClass("present");
      $("#${i}").addClass("future");
    } else if (currentTime === i) {
      $("#${i}").addClass("present");
      $("#${i}").removeClass("future");
    } else {
      $("#${i}").addClass("past");
      $("#${i}").removeClass("present");
      $("#${i}").removeClass("future");
    }
  }
});