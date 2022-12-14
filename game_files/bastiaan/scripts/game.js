let start = document.getElementById("startGame")
let menuMusic = new Audio("../game_files/bastiaan/sounds/DasGrosseGrillen.mp3")
let gameStarter = document.getElementById("gamestarter")

function loadMenu() {
menuMusic.play()
start.style.display = "none"
gameStarter.style.display = "block"
}