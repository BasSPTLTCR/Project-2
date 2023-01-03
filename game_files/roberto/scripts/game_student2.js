/* Gets all cards from the texure folder. */
const cards = [
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_clubs.png", value: 2 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_diamonds.png", value: 2 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_hearts.png", value: 2 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_spades.png", value: 2 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_clubs.png", value: 3 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_diamonds.png", value: 3 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_hearts.png", value: 3 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_spades.png", value: 3 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_clubs.png", value: 4 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_diamonds.png", value: 4 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_hearts.png", value: 4 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_spades.png", value: 4 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_clubs.png", value: 5 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_diamonds.png", value: 5 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_hearts.png", value: 5 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_spades.png", value: 5 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_clubs.png", value: 6 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_diamonds.png", value: 6 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_hearts.png", value: 6 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_spades.png", value: 6 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_clubs.png", value: 7 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_diamonds.png", value: 7 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_hearts.png", value: 7 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_spades.png", value: 7 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_clubs.png", value: 8 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_diamonds.png", value: 8 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_hearts.png", value: 8 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_spades.png", value: 8 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_clubs.png", value: 9 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_diamonds.png", value: 9 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_hearts.png", value: 9 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_spades.png", value: 9 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_clubs.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_diamonds.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_hearts.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_spades.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_clubs.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_diamonds.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_hearts.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_spades.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_clubs.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_diamonds.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_hearts.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_spades.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_clubs.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_diamonds.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_hearts.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_spades.png", value: 10 }
]

/* Gets all the elements from the HTML page. */
/* Buttons */
let start_btn = document.getElementById("start");
let hit_btn = document.getElementById("hit_btn");
let pass_btn = document.getElementById("pass_btn");
let reset_btn = document.getElementById("reset_btn");
/* Cards (Images) */
let your_first_card = document.getElementById("your_first_card");
let your_second_card = document.getElementById("your_second_card");
let your_third_card = document.getElementById("your_third_card");
let your_fourth_card = document.getElementById("your_fourth_card");
let your_fifth_card = document.getElementById("your_fifth_card");
let dealer_card = document.getElementById("dealer_card");
let dealer_second_card = document.getElementById("dealer_second_card");
let dealer_third_card = document.getElementById("dealer_third_card");
let dealer_fourth_card = document.getElementById("dealer_fourth_card");
let dealer_fifth_card = document.getElementById("dealer_fifth_card");
/* Shown total values */
let dealer_value = document.getElementById("dealer_value");
let player_value = document.getElementById("player_value");
/* The result */
let result = document.getElementById("result")

/* Imports audio from the sounds folder. */
let dealing_fx = new Audio('../game_files/roberto/sounds/dealing.mp3');

/* Default values */
let src;
let total_player = 0;
let total_dealer = 0;

function start() {
    hit_btn.setAttribute("disabled", "disabled")
    hit_btn.style.backgroundColor = "grey";
    pass_btn.setAttribute("disabled", "disabled")
    pass_btn.style.backgroundColor = "grey";

    reset_btn.style.display = "block";
    dealer_value.style.display = "flex";
    player_value.style.display = "flex";
    start_btn.style.display = "none";

    setTimeout(() => {
        randomize();
        dealing_fx.play();
        your_first_card.style.display = "block";
        your_first_card.src = src;
    }, 750);
    setTimeout(() => {
        randomize();
        dealing_fx.play();
        your_second_card.style.display = "block";
        your_second_card.src = src;
    }, 1500);
    setTimeout(() => {
        randomize_dealer();
        dealing_fx.play();
        dealer_card.style.display = "block";
        dealer_card.src = src_dealer;
    }, 2250);
    setTimeout(() => {
        dealing_fx.play();
        dealer_second_card.style.display = "block";
        dealer_second_card.src = "http://127.0.0.1:5500/game_files/roberto/textures/cards/card_back.png";
    }, 3000);
    hit_btn.style.display = "block";
    pass_btn.style.display = "block";
    setTimeout(() => {
        hit_btn.removeAttribute("disabled");
        pass_btn.removeAttribute("disabled");
        hit_btn.style.backgroundColor = "rgb(24, 209, 24)";
        pass_btn.style.backgroundColor = "rgb(255, 0, 0)";
    }, 3000);
}

let count = 0;

function hit() {
    count += 1;
    if (count == 1) {
        randomize();
        dealing_fx.play();
        your_third_card.style.display = "block";
        your_third_card.src = src;
    }
    if (count == 2) {
        randomize();
        dealing_fx.play();
        your_fourth_card.style.display = "block";
        your_fourth_card.src = src;
    }
    if (count == 3) {
        randomize();
        dealing_fx.play();
        your_fifth_card.style.display = "block";
        your_fifth_card.src = src;
    }
    if (total_player > 21) {
        check();
        pass_btn.setAttribute("disabled", "disabled")
        pass_btn.style.backgroundColor = "grey";
        hit_btn.style.backgroundColor = "grey";
        hit_btn.setAttribute("disabled", "disabled")
        console.log("You beeg noob lost")
    }
}

function pass() {
    check();
    pass_btn.setAttribute("disabled", "disabled")
    pass_btn.style.backgroundColor = "grey";
    hit_btn.style.backgroundColor = "grey";
    hit_btn.setAttribute("disabled", "disabled")
}

let count_dealer = 0;

function check() {
    dealing_fx.play();
    randomize_dealer();
    dealer_second_card.src = src_dealer;
    while (total_dealer <= 16) {
        console.log("dealer count: " + count_dealer)
        count_dealer += 1;
        console.log("Dealer var: " + total_dealer)
        if (count_dealer == 1) {
            randomize_dealer();
            dealing_fx.play();
            dealer_third_card.style.display = "block";
            dealer_third_card.src = src_dealer;
        }
        if (count_dealer == 2) {
            randomize_dealer();
            dealing_fx.play();
            dealer_fourth_card.style.display = "block";
            dealer_fourth_card.src = src_dealer;
        }
        if (count_dealer == 3) {
            randomize_dealer();
            dealing_fx.play();
            dealer_fifth_card.style.display = "block";
            dealer_fifth_card.src = src_dealer;
        }
    }
    if (total_player > total_dealer) {

    }
    if (total_player < total_dealer) {
        console.log("You lost");
    }
    if (total_player == total_dealer) {
        console.log("Draw");
    }
    if (total_player == 21) {
        console.log("you won")
    }
}

function randomize() {
    const index = Math.floor(Math.random() * cards.length);
    const randomCard = cards[index];
    src = randomCard.src;
    value = randomCard.value;
    total_player += value;
    player_value.innerText = "Player: " + total_player;
    console.log(src);
    console.log(value);
}

function randomize_dealer() {
    const index = Math.floor(Math.random() * cards.length);
    const randomCard = cards[index];
    src_dealer = randomCard.src;
    value_dealer = randomCard.value;
    total_dealer += value_dealer;
    dealer_value.innerText = "Dealer: " + total_dealer;
}

function reload() {
    location.reload();
}