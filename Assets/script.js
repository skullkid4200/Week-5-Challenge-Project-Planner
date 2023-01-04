// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton9 = document.querySelector("#button9");
var saveButton10 = document.querySelector("#button10");
var saveButton11 = document.querySelector("#button11");
var saveButton12 = document.querySelector("#button12");
var saveButton1 = document.querySelector("#button1");
var saveButton2 = document.querySelector("#button2");
var saveButton3 = document.querySelector("#button3");
var saveButton4 = document.querySelector("#button4");
var saveButton5 = document.querySelector("#button5");
var inputTask = document.querySelector("#textarea9")
var inputTask2 = document.querySelector("#textarea10")
var inputTask3 = document.querySelector("#textarea11")
var inputTask4 = document.querySelector("#textarea12")
var inputTask5 = document.querySelector("#textarea1")
var inputTask6 = document.querySelector("#textarea2")
var inputTask7 = document.querySelector("#textarea3")
var inputTask8 = document.querySelector("#textarea4")
var inputTask9 = document.querySelector("#textarea5")


document.getElementById('textarea9').value = localStorage.getItem("tasks9");
document.getElementById('textarea10').value = localStorage.getItem("tasks10");
document.getElementById('textarea11').value = localStorage.getItem("tasks11");
document.getElementById('textarea12').value = localStorage.getItem("tasks12");
document.getElementById('textarea1').value = localStorage.getItem("tasks1");
document.getElementById('textarea2').value = localStorage.getItem("tasks2");
document.getElementById('textarea3').value = localStorage.getItem("tasks3");
document.getElementById('textarea4').value = localStorage.getItem("tasks4");
document.getElementById('textarea5').value = localStorage.getItem("tasks5");

var today = dayjs();
$('#currentDay').text(today.format('[Today is] dddd, MMM D, YYYY'));



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  saveButton9.addEventListener("click", function () {
    localStorage.setItem("tasks9", inputTask.value);
  });

  saveButton10.addEventListener("click", function () {
    localStorage.setItem("tasks10", inputTask2.value);
  });

  saveButton11.addEventListener("click", function () {
    localStorage.setItem("tasks11", inputTask3.value);
  });

  saveButton12.addEventListener("click", function () {
    localStorage.setItem("tasks12", inputTask4.value);
  });

  saveButton1.addEventListener("click", function () {
    localStorage.setItem("tasks1", inputTask5.value);
  });

  saveButton2.addEventListener("click", function () {
    localStorage.setItem("tasks2", inputTask6.value);
  });

  saveButton3.addEventListener("click", function () {
    localStorage.setItem("tasks3", inputTask7.value);
  });

  saveButton4.addEventListener("click", function () {
    localStorage.setItem("tasks4", inputTask8.value);
  });

  saveButton5.addEventListener("click", function () {
    localStorage.setItem("tasks5", inputTask9.value);
  });



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



