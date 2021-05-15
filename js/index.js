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

