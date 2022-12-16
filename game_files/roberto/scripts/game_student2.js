/* Gets all cards from the texure folder. */
const cards = ["http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/2_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/3_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/4_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/5_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/6_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/7_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/8_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/9_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/10_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/jack_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/king_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/queen_of_spades.png",
    "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_clubs.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_diamonds.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_hearts.png", "http://127.0.0.1:5500/game_files/roberto/textures/cards/ace_of_spades.png"];



/* Gets all the elements from the HTML page. */
let start_btn = document.getElementById("start");
let your_first_card = document.getElementById("your_first_card");
let your_second_card = document.getElementById("your_second_card");
let your_hit_card_1 = document.getElementById("your_hit_card_1");
let dealer_cards = document.getElementById("dealer_cards");
let dealer_second_cards = document.getElementById("dealer_second_cards");
let hit_btn = document.getElementById("hit_btn");
let pass = document.getElementById("pass");

/* Imports audio from the sounds folder. */
let audio = new Audio('../game_files/roberto/sounds/giving_card.mp3');

/* Sets the standard total value to zero. */
let total_value = 0;
let total_value_dealer = 0;

let middle;
let middle_dealer;

/* Starts the game with the start button. */


function start() {

    audio.play();
    start_btn.style.display = "none";
    calculate_value_player()
    your_first_card.src = middle;
    calculate_value_player()
    your_second_card.src = middle;
    calculate_value_dealer()
    dealer_cards.src = middle_dealer;
    dealer_cards.style.display = "block";
    your_first_card.style.display = "block";
    your_second_card.style.display = "block";
    hit_btn.style.display = "block";
    pass.style.display = "block";

}

function hit() {
    calculate_value_player();
    your_hit_card_1.src = middle;
    your_hit_card_1.style.display = "block";

    if(total_value == 21){
        console.log("Je hebt gewonnen")
    }else if(total_value > 21){
        console.log = "Je hebt verloren"
    }

    calculate_value_dealer()
    dealer_second_cards.src = middle_dealer;
    dealer_second_cards.style.display = "block";
}

function calculate_value_player() {

    /* Chooses a random card from the cards array. */
    let random_card = cards[Math.floor(Math.random() * cards.length)];
    middle = random_card;
    /* Check what card you have a set the total value */
    /* 2 */
    if (middle == cards[0]) {
        total_value += 2;
    }
    if (middle == cards[1]) {
        total_value += 2;
    }
    if (middle == cards[2]) {
        total_value += 2;
    }
    if (middle == cards[3]) {
        total_value += 2;
    }

    /* 3 */
    if (middle == cards[4]) {
        total_value += 3;
    }
    if (middle == cards[5]) {
        total_value += 3;
    }
    if (middle == cards[6]) {
        total_value += 3;
    }
    if (middle == cards[7]) {
        total_value += 3;
    }

    /* 4 */
    if (middle == cards[8]) {
        total_value += 4;
    }
    if (middle == cards[9]) {
        total_value += 4;
    }
    if (middle == cards[10]) {
        total_value += 4;
    }
    if (middle == cards[11]) {
        total_value += 4;
    }

    /* 5 */
    if (middle == cards[12]) {
        total_value += 5;
    }
    if (middle == cards[13]) {
        total_value += 5;
    }
    if (middle == cards[14]) {
        total_value += 5;
    }
    if (middle == cards[15]) {
        total_value += 5;
    }

    /* 6 */
    if (middle == cards[16]) {
        total_value += 6;
    }
    if (middle == cards[17]) {
        total_value += 6;
    }
    if (middle == cards[18]) {
        total_value += 6;
    }
    if (middle == cards[19]) {
        total_value += 6;
    }

    /* 7 */
    if (middle == cards[20]) {
        total_value += 7;
    }
    if (middle == cards[21]) {
        total_value += 7;
    }
    if (middle == cards[22]) {
        total_value += 7;
    }
    if (middle == cards[23]) {
        total_value += 7;
    }

    /* 8 */
    if (middle == cards[24]) {
        total_value += 8;
    }
    if (middle == cards[25]) {
        total_value += 8;
    }
    if (middle == cards[26]) {
        total_value += 8;
    }
    if (middle == cards[27]) {
        total_value += 8;
    }

    /* 9 */
    if (middle == cards[28]) {
        total_value += 9;
    }
    if (middle == cards[29]) {
        total_value += 9;
    }
    if (middle == cards[30]) {
        total_value += 9;
    }
    if (middle == cards[31]) {
        total_value += 9;
    }

    /* 10 */
    if (middle == cards[32]) {
        total_value += 10;
    }
    if (middle == cards[33]) {
        total_value += 10;
    }
    if (middle == cards[34]) {
        total_value += 10;
    }
    if (middle == cards[35]) {
        total_value += 10;
    }
    if (middle == cards[36]) {
        total_value += 10;
    }
    if (middle == cards[37]) {
        total_value += 10;
    }
    if (middle == cards[38]) {
        total_value += 10;
    }
    if (middle == cards[39]) {
        total_value += 10;
    }
    if (middle == cards[40]) {
        total_value += 10;
    }
    if (middle == cards[41]) {
        total_value += 10;
    }
    if (middle == cards[42]) {
        total_value += 10;
    }
    if (middle == cards[43]) {
        total_value += 10;
    }
    if (middle == cards[44]) {
        total_value += 10;
    }
    if (middle == cards[45]) {
        total_value += 10;
    }
    if (middle == cards[46]) {
        total_value += 10;
    }
    if (middle == cards[47]) {
        total_value += 10;
    }

    /* 1 or 11 */
    if (middle == cards[48]) {
        if (total_value >= 11) {
            total_value += 1
        }
        else {
            total_value += 11
        }
    }
    if (middle == cards[49]) {
        if (total_value >= 11) {
            total_value += 1
        }
        else {
            total_value += 11
        }
    }
    if (middle == cards[50]) {
        if (total_value >= 11) {
            total_value += 1
        }
        else {
            total_value += 11
        }
    }
    if (middle == cards[51]) {
        if (total_value >= 11) {
            total_value += 1
        }
        else {
            total_value += 11
        }
    }

    console.log("Total value of the player: " + total_value);
}

