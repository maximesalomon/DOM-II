// Your code goes here

// Mouseover
const navbar = document.getElementsByClassName('nav-link');
console.log(navbar);
navbar[3].addEventListener("mouseover", function(colorChange) {
    colorChange.target.style.color = "yellow";
});

// Mousedown
navbar[3].addEventListener("mousedown", function(colorChange) {
    colorChange.target.style.color = "red";
});


// Keydown

document.addEventListener('keydown', function() {
    alert(`You have pressed a key`);
}, false);

