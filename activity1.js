 var score = 0;
 function kyra(){
    score = score + 1;
    document.getElementById("score").innerHTML="score :"+ score;
}
function pooja(){

localStorage.setItem("heer",score);
}