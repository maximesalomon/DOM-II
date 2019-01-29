// Your code goes here

// // Mouseover
// const navbar = document.getElementsByClassName('nav-link');
// console.log(navbar);
// navbar[3].addEventListener("mouseover", function(colorChange) {
//     colorChange.target.style.color = "yellow";
// });

// // Mousedown
// navbar[3].addEventListener("mousedown", function(colorChange) {
//     colorChange.target.style.color = "red";
// });


// // Keydown
// document.addEventListener('keydown', function() {
//     alert(`You have pressed a key`);
// }, false);


// // Wheel
// document.addEventListener('wheel', function() {
//     alert(`You have wheeled`);
// }, false);


// // Drag & Drop
// document.addEventListener('dragstart', function() {
//     alert(`You have started to drag`);
// }, false);

// // Load
// window.addEventListener("load", function(event) {
//     alert("The page has been loaded");
//   });

// // Focus
// window.addEventListener('focus', function(event) {
//     alert("The page has focused");
// });

// // Resize
// window.addEventListener('resize', function(event) {
//     alert("The page has resized");
// });

// // Scroll
// window.addEventListener('scroll', function(event) {
//     alert("The page has scroll");
// });

// // Select
// var input = document.getElementsByTagName('input');

// input[0].addEventListener('select', function(event) {
//     alert("The input field has been selected");
// });

// dbclick

var busImage = document.getElementsByTagName('header');

busImage.addEventListener('dbclick', function(event) {
    alert("The page has been double clicked");
});