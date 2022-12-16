let start = document.getElementById("startGame")
let menuMusic = new Audio("../game_files/bastiaan/sounds/DasGrosseGrillen.mp3")
let gameStarter = document.getElementById("gamestarter")
let settingsButton = document.getElementById("settings")
let creditsButton = document.getElementById("credits")

// function that gets the menu set up
function loadMenu() {
menuMusic.play()
//hides the start button and shows the menu buttons
start.style.display = "none"
gameStarter.style.display = "block"
settingsButton.style.display = "block"
creditsButton.style.display = "block"
}

function loadGame() {
    console.log("loading game!")
}

function loadSettings() {
    console.log("settings loading!")
}