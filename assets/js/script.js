// JS by Dan Høegh
// UCN MMD 2021


document.querySelector('#btnAlert').addEventListener('click', function() {
    alert('You are alerted!');
});

// let's make it easier to manipulate the box
let elmBox = document.querySelector('#box');

// add class "show" when button is clicked
document.querySelector('#btnBoxShow').addEventListener('click', function() {
    elmBox.classList.add('show');
});    

// remove class "show" when button is clicked
document.querySelector('#btnBoxHide').addEventListener('click', function() {
    elmBox.classList.remove('show');
});    

// toggle class show when button is clicked
document.querySelector('#btnBoxToggle').addEventListener('click', function() {
    elmBox.classList.toggle('show');
});

// add background-color on mouse in
elmBox.addEventListener('mouseover', function() {
    elmBox.classList.toggle('changecolor');
});    

// remove background-color on mouse in
elmBox.addEventListener('mouseout', function() {
    elmBox.classList.toggle('changecolor');
});    
