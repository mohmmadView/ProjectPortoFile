document.addEventListener('load', (event) => {
 console.log(screen.height);
console.log(screen.width);
console.log(screen);
   
});

let elm_menu = document.querySelector("#btnMenu");

let isOffMenu = true;
elm_menu.addEventListener('click',clickMenu)
function clickMenu(){
    if(isOffMenu===true){
isOffMenu=false;
    console.log("click");
let elmNavHeader= document.querySelector("#navHeader");
let elmHeader = document.querySelector("header")
elmHeader.insertAdjacentHTML("beforebegin",`
      <div id="navMenu">
      <div class="w-10 h-10 fixed top-28 left-4 rounded-full bg-gray-500"></div>
      <div class="w-10 h-10 fixed top-24 left-16  rounded-full bg-gray-500"></div>
      <div class="w-10 h-10 fixed top-16 left-28  rounded-full bg-gray-500"></div>
      <div class="w-10 h-10 fixed top-4 left-36 rounded-full bg-gray-500"></div>
</div>
`)
    }else{
        let menuFix =document.querySelector("#navMenu");
        menuFix.remove();
        isOffMenu=true;
        console.log(menuFix);  
        console.log("click2");
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


console.log(project1El);
// elm_menu.onclick=()=>{
//     console.log("test");
// // let ulElmMenu = document.createElement("ul");
// elm_nav_header.insertAdjacentElement("beforeend",`
// <div class=" w-15 h-15 p-2  bg-blue-300/25  rounded-md">dark mode</div>
//  <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// <div class="w-10 h-10 rounded-full bg-gray-500"></div>
// `)


// }
