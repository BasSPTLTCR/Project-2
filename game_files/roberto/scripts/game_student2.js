/* Imports all cards from the texure folder. */
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
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_spades.png", value: 10 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_clubs.png", value: 11 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_diamonds.png", value: 11 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_hearts.png", value: 11 },
    { src: "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_spades.png", value: 11 }

];

/* Imports all sounds (voice FX) from the sounds folder. */
const sounds = [
    "../game_files/roberto/sounds/2.wav",
    "../game_files/roberto/sounds/3.wav",
    "../game_files/roberto/sounds/4.wav",
    "../game_files/roberto/sounds/5.wav",
    "../game_files/roberto/sounds/6.wav",
    "../game_files/roberto/sounds/7.wav",
    "../game_files/roberto/sounds/8.wav",
    "../game_files/roberto/sounds/9.wav",
    "../game_files/roberto/sounds/10.wav",
    "../game_files/roberto/sounds/11.wav",
    "../game_files/roberto/sounds/12.wav",
    "../game_files/roberto/sounds/13.wav",
    "../game_files/roberto/sounds/14.wav",
    "../game_files/roberto/sounds/15.wav",
    "../game_files/roberto/sounds/16.wav",
    "../game_files/roberto/sounds/17.wav",
    "../game_files/roberto/sounds/18.wav",
    "../game_files/roberto/sounds/19.wav",
    "../game_files/roberto/sounds/20.wav",
    "../game_files/roberto/sounds/21.wav"
];

/* Imports the other voice effects and sound effects */
let dealing_fx = new Audio('../game_files/roberto/sounds/dealing.mp3');
let anothercard_fx = new Audio('../game_files/roberto/sounds/another_card.wav');
let blackjack_fx = new Audio('../game_files/roberto/sounds/blackjack.wav');
let dealerbust_fx = new Audio('../game_files/roberto/sounds/dealer_bust.wav');
let dealerwins_fx = new Audio('../game_files/roberto/sounds/dealer_wins.wav');

/* Gets all the elements from the HTML page. */
/* Buttons */
let start_btn = document.getElementById("start");
let hit_btn = document.getElementById("hit_btn");
let pass_btn = document.getElementById("pass_btn");
let reset_btn = document.getElementById("reset_btn");
let voice_btn_enabled = document.getElementById("voice_btn_enabled");
let voice_btn_disabled = document.getElementById("voice_btn_disabled");

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

/* Show total values */
let dealer_value = document.getElementById("dealer_value");
let player_value = document.getElementById("player_value");

/* Imports result elements */
let result = document.getElementById("result");
let result_div = document.getElementById("result_div");

/* Default values */
let src;
let total_player = 0; /* Total value of the cards of the player */
let total_dealer = 0; /* Total value of the cards of the dealer */
let voice_effects_on = localStorage.getItem("voice_value");

/* Enable or disable functions for voice effects. */
function enable_voice() {
    voice_btn_enabled.style.display = "none";
    voice_btn_disabled.style.display = "block";
    localStorage.setItem("voice_value", "true");
}

function disable_voice() {
    voice_btn_enabled.style.display = "block";
    voice_btn_disabled.style.display = "none";
    localStorage.setItem("voice_value", "false");
}

/* Change button when clicked */
if (voice_effects_on == "true") {
    voice_btn_enabled.style.display = "none";
    voice_btn_disabled.style.display = "block";
}

if (voice_effects_on == "false") {
    voice_btn_enabled.style.display = "block";
    voice_btn_disabled.style.display = "none";
}

/* Start the blackjack game */
function start() {
    voice_effects_on = localStorage.getItem("voice_value");

    /* Make the elements/buttons visible */
    reset_btn.style.display = "block";
    dealer_value.style.display = "flex";
    player_value.style.display = "flex";
    start_btn.style.display = "none";
    voice_btn_enabled.display = "none";
    voice_btn_disabled.display = "none";

    /* Deal cards to the player and dealer */
    setTimeout(() => {
        randomize();
        dealing_fx.play();
        your_first_card.style.display = "block";
        your_first_card.src = src;
    }, 1000);
    setTimeout(() => {
        randomize();
        dealing_fx.play();
        your_second_card.style.display = "block";
        your_second_card.src = src;
    }, 2000);
    setTimeout(() => {
        randomize_dealer();
        dealing_fx.play();
        dealer_card.style.display = "block";
        dealer_card.src = src_dealer;
    }, 3000);
    setTimeout(() => {
        dealing_fx.play();
        dealer_second_card.style.display = "block";
        dealer_second_card.src = "http://127.0.0.1:5500/game_files/roberto/textures/cards/card_back.png";
    }, 4000);
    hit_btn.style.display = "block";
    pass_btn.style.display = "block";
    setTimeout(() => {
        hit_btn.removeAttribute("disabled");
        pass_btn.removeAttribute("disabled");
        hit_btn.style.backgroundColor = "rgb(24, 209, 24)";
        pass_btn.style.backgroundColor = "rgb(255, 0, 0)";

        /* Play voice effects if value is true */
        if (voice_effects_on == "true") {
            anothercard_fx.play();
        }

        /* Check for possible 21/blackjack */
        if (total_player == 21) {
            result.style.display = "block";
            result.innerText = "You won";
            hit_btn.setAttribute("disabled", "disabled");
            hit_btn.style.backgroundColor = "grey";
            pass_btn.setAttribute("disabled", "disabled");
            pass_btn.style.backgroundColor = "grey";
            result_menu();
        }
    }, 5000);
}

