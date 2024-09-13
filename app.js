let gameSequence=[];
let userSequence=[];

let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");
let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;


        levelUp();
    }
    
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    gameFlash(randomBtn);
}

function checkAns(idx){
    
    if(gameSequence[idx]==userSequence[idx]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor="rgb(12, 12, 42)";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSequence.push(userColor);
    checkAns(userSequence.length-1);
    
}


let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}