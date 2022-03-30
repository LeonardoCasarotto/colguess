
var points = 0;
function newgame(){
    document.getElementById("start").style.display = "none";
    document.getElementById("choose").style.display = "block";
    document.getElementById("game").style.display = "block";
    start();
}
function start(){

    for(let i=1;i<7;i++){
     document.getElementById(i).style.backgroundColor=random();
    }
    document.getElementById("color").innerHTML= "What is "+ document.getElementById((Math.floor(Math.random()*7)+1)).style.backgroundColor +" ?";


}
function random(){
    let color = "rgb("+ Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+")";
    return color;

}

function verify(color, colguess){
    colguess=colguess.slice(8,colguess.length-2);
    if(colguess==color){
        points++;
        document.getElementById("points").innerHTML="Points :"+points;

    }
    else{
        if(points>0){
            points--;

        }
        else if(points==0){

        }
        document.getElementById("points").innerHTML="Points :"+points;

    }
    start();

}