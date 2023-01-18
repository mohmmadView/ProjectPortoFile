document.addEventListener('load', (event) => {
 console.log(screen.height);
console.log(screen.width);
console.log(screen);
   
});

console.log("tetgeg");
let elm_menu = document.querySelector("#btnMenu");
elm_menu.addEventListener('click',clickMenu)
function clickMenu(){
    console.log("teatClickMenu");
let elmNavHeader= document.querySelector("#navHeader");
let elmHeader = document.querySelector("header")
console.log(elmNavHeader);
elmHeader.insertAdjacentHTML("beforebegin",`
<nav id="navHeader" class="flex justify-between">
<div class=" w-15 h-15 p-2  bg-blue-300/25  rounded-md">dark mode</div>
 <div class="w-10 h-10 rounded-full bg-gray-500"></div>
<div class="w-10 h-10 rounded-full bg-gray-500"></div>
<div class="w-10 h-10 rounded-full bg-gray-500"></div>
<div class="w-10 h-10 rounded-full bg-gray-500"></div>
<div class="w-10 h-10 rounded-full bg-gray-500"></div>
<div class="w-10 h-10 rounded-full bg-gray-500"></div>

</nav>
`)


}
// elm_menu.onclick=()=>{
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
