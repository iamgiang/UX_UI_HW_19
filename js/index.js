/* Test to make sure your JavaScript file is loaded correctly using console.log 
console.log("Testing index.js file is loading correctly");*/


/* jQuery Event Listener That Triggers 
$(document).ready(function(){
    $("#resumeButton").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });*/

  /* jQuery event listener that triggers on click */
  $('#resumeButton').on("click", function() {
    console.log("You clicked on #resumeButton");
  });



/* On scroll, sticky will work */
window.onscroll = function() {triggerStickyNavBar()};

// Get the navbar
var navbar = document.getElementById("navbarid");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function triggerStickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}