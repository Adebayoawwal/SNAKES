//head
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX =  blockSize *5;
var snakeY =  blockSize *5;

var speedX = 0;
var speedY = 0;

// food
var foodX;
var foodY;

window.onload = function()
{
  board = document.getElementById("board");
  board.height = rows * blockSize;
  board.width = cols * blockSize;
  context = board.getContext("2d");//used for drawing on the board

  placeFood();
  document.addEventListener("keyup", changeDirection)
  //update();
 setInterval(update, 1000/10);    
}

function update()
{
 context.fillStyle ="black";
 context.fillRect(0,0,board.width,board.height);

 context.fillStyle ="red";
 context.fillRect(foodX,foodY,blockSize,blockSize);

 if(snakeX == foodX && snakeY == foodY ){
    placeFood();
 }

 context.fillStyle ="lime";
 snakeX += speedX * blockSize;
 snakeY += speedY * blockSize;
 context.fillRect(snakeX,snakeY,blockSize,blockSize);


}
function changeDirection(e){
 if(e.code == "ArrowUp"){
   speedX = 0;
   snakeY = -1;
 }
 else if(e.code == "ArrowDown"){
    speedX = 1;
    snakeY = 0;
  }
 else if(e.code == "ArrowLeft"){
    speedX = -1;
    snakeY = 0;
  }
 else if(e.code == "ArrowRight"){
    speedX = 1;
    snakeY = 0;
  }
}
function placeFood(){
    foodX =Math.floor(Math.random() * cols) * blockSize;
    foodY =Math.floor(Math.random() * rows) * blockSize; 
 
}