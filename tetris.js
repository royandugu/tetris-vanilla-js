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
  [1, width+1, width*2+1, 2],
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

const selectTetrimino=()=>{
  if(gameEnded===true) return;
  const randomIndex=Math.floor(Math.random()*5);
  const selectedTetrimino=theTetrominoes[randomIndex];
  showTetrimino(selectedTetrimino);
  //const timerLapse=setTimeout(selectTetrimino,5000);
}
const showTetrimino=(selectedTetrimino)=>{
  for(let i=0;i<selectedTetrimino.length;++i) {
    grids[selectedTetrimino[0][i]].classList.add("block");
    blockList.push(selectedTetrimino[0][i]);
  }
  setTimeout(()=>fallTetrimino(blockList),2000);
}
const fallTetrimino=(blockList)=>{
  blockList.forEach(indx=>{
    grids[indx].classList.remove("block");
  });
  blockList=blockList.map(indx=>indx+width);
  blockList.forEach(indx=>grids[indx].classList.add("block"));
  setTimeout(()=>fallTetrimino(blockList),2000);
}

selectTetrimino();
  