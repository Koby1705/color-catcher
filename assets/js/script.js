const leftTopQuadrant = document.getElementsByClassName("left-top-quadrant");
const rightTopQuadrant = document.getElementsByClassName("right-top-quadrant");
const leftBottomQuadrant = document.getElementsByClassName("left-bottom-quadrant");
const rightBottomQuadrant = document.getElementsByClassName("right-bottom-quadrant");
const onButton = document.getElementById("on");
const goButton = document.getElementById("go");
const levelCounter = document.getElementById("turn");


let intervalId;
let win;
let good;

let compSequence = [];
let humanSequence = [];

let compTurn;
let flash;
let level;
let on;

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

goButton.addEventListener ("click", (event) => {
    if (on == true || win == true) {
        startGame ();
    }
});

function startGame () {
  win = false;
  level = 1;
  flash = 0;
  intervalId = 0;
  good = true;
  compSequence = [];
  levelCounter.innerHTML = 1;
  
  for (let i = 0; i < 12; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1);
  }
  
  compTurn = true;
  
  intervalId = setInterval(gameTurn, 1000);
}

function gameTurn () {
  on = false;

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
}

function clearColor () {
  leftTopQuadrant[0].style.backgroundColor = "navy";
  rightTopQuadrant[0].style.backgroundColor = "red";
  leftBottomQuadrant[0].style.backgroundColor = "gold";
  rightBottomQuadrant[0].style.backgroundColor = "green";
}

function firstQuadrant () {
  leftTopQuadrant[0].style.backgroundColor = "black";
}

function secondQuadrant () {
  rightTopQuadrant[0].style.backgroundColor = "black";
}

function thirdQuadrant () {
  leftBottomQuadrant[0].style.backgroundColor = "black";
}

function fourthQuadrant () {
  rightBottomQuadrant[0].style.backgroundColor = "black";
}

leftTopQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(1);
    checkCorrectAnswers ();
    firstQuadrant ();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

rightTopQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(2);
    checkCorrectAnswers ();
    secondQuadrant ();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

leftBottomQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(3);
    checkCorrectAnswers ();
    thirdQuadrant ();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

rightBottomQuadrant[0].addEventListener('click', (event) => {
  if (on) {
    humanSequence.push(4);
    checkCorrectAnswers ();
    fourthQuadrant ();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 450);
    }
  }
});

function congratulations () {
  win = true;
  on = false;
  levelCounter.innerHTML = "WON!";
}

function checkCorrectAnswers () {
  if (humanSequence[humanSequence.length - 1] !== compSequence[humanSequence.length - 1]) good = false;
  
  if (good == false) {
    levelCounter.innerHTML = "NO!";
    darkred ();
    compTurn = true;
    flash = 0;
    humanSequence = [];
    good = true;
    intervalId = setInterval(gameTurn, 1000);
    setTimeout (() => {
    levelCounter.innerHTML = level;
    clearColor ();
    }, 600);
  }

  if (humanSequence.length == level && !win && good == true) {
  level ++;
  flash = 0;
  compTurn = true;
  humanSequence = [];
  levelCounter.innerHTML = level;
  intervalId = setInterval(gameTurn, 1000);
  }

  if (humanSequence.length == 12 && good == true) {
    congratulations ();
    darkred ();
  }
}


function darkred () {
  leftTopQuadrant[0].style.backgroundColor = "darkred";
  rightTopQuadrant[0].style.backgroundColor = "darkred";
  leftBottomQuadrant[0].style.backgroundColor = "darkred";
  rightBottomQuadrant[0].style.backgroundColor = "darkred";
}