function calculate_value_dealer() {

    /* Chooses a random card from the cards array. */
    let random_card = cards[Math.floor(Math.random() * cards.length)];
    middle_dealer = random_card;
    /* Check what card you have a set the total value */
    /* 2 */
    if (middle_dealer == cards[0]) {
        total_value_dealer += 2;
    }
    if (middle_dealer == cards[1]) {
        total_value_dealer += 2;
    }
    if (middle_dealer == cards[2]) {
        total_value_dealer += 2;
    }
    if (middle_dealer == cards[3]) {
        total_value_dealer += 2;
    }

    /* 3 */
    if (middle_dealer == cards[4]) {
        total_value_dealer += 3;
    }
    if (middle_dealer == cards[5]) {
        total_value_dealer += 3;
    }
    if (middle_dealer == cards[6]) {
        total_value_dealer += 3;
    }
    if (middle_dealer == cards[7]) {
        total_value_dealer += 3;
    }

    /* 4 */
    if (middle_dealer == cards[8]) {
        total_value_dealer += 4;
    }
    if (middle_dealer == cards[9]) {
        total_value_dealer += 4;
    }
    if (middle_dealer == cards[10]) {
        total_value_dealer += 4;
    }
    if (middle_dealer == cards[11]) {
        total_value_dealer += 4;
    }

    /* 5 */
    if (middle_dealer == cards[12]) {
        total_value_dealer += 5;
    }
    if (middle_dealer == cards[13]) {
        total_value_dealer += 5;
    }
    if (middle_dealer == cards[14]) {
        total_value_dealer += 5;
    }
    if (middle_dealer == cards[15]) {
        total_value_dealer += 5;
    }

    /* 6 */
    if (middle_dealer == cards[16]) {
        total_value_dealer += 6;
    }
    if (middle_dealer == cards[17]) {
        total_value_dealer += 6;
    }
    if (middle_dealer == cards[18]) {
        total_value_dealer += 6;
    }
    if (middle_dealer == cards[19]) {
        total_value_dealer += 6;
    }

    /* 7 */
    if (middle_dealer == cards[20]) {
        total_value_dealer += 7;
    }
    if (middle_dealer == cards[21]) {
        total_value_dealer += 7;
    }
    if (middle_dealer == cards[22]) {
        total_value_dealer += 7;
    }
    if (middle_dealer == cards[23]) {
        total_value_dealer += 7;
    }

    /* 8 */
    if (middle_dealer == cards[24]) {
        total_value_dealer += 8;
    }
    if (middle_dealer == cards[25]) {
        total_value_dealer += 8;
    }
    if (middle_dealer == cards[26]) {
        total_value_dealer += 8;
    }
    if (middle_dealer == cards[27]) {
        total_value_dealer += 8;
    }

    /* 9 */
    if (middle_dealer == cards[28]) {
        total_value_dealer += 9;
    }
    if (middle_dealer == cards[29]) {
        total_value_dealer += 9;
    }
    if (middle_dealer == cards[30]) {
        total_value_dealer += 9;
    }
    if (middle_dealer == cards[31]) {
        total_value_dealer += 9;
    }

    /* 10 */
    if (middle_dealer == cards[32]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[33]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[34]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[35]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[36]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[37]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[38]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[39]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[40]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[41]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[42]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[43]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[44]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[45]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[46]) {
        total_value_dealer += 10;
    }
    if (middle_dealer == cards[47]) {
        total_value_dealer += 10;
    }

    /* 1 or 11 */
    if (middle_dealer == cards[48]) {
        if (total_value_dealer >= 11) {
            total_value_dealer += 1
        }
        else {
            total_value_dealer += 11
        }
    }
    if (middle_dealer == cards[49]) {
        if (total_value_dealer >= 11) {
            total_value_dealer += 1
        }
        else {
            total_value_dealer += 11
        }
    }
    if (middle_dealer == cards[50]) {
        if (total_value_dealer >= 11) {
            total_value_dealer += 1
        }
        else {
            total_value_dealer += 11
        }
    }
    if (middle_dealer == cards[51]) {
        if (total_value_dealer >= 11) {
            total_value_dealer += 1
        }
        else {
            total_value_dealer += 11
        }
    }

    console.log("Total value of the dealer: " + total_value_dealer);
}

