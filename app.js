//! menuClick
let elm_menu = document.querySelector("#btnMenu");
let isOffMenu = true;
elm_menu.addEventListener('click',clickMenu);
/**
 * Clicks the menu and toggles its visibility.
 *
 * @return {undefined} This function does not return anything.
 */
function clickMenu(){
    if(isOffMenu===true){
     isOffMenu=false;
    console.log("click");
let elmNavHeader= document.querySelector("#navHeader");
let elmHeader= document.querySelector("header");
elmHeader.insertAdjacentHTML("beforebegin",`
<div id="navMenu">
<a href="#mySkill" class="w-10 h-10 fixed top-28 left-4 rounded-full bg-gray-500">skill</a>
<div class="w-10 h-10 fixed top-24 left-16  rounded-full bg-gray-500"></div>
<div class="w-10 h-10 fixed top-16 left-28  rounded-full bg-gray-500"></div>
<div class="w-10 h-10 fixed top-4 left-36 rounded-full bg-gray-500"></div>
</div>

`)
/**
 * Toggles the visibility of the menu.
 *
 * @return {undefined} This function does not return anything.
 */
function toggleMenu() {
  if (isMenuVisible) {
    isMenuVisible = false;
    let navHeader = document.querySelector("#navHeader");
    let header = document.querySelector("header");
    header.insertAdjacentHTML(
      "beforebegin",
      `
      <div id="navMenu">
        <a href="#mySkill" class="w-10 h-10 fixed top-28 left-4 rounded-full bg-gray-500">skill</a>
        <div class="w-10 h-10 fixed top-24 left-16  rounded-full bg-gray-500"></div>
        <div class="w-10 h-10 fixed top-16 left-28  rounded-full bg-gray-500"></div>
        <div class="w-10 h-10 fixed top-4 left-36 rounded-full bg-gray-500"></div>
      </div>
    `
    );
  } else {
    let menu = document.querySelector("#navMenu");
    menu.remove();
    isMenuVisible = true;
  }
}
    }else{
        let menuFix =document.querySelector("#navMenu");
        menuFix.remove();
        isOffMenu=true;
        console.log(menuFix);  
        console.log("click2");
    }

//! menuClickTheEnd
    
}
//!MySkill&AboutMe

var mySkillElm = document.querySelector('#mySkill');
var myAboutElm = document.querySelector('#AboutMe');
var myProject1 = document.querySelector("#project1");
var myProject2 = document.querySelector("#project2");
var myProject3 = document.querySelector("#project3");
var myProject4 = document.querySelector("#project4");
window.onscroll=()=>{
  
  winScroll(1100,myProject4,"animate__backInUp")
  winScroll(1100,myProject3,"animate__backInUp")
  winScroll(1100,myProject2,"animate__backInDown")
  winScroll(1100,myProject1,"animate__backInDown")
  winScroll(578,mySkillElm,"animate__backInLeft");
  winScroll(578,myAboutElm,"animate__backInRight");
 
}
// ? scroll eventListener function
function winScroll(number,element,classId) {
  if (window.scrollY > number) {
    element.classList.add(classId);
  } else {
    element.classList.remove(classId);
  }
}

let titleSite = document.querySelector(".titleSite");
let project1El = document.querySelector(".project1");
project1El.addEventListener("mouseenter",()=>{
titleSite.innerHTML="the history of iran";
})
project1El.addEventListener("mouseleave",()=>{
titleSite.innerHTML="";
})
//? text and  letter  play loop
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
