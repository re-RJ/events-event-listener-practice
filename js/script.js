////Exercise #1////
var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function() {
    fans.innerText = "123k";
});

fish.addEventListener("mouseover", function() {
    fish.innerText = "47k";
})

;pets.addEventListener("mouseover", function() {
    pets.innerText = "20k";
});


////Exercise #2////
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var quincyMode = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function() {
    if (body.classList.contains("light")){
        body.classList.remove("light");
        ball.classList.remove("move-right");
        quincyMode.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        quincyMode.innerText = "Party Quincy";
    }
});