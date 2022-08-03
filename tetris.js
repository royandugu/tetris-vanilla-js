const gridContainer=document.querySelector(".gridContainer");
for(let i=0;i<=199;++i){
    const div=document.createElement("div");
    div.textContent=i;
    gridContainer.appendChild(div);
}


//Game constants
const grids=document.querySelectorAll(".gridContainer div");
const width=10;


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


//Listen to keyboard entries
const keyListen=(e)=>{
  if(e.keyCode===37) (blockList.some(index=>index%width===0))?direction=0:direction=-1;
  else if(e.keyCode===39) (blockList.some(index=>index%width===width-1))?direction=0:direction=1
  else if(e.keyCode===82) {
    rCount=(rCount+1)%5;
  }
}

document.addEventListener("keydown",keyListen);


const selectTetrimino=()=>{
  touchGround=false;
  blockList=[];
  const randomIndex=Math.floor(Math.random()*5);
  choosenPattern=theTetrominoes[randomIndex];
  showTetrimino();
}


const assignRestBlocks=()=>{
  if(blockList.length>0){
    blockList.forEach(indx=>{
      grids[indx].classList.add("restedBlock");
    })
  }
}


const showTetrimino=()=>{
  for(let i=0;i<choosenPattern.length;++i) {
    console.log(rCount);
    grids[choosenPattern[rCount][i]].classList.add("block");
    blockList.push(choosenPattern[rCount][i]);
  }
  setTimeout(()=>moveTetrimino(),500);
}


const moveTetrimino=()=>{
    blockList.forEach(index=>{
      if(index<189){
        if(grids[index+width].classList.contains("restedBlock"))touchGround=true;
      }
      else touchGround=true;
    })
    if(touchGround) {
      assignRestBlocks();
      selectTetrimino();
    }
    else{
    blockList.forEach(indx=>{
      grids[indx].classList.remove("block");
    });
    blockList=blockList.map(indx=>indx+width+direction);
    direction=0;
    blockList.forEach(indx=>grids[indx].classList.add("block"));
    setTimeout(()=>moveTetrimino(blockList),500);
  }
}

selectTetrimino();
  