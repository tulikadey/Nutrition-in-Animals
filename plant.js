function herb(){
    window.location="herb.html";  
}

function can(){
    window.location="can.html";  
}

function omn(){
    window.location="omn.html";  
}

function tri(){
    window.location="tri.html";  
}

function quiz(){
    window.location="quiz.html";  
}
function home(){
    window.location="index.html";
}
var score1=Number(localStorage.getItem("score"));
function next(){
    ans=document.getElementById("monkeys").checked;
    if(ans== true){
        score1+=1;
        console.log(score1);
        localStorage.setItem("score",score1);
    }
    window.location="Q2.html";
}