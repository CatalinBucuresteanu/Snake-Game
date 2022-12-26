var blocksize,rows,columns,board,context;
blocksize=25;
rows=20;
columns=20;
var score=0;
 var snakex=blocksize*5;
 var snakey=blocksize*5;
var foodx;
var foody 
var snakebody=[];
var velocityx=0,velocityy=0;
var gameover=false;
window.onload=function(){
    board=document.getElementById("canvas");
    board.height=rows*blocksize;
    board.width=columns*blocksize;
    context=board.getContext("2d");
    placefood();
    document.addEventListener("keyup",changedirection);
        setInterval(update,1000/10);
    
   
}

function update(){
 if(gameover){
    return;
 }
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);
    context.fillStyle="red";
    context.fillRect(foodx,foody,blocksize,blocksize);
    context.fillStyle="lime";
    snakex+=velocityx*blocksize;
    snakey+=velocityy*blocksize;
    context.fillRect(snakex,snakey,blocksize,blocksize);
    if(snakex==foodx&&snakey==foody){
        snakebody.push([foodx,foody])
        placefood();
    }
    if(snakebody.length){
        snakebody[0]=[snakex,snakey];
    }
    for(let i=snakebody.length-1;i>0;i--){
        snakebody[i]=snakebody[i-1];
    }
    for(let i=0;i<snakebody.length;i++){
        context.fillRect(snakebody[i][0],snakebody[i][1],blocksize,blocksize);
    }
    if(snakex<0||snakex>columns*blocksize||snakey<0||snakey>rows*blocksize){
        gameover=true;
        alert("Game Over");
        alert(score);
    }

    }
function changedirection(e){
    if(e.code=="ArrowUp"){
        velocityx=0;
        velocityy=-1;
        context.fillRect(snakex,snakey,blocksize,blocksize);
    }
    else if(e.code=="ArrowDown"){
        velocityx=0;
        velocityy=1;
        context.fillRect(snakex,snakey,blocksize,blocksize);
    }
    else if(e.code=="ArrowLeft"){
        velocityx=-1;
        velocityy=0;
        context.fillRect(snakex,snakey,blocksize,blocksize);
    }
    else if(e.code=="ArrowRight"){
        velocityx=1;
        velocityy=0;
        context.fillRect(snakex,snakey,blocksize,blocksize);
    }
    }
function placefood(){
    foodx=Math.floor(Math.random()*columns)*blocksize;
    foody=Math.floor(Math.random()*rows)*blocksize;
}