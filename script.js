// console.log("hello world");

var welcomeContaner = document.getElementById("welcome");
var startButton = document.getElementById("create-pizza");

startButton.addEventListener("click", function(){
    welcomeContainer.style.display = "none";
})