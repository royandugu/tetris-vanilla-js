const gridContainer=document.querySelector(".gridContainer");
for(let i=0;i<=199;++i){
  const div=document.createElement("div");
  div.textContent=i;
  if(i>=190 && i<=199) div.classList.add("finalGrid");
  gridContainer.appendChild(div);
}

const grids=document.querySelectorAll(".gridContainer div");
const width=10;
const dWidth=4;
const futureContainer=document.querySelector(".futureContainer");

for(let i=0;i<16;i++){
  const div=document.createElement("div");
  div.textContent=i;
  futureContainer.appendChild(div);
}
const futureGrids=document.querySelectorAll(".futureContainer div");

//Tetrimino list
const lTetromino = [
  [1, width+1, width*2+1,2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
]
const zTetromino = [
  [0,width,width+1,width*2+1],
  [width+1, width+2,width*2,width*2+1],
  [0,width,width+1,width*2+1],
  [width+1, width+2,width*2,width*2+1]
]
const tTetromino = [
  [1,width,width+1,width+2],
  [1,width+1,width+2,width*2+1],
  [width,width+1,width+2,width*2+1],
  [1,width,width+1,width*2+1]
]
const oTetromino = [
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1]
]
const iTetromino = [
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3],
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3]
]
const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];


//Future display
const futureTetriminoes=[
  [1, dWidth+1, dWidth*2+1,2],
  [0,dWidth,dWidth+1,dWidth*2+1],
  [1,dWidth,dWidth+1,dWidth+2],
  [0,1,dWidth,dWidth+1],
  [1,dWidth+1,dWidth*2+1,dWidth*3+1],
]

//Initial situation
let random=Math.floor(Math.random()*5);
let currentRotation=0;
let choosenPattern=theTetrominoes[random][currentRotation];

// //Variables
// let downTimer;
// let gameEnded=false;
// let blockList=[];
// let futureList=[];
// let touchGround=false;
// let choosenPattern;
// let futurePattern;
// let rCount=0;
// let firstRandomIndex,secondRandomIndex;
// let i,j;


// //Listen to keyboard entries
// const keyListen=(e)=>{
//   if(e.keyCode===37) moveTetriminoLeft();
//   else if(e.keyCode===39) moveTetriminoRight();
//   else if(e.keyCode===82) rotateTetrimino();
//   else if(e.keyCode===40) fastFallTetrimino();
// }
// document.addEventListener("keydown",keyListen);


// //Display and remove the tetris blocks
// const setCurrentTetrimino=()=>{
//   blockList.forEach(index=>grids[index].classList.add("block"));
// }
// const setFutureTetrimino=()=>{
//   futurePattern.forEach(index=>futureGrids[index].classList.add("futureBlock"));
// }
// const removeCurrentTetrimino=()=>{
//   blockList.forEach(index=>grids[index].classList.remove("block"));
// }
// const removeFutureTetrimino=()=>{
//   futurePattern.forEach(index=>futureGrids[index].classList.remove("futureBlock"));
// }


// //Change choosenPattern
// const changeChoosenPattern=(value)=>{
//   for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//       choosenPattern[i][j]+=value;
//     }
//   }
// }


// //Select the tetris block and display them
// const selectTetrimino=()=>{
//   touchGround=false;
//   blockList=[];
//   if(secondRandomIndex) firstRandomIndex=secondRandomIndex;
//   else firstRandomIndex=Math.floor(Math.random()*5);
//   secondRandomIndex=Math.floor(Math.random()*5);
//   choosenPattern=theTetrominoes[firstRandomIndex];
//   futurePattern=futureTetriminoes[secondRandomIndex];
//   showTetrimino();
// }

// const showTetrimino=()=>{
//   choosenPattern[rCount].forEach((index,i)=>blockList[i]=index);
//   setCurrentTetrimino();
//   setFutureTetrimino();
//   setTimeout(()=>moveTetriminoDown(),500);
// }


// //Basic movement functionalities
// const moveTetriminoLeft=()=>{
//   if(blockList.some(index=>index%width===0) || blockList.some(index=>grids[index].classList.contains("restedBlock"))) return;
//   removeCurrentTetrimino();
//   blockList=blockList.map(index=>{
//     return index-1; 
//   });
//   setCurrentTetrimino();
//   changeChoosenPattern(-1);
// }

// const moveTetriminoRight=()=>{
//   if(blockList.some(index=>index%width===width-1) || blockList.some(index=>grids[index].classList.contains("restedBlock"))) return;
//   removeCurrentTetrimino();
//   blockList=blockList.map(index=>{
//     return index+1;
//   })
//   setCurrentTetrimino();
//   changeChoosenPattern(1);
// }

// const moveTetriminoDown=()=>{
//   blockList.some(index=>{
//     if((index<=189) &&grids[index+width].classList.contains("restedBlock") || grids[index].classList.contains("finalGrid")){
//       touchGround=true;
//       return;
//     }
//   })
//   if(touchGround){
//     assignRestBlocks();
//     return;
//   }
//   else{
//     removeCurrentTetrimino();
//     blockList=blockList.map(index=>index+width);  
//     setCurrentTetrimino();
//     downTimer=setTimeout(moveTetriminoDown,500);
//   }
//   changeChoosenPattern(width);
// }


// const fastFallTetrimino=()=>{
   
// }


// const rotateTetrimino=()=>{
//   removeCurrentTetrimino();
//   rCount=(rCount+1)%4;
//   choosenPattern[rCount].forEach((index,i)=>blockList[i]=index);
//   setCurrentTetrimino();
// }


// //Blocks when they are not falling 
// const assignRestBlocks=()=>{
//   document.querySelectorAll("block").forEach(index=>index.classList.add("restedBlock"));
//   document.querySelectorAll("block").forEach(index=>index.classList.remove("block"));
//   selectTetrimino();
//   return;
// }
// selectTetrimino();
