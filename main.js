let leftbtn=document.getElementById("leftbtn");
let rd=document.getElementById('ritik')
function slideleft() {
    console.log("work");
    rd.style.animation='3s linear slidein';
}
leftbtn.addEventListener("click",slideleft);