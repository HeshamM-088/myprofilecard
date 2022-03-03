const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);

/*******************************************************************/
/*Dark & Light Mode*/

let cardBox = document.querySelector(".card");
let moon = document.querySelector(".fa-moon");
let sun = document.querySelector(".fa-sun-bright");
let leftTitle = document.querySelector(".title");
let leftText = document.querySelector(".text");
let rightNumber = document.querySelectorAll(".right .number");
let rightTitle = document.querySelectorAll(".right .number-title");
let socialIcons = document.querySelectorAll(".icon");


moon.addEventListener("click", () => {
    cardBox.classList.add("dark");
    leftTitle.style.color = "white";
    leftText.style.color = "white";
    
    rightNumber.forEach(e =>{
        e.style.color = "white";
    });
    rightTitle.forEach(e =>{
        e.style.color = "white";
    });

    sun.style.display = "block";
    moon.style.display = "none";
})

sun.addEventListener("click", () => {
    cardBox.classList.remove("dark");
    leftTitle.style.color = "#4c4c4c";
    leftText.style.color = "#666";
    
    rightNumber.forEach(e =>{
        e.style.color = "#333";
    });
    rightTitle.forEach(e =>{
        e.style.color = "#666";
    });

    sun.style.display = "none";
    moon.style.display = "block";
})