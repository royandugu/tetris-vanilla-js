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
let choosenTetrimino;


//Listen to keyboard entries
const keyListen=(e)=>{
  if(e.keyCode===37) (blockList.some(index=>index%width===0) || blockList.some(index=>grids[index-1].classList.contains("restedBlock")))?direction=0:direction=-1;
  else if(e.keyCode===39) (blockList.some(index=>index%width===width-1) || blockList.some(index=>grids[index+1].classList.contains("restedBlock")))?direction=0:direction=1
  else if(e.keyCode===82) {
    (choosenPattern.length>0) && choosenPattern[(rCount+1)%4].every((indx,i)=>{
        if(grids[indx].classList.contains("restedBlock")) {
          console.log("No rotation");
          return false;
        }
        if(i===3) rCount=(rCount+1)%4;
        else return true;

    })
  }
}

document.addEventListener("keydown",keyListen);
 

const selectTetrimino=()=>{
  rCount=0;
  touchGround=false;
  blockList=[];
  const randomIndex=Math.floor(Math.random()*5);
  choosenPattern=theTetrominoes[randomIndex];
  showTetrimino();
  return;
}


const assignRestBlocks=()=>{
  if(blockList.length>0){
    blockList.forEach(index=>{
      grids[index].classList.remove("block");
      grids[index].classList.add("restedBlock");
    })
  }
  return;
}


const showTetrimino=()=>{
  choosenPattern[rCount].forEach((index,i)=>blockList[i]=index);
  blockList.forEach(index=>grids[index].classList.add("block"));
  setTimeout(()=>moveTetrimino(),500);
}


const moveTetrimino=()=>{
    //Convert to loop logic rather than recursion
    blockList.forEach(index=>{
      if(index<=189){
        if(grids[index+width].classList.contains("restedBlock"))touchGround=true;
      }
      else touchGround=true;
    })
    if(touchGround) {
      assignRestBlocks();
      selectTetrimino();
      console.log("Function will return");
      return;
    }
    else{
    blockList.forEach(indx=>{
      grids[indx].classList.remove("block");
    });
    for(i=0;i<choosenPattern.length;i++){
      choosenPattern[i]=choosenPattern[i].map(indx=>indx+width+direction);  
    }
    choosenPattern[rCount].forEach((indx,i)=>blockList[i]=indx);
    direction=0;
    blockList.forEach(indx=>grids[indx].classList.add("block"));
    setTimeout(()=>moveTetrimino(blockList),500);
  }
}

selectTetrimino();