/* Test to make sure your JavaScript file is loaded correctly using console.log 
console.log("Testing index.js file is loading correctly");*/

/* jQuery event listener that triggers on hover */
$("#resumeButton").hover(function(){
  console.log("You hovered on #resumeButton");
});

/* Resume button
Change background colour of button on hover */
$("#resumeButton").hover(function(){
  $(this).css("background-color", "#CF9C98");
}, function(){
  $(this).css("background-color", "#1B1F25");
});

/* Change text colour of button on hover */
$("#resumeButton a").hover(function(){
  $(this).css("color", "#1B1F25");
}, function(){
  $(this).css("color", "#CF9C98");
});

/* Contact me button */
$("#contactButton").hover(function(){
  $(this).css("background-color", "#CF9C98");
}, function(){
  $(this).css("background-color", "#f2f2f2");
});

/* Change text colour of button on hover */
$("#contactButton a").hover(function(){
  $(this).css("color", "#f2f2f2");
}, function(){
  $(this).css("color", "#CF9C98");
});

/* View Project 1 button */
$("#projectButton1").hover(function(){
  $(this).css("background-color", "#CF9C98");
}, function(){
  $(this).css("background-color", "#1B1F25");
});

/* Change text colour of button on hover */
$("#projectButton1 a").hover(function(){
  $(this).css("color", "#1B1F25");
}, function(){
  $(this).css("color", "#CF9C98");
});

/* View Project 2 button */
$("#projectButton2").hover(function(){
  $(this).css("background-color", "#CF9C98");
}, function(){
  $(this).css("background-color", "#1B1F25");
});

/* Change text colour of button on hover */
$("#projectButton2 a").hover(function(){
  $(this).css("color", "#1B1F25");
}, function(){
  $(this).css("color", "#CF9C98");
});

/* View Project 3 button */
$("#projectButton3").hover(function(){
  $(this).css("background-color", "#CF9C98");
}, function(){
  $(this).css("background-color", "#1B1F25");
});

/* Change text colour of button on hover */
$("#projectButton3 a").hover(function(){
  $(this).css("color", "#1B1F25");
}, function(){
  $(this).css("color", "#CF9C98");
});

/* Hamburger menu */
const menuBtn = document = document.querySelector('.hamburgerBtn'); //querySelector is calling on the menuBtn in CSS

// Main toggle
menuBtn.addEventListener('click',()=>{
  menuBtn.classList.toggle("open");
})

/* On scroll, sticky will work 
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
}*/