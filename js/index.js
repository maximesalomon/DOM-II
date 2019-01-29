// Your code goes here

// Mouseover
const navbar = document.getElementsByClassName('nav-link');
navbar[3].addEventListener("mouseover", function(colorChange) {
    colorChange.target.style.color = "yellow";
});

// Mousedown
navbar[3].addEventListener("mousedown", function(colorChange) {
    colorChange.target.style.color = "red";
});


// Keydown
document.addEventListener('keydown', function() {
    console.log(`You have pressed a key`);
}, false);


// Wheel
document.addEventListener('wheel', function() {
    console.log(`You have wheeled`);
}, false);


// Drag & Drop
document.addEventListener('dragstart', function() {
    console.log(`You have started to drag`);
}, false);

// Load
window.addEventListener("load", function(event) {
    console.log("The page has been loaded");
  });

// // Focus
// window.addEventListener('focus', function(event) {
//     console.log("The page has focused");
// });

// Resize
window.addEventListener('resize', function(event) {
    console.log("The page has resized");
});

// Scroll
window.addEventListener('scroll', function(event) {
    console.log("The page has scroll");
});

// Select
var input = document.getElementsByTagName('input');

input[0].addEventListener('select', function(event) {
    console.log("The input field has been selected");
});

// Dblclick

window.addEventListener('dblclick', function(event) {
    console.log("The page has been double clicked");
});


// Stop Propagation

const welcome = document.getElementsByTagName('h2');
welcome[0].addEventListener('click', function(event){
    console.log('welcome clicked propagation');
    event.stopPropagation();
});

const welcomeSection = document.getElementsByClassName('intro');
welcomeSection[0].addEventListener('click', function(event){
    console.log('welcome clicked STOP propagation');
});


// Prevent Default
navbar[0].addEventListener('click', function(event) {
    event.preventDefault();
});

