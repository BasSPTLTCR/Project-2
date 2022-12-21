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

const srcArray = cards.map(({ src }) => src);

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

/*  */
let random_card;

function start() {
    audio.play();
    start_btn.style.display = "none";
    randomize();
    your_first_card.src = random_card;
    randomize();
    your_second_card.src = random_card;
    randomize();
    dealer_cards.src = random_card;
    dealer_cards.style.display = "block";
    your_first_card.style.display = "block";
    your_second_card.style.display = "block";
    hit_btn.style.display = "block";
    pass.style.display = "block";
    console.log(cards.src)
    console.log(srcArray.length)

}

function hit() {
    your_hit_card_1.style.display = "block";
    randomize();
    your_hit_card_1.src = random_card;
    randomize();
    dealer_second_cards.src = random_card;
    dealer_second_cards.style.display = "block";
}

function randomize() {
    random_card = srcArray[Math.floor(Math.random() * srcArray.length)];
}