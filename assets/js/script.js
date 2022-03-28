// Declare 7 constant variables on global scope to get access to specific elements with which we are going to interact
const leftTopQuadrant = document.getElementsByClassName("left-top-quadrant");
const rightTopQuadrant = document.getElementsByClassName("right-top-quadrant");
const leftBottomQuadrant = document.getElementsByClassName("left-bottom-quadrant");
const rightBottomQuadrant = document.getElementsByClassName("right-bottom-quadrant")
const onButton = document.getElementById("on");
const goButton = document.getElementById("go");
const levelCounter = document.getElementById("turn");

// EventListener for power button to turn the game on
onButton.addEventListener ("click", (event) => {
    let on;

    if (onButton.checked == true) {
      on = true;
      levelCounter.innerHTML = "HI!";
    } else {
      on = false
      levelCounter.innerHTML = "";
    }
});

// EventListener for go button to start the game using start game function if the game is on
// and also if player wins the game
goButton.addEventListener ("click", (event) => {
    let on;
    let win;

    if (on == true || win == true) {
        startGame ();
    }
});

/**
 *  The main game loop called when the "go" button is pressed
 */ 
function startGame () {
  win = false;
  levelCounter.innerHTML = 1;
  let level = 1;
  let flash = 0;
  let intervalId = 0;
  let good = true;
  let compSequence = [];
  let humanSequence = [];
  for (let i = 0; i < 12; i++) {
    compSequence.push(Math.floor(Math.random () * 4) + 1);
  }
  let compTurn = true;

  intervalId = setInterval(gameTurn, 1000);
}