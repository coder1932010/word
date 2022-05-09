 points=0;
 function update() {
     points=points+1;
     document.getElementById("score").innerHTML="score= "+points;

     
 }

 function savescore() {
     localStorage.setItem("points",points);

     
 }
 function next(){
     window.location="activity_2.html";
 }