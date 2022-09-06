const gridContainer=document.querySelector(".gridContainer");
for(let i=0;i<=199;++i){
    const div=document.createElement("div");
    div.textContent=i;
    gridContainer.appendChild(div);
}


//Game constants
const grids=document.querySelectorAll(".gridContainer div");
const width=10;
const futureContainer=document.querySelector(".futureContainer");
for(let i=0;i<16;i++){
  const div=document.createElement("div");
  div.textContent=i;
  futureContainer.appendChild(div);
}
const futureGrids=document.querySelectorAll(".futureContainer div");


//Tetrimino testing
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


//Variables
let gameEnded=false;
let blockList=[];
let direction=0;
let touchGround=false;
let choosenPattern;
let rCount=0;
let choosenTetrimino;
let randomIndex=[];
let i,j;

randomIndex[0]=Math.floor(Math.random()*5);
randomIndex[1]=Math.floor(Math.random()*5);



//Listen to keyboard entries
const keyListen=(e)=>{
  if(e.keyCode===37) moveTetriminoLeft();
  else if(e.keyCode===39) moveTetriminoRight();
  else if(e.keyCode===82) rotateTetrimino();
}

document.addEventListener("keydown",keyListen);


const assignRestBlocks=()=>{
  if(blockList.length>0){
    blockList.forEach(index=>{
      grids[index].classList.remove("block");
      grids[index].classList.add("restedBlock");
    })
  }
  return;
}


const selectTetrimino=()=>{
  rCount=0;
  touchGround=false;
  blockList=[];
  randomIndex[0]=Math.floor(Math.random()*5);
  randomIndex[1]=Math.floor(Math.random()*5);
  choosenPattern=theTetrominoes[randomIndex[0]];
  showTetrimino();
}


const showTetrimino=()=>{
  choosenPattern[rCount].forEach((index,i)=>blockList[i]=index);
  setTetrimino();
  setTimeout(()=>moveTetriminoDown(),500);
}


const setTetrimino=()=>{
  blockList.forEach(index=>grids[index].classList.add("block"));
}


const removeTetrimino=()=>{
  blockList.forEach(index=>grids[index].classList.remove("block"));
}


const moveTetriminoLeft=()=>{
  if(blockList.some(index=>index%width===0) || blockList.some(index=>grids[index].classList.contains("restedBlock"))) return;
  removeTetrimino();
  blockList=blockList.map(index=>{
    return index-1; 
  });
  setTetrimino();
}


const moveTetriminoRight=()=>{
  if(blockList.some(index=>index%width===width-1) || blockList.some(index=>grids[index].classList.contains("restedBlock"))) return;
  removeTetrimino();
  blockList=blockList.map(index=>{
    return index+1;
  })
  setTetrimino();
}


const moveTetriminoDown=()=>{
  if(blockList.some(index=>grids[index].classList.contains("restedBlock") || index>189)) return;
  removeTetrimino();
  blockList=blockList.map(index=>{
    return index+width;
  })
  setTetrimino();
  setTimeout(moveTetriminoDown,500);
}


const rotateTetrimino=()=>{
  removeTetrimino();
  rCount+=rCount%4;
  choosenPattern[rCount].forEach((index,i)=>blockList[i]=index);
  showTetrimino();
}



// const moveTetrimino=()=>{
//     //Convert to loop logic rather than recursion
//     blockList.forEach(index=>{
//       if(index<=189){
//         if(grids[index+width].classList.contains("restedBlock"))touchGround=true;
//       }
//       else touchGround=true;
//     })
//     if(touchGround) {
//       assignRestBlocks();
//       selectTetrimino();
//       return;
//     }
//     else{
//     blockList.forEach(indx=>{
//       grids[indx].classList.remove("block");
//     });
//     for(i=0;i<choosenPattern.length;i++){
//       choosenPattern[i]=choosenPattern[i].map(indx=>indx+width+direction);  
//     }
//     choosenPattern[rCount].forEach((indx,i)=>blockList[i]=indx);
//     direction=0;
//     blockList.forEach(indx=>grids[indx].classList.add("block"));
//     setTimeout(()=>moveTetrimino(blockList),500);
//   }
// }

selectTetrimino();