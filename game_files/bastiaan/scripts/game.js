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
let gameName = document.getElementById("gamenameb")

//sfx
let menuMusic = new Audio("../game_files/bastiaan/sounds/DasGrosseGrillen.mp3");
let gameMusic = new Audio("../game_files/bastiaan/sounds/TURBOFOLK.mp3");

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
    if (muteButton) {
        muteButton.style.display = "none";
    }
    if (backButton) {
        backButton.style.display = "none";
    }
    if (creditsBlock) {
        creditsBlock.style.display = "none";
    }
}

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
    startScreen.style.display = "block"
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
    gameStarter.style.display = "none";
    settingsButton.style.display = "none";
    creditsButton.style.display = "none";
    gameName.style.display = "none";
    creditsBlock.style.display = "block";
    backButton.style.display = "block";
}