let count = 0;

/* Ask a card from the dealer (hit) */
function hit() {
    voice_effects_on = localStorage.getItem("voice_value");
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
        result.style.display = "block";
        result.innerText = "You lost";
        result_menu();
        if (voice_effects_on == "true") {
            dealerwins_fx.play();
        }

        pass_btn.setAttribute("disabled", "disabled")
        pass_btn.style.backgroundColor = "grey";
        hit_btn.style.backgroundColor = "grey";
        hit_btn.setAttribute("disabled", "disabled")
    }
    if (total_player == 21) {
        setTimeout(() => {
            blackjack_fx.play();
            result.style.display = "block";
            result.innerText = "You won";
            result_menu();
        }, 1000);

        pass_btn.setAttribute("disabled", "disabled")
        pass_btn.style.backgroundColor = "grey";
        hit_btn.style.backgroundColor = "grey";
        hit_btn.setAttribute("disabled", "disabled");
    }
}

function pass() {
    check();
    pass_btn.setAttribute("disabled", "disabled");
    pass_btn.style.backgroundColor = "grey";
    hit_btn.style.backgroundColor = "grey";
    hit_btn.setAttribute("disabled", "disabled");
}

let count_dealer = 0;

function check() {
    voice_effects_on = localStorage.getItem("voice_value");
    dealing_fx.play();
    randomize_dealer();
    dealer_second_card.style.display = "block";
    dealer_second_card.src = src_dealer;
    while (total_dealer <= 16) {
        count_dealer++;
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
    if (total_dealer > 21) {
        result.style.display = "block";
        result.innerText = "You won";
        if (voice_effects_on == "true") {
            dealerbust_fx.play();
        }
        result_menu();
    }
    if (total_player > total_dealer) {
        if (total_player > 21) {
            result.style.display = "block";
            result.innerText = "You lost";
            if (voice_effects_on == "true") {
                dealerwins_fx.play();
            }
            result_menu();
        }
        else {
            result.style.display = "block";
            result.innerText = "You won";
            result_menu();
        }
    }
    if (total_player < total_dealer) {
        if (total_dealer > 21) {
            result.style.display = "block";
            result.innerText = "You won";
            result_menu();
        }
        else {
            result.style.display = "block";
            result.innerText = "You lost";
            result_menu();
        }
    }
    if (total_player == total_dealer) {
        result.style.display = "block";
        result.innerText = "Draw";
        result_menu();
    }
    if (total_player == 21) {
        result.style.display = "block";
        result.innerText = "You won";
        result_menu();
    }
    if (total_dealer == 21) {
        if (voice_effects_on == "true") {
            dealerwins_fx.play();
        }
        result.style.display = "block";
        result.innerText = "You lost";
        result_menu();
    }
}

function randomize() {
    voice_effects_on = localStorage.getItem("voice_value");
    const index = Math.floor(Math.random() * cards.length);
    const randomCard = cards[index];
    src = randomCard.src;
    value = randomCard.value;
    total_player += value;
    player_value.innerText = "Player: " + total_player;

    if (value == 11) {
        if (total_player > 21) {
            value = 1;
        }
        else if (total_player >= 10) {
            value = 1
        }
    }

    if (voice_effects_on == "true") {
        if (total_player < 21) {
            let voice_src = sounds[total_player - 2];
            let played_voice_fx = new Audio(voice_src);
            played_voice_fx.play();
        }
    }

    console.log(total_player)
}

function randomize_dealer() {
    const index = Math.floor(Math.random() * cards.length);
    const randomCard = cards[index];
    src_dealer = randomCard.src;
    value_dealer = randomCard.value;
    total_dealer += value_dealer;
    dealer_value.innerText = "Dealer: " + total_dealer;

    if (value_dealer == 11) {
        if (total_dealer > 21) {
            value_dealer = 1;
        }
        else if (total_dealer >= 10) {
            value_dealer = 1
        }
    }
}

function result_menu() {
    reset_btn.style.marginRight = "0vw";
    reset_btn.style.marginTop = "5vh";
    reset_btn.style.width = "15vw";
    result_div.style.display = "block";
}

function reload() {
    localStorage.setItem("skip_mainmenu", "true");
    location.reload();
}