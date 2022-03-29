// Declare 7 constant variables on global scope to get access to specific elements with which we are going to interact
const leftTopQuadrant = document.getElementsByClassName("left-top-quadrant");
const rightTopQuadrant = document.getElementsByClassName("right-top-quadrant");
const leftBottomQuadrant = document.getElementsByClassName("left-bottom-quadrant");
const rightBottomQuadrant = document.getElementsByClassName("right-bottom-quadrant");
const onButton = document.getElementById("on");
const goButton = document.getElementById("go");
const levelCounter = document.getElementById("turn");

// EventListener for power button to turn the game on
onButton.addEventListener ("click", (event) => {
    let on;
    let intervalId;

    if (onButton.checked == true) {
      on = true;
      levelCounter.innerHTML = "HI!";
    } else {
      on = false;
      levelCounter.innerHTML = "";
      clearInterval(intervalId);
      clearColor ();
    }
});

// EventListener for go button to start the game using start game function if the game is on
// and also if player wins the game
goButton.addEventListener ("click", (event) => {
    let on = true;
    let win = true;

    if (on == true || win == true) {
        startGame ();
    }
});

/**
 *  The main game loop called when the "go" button is pressed
 */ 
function startGame () {
  let win = false;
  let level = 1;
  let flash = 0;
  let intervalId = 0;
  let good = true;
  let compSequence = [];
  let humanSequence = [];
  levelCounter.innerHTML = 1;

  for (let i = 0; i < 12; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1);
  }
  let compTurn = true;

  intervalId = setInterval(gameTurn, 1000);
};

/**
 * When invoked it flashes the colors every 350ms in random order & increments the level by 1
 * when player guess the correct order
 */
function gameTurn () {
  let on;
  on = false;
  let flash;
  let level;
  let intervalId;
  let compTurn;
  let compSequence = [];

  if (flash == level) {
    on = true;
    compTurn = false;
    clearInterval(intervalId);
    clearColor ();
  }

  if (compTurn) {
    clearColor ();
    setTimeout (() => {
      if (compSequence[flash] == 1) firstQuadrant ();
      if (compSequence[flash] == 2) secondQuadrant ();
      if (compSequence[flash] == 3) thirdQuadrant ();
      if (compSequence[flash] == 4) fourthQuadrant ();

      flash++;
    }, 350);
  }
};

/**
 * Returns the colors to their original state after each flash is done by the computer
 */
function clearColor () {
  leftTopQuadrant[0].style.backgroundColor = "navy";
  rightTopQuadrant[0].style.backgroundColor = "red";
  leftBottomQuadrant[0].style.backgroundColor = "gold";
  rightBottomQuadrant[0].style.backgroundColor = "green";
};


// 4 functions with which computer flashes the colors at random order making them transparent
function firstQuadrant () {
  leftTopQuadrant[0].style.backgroundColor = "transparent"
};

function secondQuadrant () {
  rightTopQuadrant[0].style.backgroundColor = "transparent"
};

function thirdQuadrant () {
  leftBottomQuadrant[0].style.backgroundColor = "transparent"
};

function fourthQuadrant () {
  rightTopQuadrant[0].style.backgroundColor = "transparent"
};

