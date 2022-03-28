// Declare 7 constant variables on global scope to get access to specific elements with which we are going to interact
const leftTopQuadrant = document.getElementsByClassName("left-top-quadrant");
const rightTopQuadrant = document.getElementsByClassName("right-top-quadrant");
const leftBottomQuadrant = document.getElementsByClassName("left-bottom-quadrant");
const rightBottomQuadrant = document.getElementsByClassName("right-bottom-quadrant")
const onButton = document.getElementById("on");
const goButton = document.getElementById("go");
const levelCounter = document.getElementById("turn");

onButton.addEventListener ("click", (event) => {
        let on;
        if (onButton.checked == true) {
            on = true;
            levelCounter.innerHTML = "HI!";
            onButton.inner.HTML.style.background = "green"
        } else {
            on = false
            levelCounter.innerHTML = "";
        }
    })