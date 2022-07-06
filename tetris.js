const gridContainer=document.querySelector(".gridContainer");
for(let i=0;i<=199;++i){
    const div=document.createElement("div");
    gridContainer.appendChild(div);
}
const divs=document.querySelectorAll(".gridContainer div");
console.log(divs);