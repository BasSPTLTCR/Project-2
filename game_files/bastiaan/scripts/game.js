//buttons
let start = document.getElementById("startGame");
let gameStarter = document.getElementById("gamestarter");
let settingsButton = document.getElementById("settings");
let creditsButton = document.getElementById("credits");
let muteButton = document.getElementById("mute");
let backButton = document.getElementById("back");

//divs and text
let creditsBlock = document.getElementById("creditsdiv");
let startScreen = document.getElementById("blackstartscreen")
let deathScreen = document.getElementById("deathscreen")
let gameName = document.getElementById("gamenameb")
let textInter = document.getElementById("textinter")

let character = document.getElementById("berkhout")
let pipe = document.getElementById("obstacle1")

//sfx
let menuMusic = new Audio("../game_files/bastiaan/sounds/DasGrosseGrillen.mp3");
let gameMusic = new Audio("../game_files/bastiaan/sounds/TURBOFOLK.mp3");

//values
let gameStarted = false

// function that gets the menu set up
function loadMenu() {
    //starts music
    menuMusic.play();
    //loops music
    menuMusic.loop = true;
    //hides the start button and shows the menu buttons
    start.style.display = "none";
    gameStarter.style.display = "block";
    settingsButton.style.display = "block";
    creditsButton.style.display = "block";
    gameName.style.display = "block";
    //If button or div is there, hide it
    if (muteButton) {
        muteButton.style.display = "none";
    }
    if (backButton) {
        backButton.style.display = "none";
    }
    if (creditsBlock) {
        creditsBlock.style.display = "none";
    }
    if (character) {
        character.style.display = "none";
    }
    //If the game for whatever reason is still started, turn it off.
    if (gameStarted = true) {
        gameStarted = false
    }
}

function loadSettings() {
    //console.log("settings loading!")
    gameStarter.style.display = "none";
settingsButton.style.display = "none";
gameName.style.display = "none";
creditsButton.style.display = "none";
muteButton.style.display = "block";
backButton.style.display = "block";
}

function musicMute () {
    //if music is not muted, mute music, if music is  muted, unmute music
    if (menuMusic.muted == false) {
        menuMusic.muted = true;
    }
    else {
        menuMusic.muted = false;
    }
    if (gameMusic.muted == false) {
        gameMusic.muted = true;
    }
    else {
        gameMusic.muted = false;
    }
}

function loadCredits() {
    //adds credits
    gameStarter.style.display = "none";
    settingsButton.style.display = "none";
    creditsButton.style.display = "none";
    gameName.style.display = "none";
    creditsBlock.style.display = "block";
    backButton.style.display = "block";
}


// Game stuff starts here

function loadGame() {
    //hides buttons
   gameStarter.style.display = "none";
   settingsButton.style.display = "none";
   creditsButton.style.display = "none";
   gameName.style.display = "none";
   //mutes old music
   menuMusic.muted = true;
   //starts new music
   gameMusic.play();
   gameMusic.loop = true;
   startScreen.style.display = "block";


   
}

// if enter is pressed, game starts, game start window is hidden.
window.addEventListener("keydown", function(e){
   if(e.key == "Enter") {
    if (startScreen.style.display == "block") {
        startScreen.style.display = "none"
        gameStarted = true
        if (gameStarted = true) {
            gameController()
        }
        //for debugging purposes
        else {
            console.log("Something went wrong with gamestarted!")
        }
    }
    else {
        console.log("you cannot run this function right noW!")
    }
   }

})

function gameController() {
    character.style.display = "block";
    //random obstacle used to be here, too lazy to change it
    let obstacle = pipe
    //console.log(obstacle)
    //initiates block animation
    obstacle.style.display = "block"
    obstacle.style.animation = "blockMove 4s infinite linear";
    //console.log(charRect.top, charRect.right, charRect.bottom, charRect.left);
    //i somehow need to figure out how to figure out if a div touches a div

window.addEventListener("keydown", function(s){
    if(s.code == "Space") {
        if (character.style.display = "block") {
            if (gameStarted = true) {
                character.classList.add("jump");
                this.setTimeout(function() {
                    character.classList.remove("jump")
                },1000);
            }
        }
    }
})

window.addEventListener("keydown", function(c){
    if (c.code == "Escape") {
        textInter.innerText = "Game Paused"
        //handle the rest of the stuff, doing that later
    }
})