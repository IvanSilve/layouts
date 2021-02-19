let Burger = document.getElementsByClassName('burger');
let headerList = document.getElementsByClassName('headerList');
let buttonNext = document.getElementById('buttonNext');
let buttonPrevious = document.getElementById('buttonPrevious');
let firstSlide = document.getElementsByClassName('firstSlide');
let secondSlide = document.getElementsByClassName('secondSlide');

 Burger[0].onclick = BurgerClick;                                             //open Burger Menu on click

 buttonNext.onclick = sliderNext;
 buttonPrevious.onclick = sliderNext;

function BurgerClick(){
    headerList[0].classList.toggle('active');
    Burger[0].classList.toggle('active');
}

function sliderNext() {
    firstSlide[0].classList.toggle('hidden');
    secondSlide[0].classList.toggle('hidden');
}

