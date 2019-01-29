// Rockets
const block = document.getElementsByClassName('block');

block[1].addEventListener('click', function(){
    block[1].setAttribute('style', 'order: -1;');
});


// Travelers
const redBlock = document.getElementsByClassName('block--red');

redBlock[0].addEventListener('mousedown', function(){
    console.log('Mousedown');
    redBlock[0].setAttribute('style', 'position: absolute; left: +200px;')
});