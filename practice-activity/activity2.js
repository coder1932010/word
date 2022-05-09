function back(){
    window.location="activity_1.html";

}
function getscore(){
score=localStorage.getItem("points");
document.getElementById("update").innerHTML="<h1>score="+score+"</h1>";
}
    
