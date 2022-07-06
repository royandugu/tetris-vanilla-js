const gridContainer=document.querySelector(".gridContainer");
for(let i=0;i<=199;++i){
    const div=document.createElement("div");
    div.textContent=i;
    gridContainer.appendChild(div);
}
const divs=document.querySelectorAll(".gridContainer div");
const width=10;
//Creating tetrimonials

//Tetrimonial testing
const lTetrimonial=[
    [1,width+1,width*2+1,width*2+2],
    [width+1,width+2,width+3,3],
    [],
    []
];

const nextRotation=nextRotation%current;
divs[lTetrimonial[1][i]].classList.add("block");
    


const oTetrimonial=[
    [],
    [],
    [],
    []
];
const tTetrimonial=[
    [],
    [],
    [],
    []
];
const iTetrimonial=[
    [],
    [],
    [],
    []
];