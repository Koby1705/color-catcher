// Declare 7 constant variables on global scope to get access to specific elements with which we are going to interact
const leftTopQuadrant = document.getElementsByClassName("left-top-quadrant");
const rightTopQuadrant = document.getElementsByClassName("right-top-quadrant");
const leftBottomQuadrant = document.getElementsByClassName("left-bottom-quadrant");
const rightBottomQuadrant = document.getElementsByClassName("right-bottom-quadrant");
const onButton = document.getElementById("on");
const goButton = document.getElementById("go");
const levelCounter = document.getElementById("turn");

// Variables declared at global scope
let intervalId;
let win;
let good;
// Empty array in which computer performs the random sequence
let compSequence = [];

// Empty array in which player tries to repeat the computer sequence to win the game
let humanSequence = [];

let compTurn;
let flash;
let level;

// EventListener for power button to turn the game on
onButton.addEventListener ("click", (event) => {
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
    if (on == true || win == true) {
        startGame ();
    }
});

/**
 *  The main game loop called when the "go" button is pressed
 */ 
function startGame () {
  win = false;
  level = 1;
  flash = 0;
  intervalId = 0;
  good = true;
  compSequence = [];
  levelCounter.innerHTML = 1;
  
  // Creates and loops through array with 12 random numbers(levels), from 1-4 using Math.floor to round the numbers
  for (let i = 0; i < 12; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1);
  }
  // Starts with the computer flashing lights
  compTurn = true;
  
  // Runs the gameTurn function every 1sec
  intervalId = setInterval(gameTurn, 1000);
};

/**
 * When invoked it's going to stop flashes of the the colors for 350ms in random order & increments the level by 1
 * when player guess the correct order
 */
function gameTurn () {
  on = false;

  // Depends on which level the game is, equals the number of flashes
  if (flash == level) {
    on = true;
    compTurn = false;
    clearInterval(intervalId);
    clearColor ();
  }

  // When it's computer turn, depending on which item is in the array corresponds the appropriate function defined below
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


// 4 functions with which computer flashes the colors at random order making them black
function firstQuadrant () {
  leftTopQuadrant[0].style.backgroundColor = "black";
};

function secondQuadrant () {
  rightTopQuadrant[0].style.backgroundColor = "black";
};

function thirdQuadrant () {
  leftBottomQuadrant[0].style.backgroundColor = "black";
};

function fourthQuadrant () {
  rightBottomQuadrant[0].style.backgroundColor = "black";
};

// 4 eventListeners which allow user to click on certain quadrant when the game is on, and while the game is not won 
// the colors are going to be cleared after 450ms and after user clicks any quadrant by calling clearColor function
leftTopQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(1);
    firstQuadrant ();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

rightTopQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(2);
    firstQuadrant ();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

leftBottomQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(3);
    firstQuadrant ();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

rightBottomQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(4);
    firstQuadrant ();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});