/* Gets all cards from the texure folder. */
const cards = ["../game_files/roberto/textures/cards/2_of_clubs.png", "../game_files/roberto/textures/cards/2_of_diamonds.png", "../game_files/roberto/textures/cards/2_of_hearts.png", "../game_files/roberto/textures/cards/2_of_spades.png", 
               "../game_files/roberto/textures/cards/3_of_clubs.png", "../game_files/roberto/textures/cards/3_of_diamonds.png", "../game_files/roberto/textures/cards/3_of_hearts.png", "../game_files/roberto/textures/cards/3_of_spades.png", 
               "../game_files/roberto/textures/cards/4_of_clubs.png", "../game_files/roberto/textures/cards/4_of_diamonds.png", "../game_files/roberto/textures/cards/4_of_hearts.png", "../game_files/roberto/textures/cards/4_of_spades.png", 
               "../game_files/roberto/textures/cards/5_of_clubs.png", "../game_files/roberto/textures/cards/5_of_diamonds.png", "../game_files/roberto/textures/cards/5_of_hearts.png", "../game_files/roberto/textures/cards/5_of_spades.png", 
               "../game_files/roberto/textures/cards/6_of_clubs.png", "../game_files/roberto/textures/cards/6_of_diamonds.png", "../game_files/roberto/textures/cards/6_of_hearts.png", "../game_files/roberto/textures/cards/6_of_spades.png", 
               "../game_files/roberto/textures/cards/7_of_clubs.png", "../game_files/roberto/textures/cards/7_of_diamonds.png", "../game_files/roberto/textures/cards/7_of_hearts.png", "../game_files/roberto/textures/cards/7_of_spades.png", 
               "../game_files/roberto/textures/cards/8_of_clubs.png", "../game_files/roberto/textures/cards/8_of_diamonds.png", "../game_files/roberto/textures/cards/8_of_hearts.png", "../game_files/roberto/textures/cards/8_of_spades.png", 
               "../game_files/roberto/textures/cards/9_of_clubs.png", "../game_files/roberto/textures/cards/9_of_diamonds.png", "../game_files/roberto/textures/cards/9_of_hearts.png", "../game_files/roberto/textures/cards/9_of_spades.png", 
               "../game_files/roberto/textures/cards/10_of_clubs.png", "../game_files/roberto/textures/cards/10_of_diamonds.png", "../game_files/roberto/textures/cards/10_of_hearts.png", "../game_files/roberto/textures/cards/10_of_spades.png", 
               "../game_files/roberto/textures/cards/ace_of_clubs.png",  "../game_files/roberto/textures/cards/ace_of_diamonds.png",  "../game_files/roberto/textures/cards/ace_of_hearts.png",  "../game_files/roberto/textures/cards/ace_of_spades.png", 
               "../game_files/roberto/textures/cards/jack_of_clubs.png", "../game_files/roberto/textures/cards/jack_of_diamonds.png", "../game_files/roberto/textures/cards/jack_of_hearts.png", "../game_files/roberto/textures/cards/jack_of_spades.png", 
               "../game_files/roberto/textures/cards/king_of_clubs.png", "../game_files/roberto/textures/cards/king_of_diamonds.png", "../game_files/roberto/textures/cards/king_of_hearts.png", "../game_files/roberto/textures/cards/king_of_spades.png", 
               "../game_files/roberto/textures/cards/queen_of_clubs.png", "../game_files/roberto/textures/cards/queen_of_diamonds.png", "../game_files/roberto/textures/cards/queen_of_hearts.png", "../game_files/roberto/textures/cards/queen_of_spades.png"];



/* Chooses a random card from the cards array. */
let random_card_1 = cards[Math.floor(Math.random()*cards.length)];
let random_card_2 = cards[Math.floor(Math.random()*cards.length)];
let random_card_3 = cards[Math.floor(Math.random()*cards.length)];
let random_card_4 = cards[Math.floor(Math.random()*cards.length)];
let random_card_5 = cards[Math.floor(Math.random()*cards.length)];

/* Gets all the elements from the HTML page. */
let start_btn = document.getElementById("start");  
let your_first_card = document.getElementById("your_first_card");
let your_second_card = document.getElementById("your_second_card");
let dealer_cards = document.getElementById("dealer_cards");
let hit = document.getElementById("hit");
let pass = document.getElementById("pass");

/* Sets cash values. */
let cash_value = 5000;
let cash_text = document.getElementById("cash_text")

/* Imports audio from the sounds folder. */
let audio = new Audio('../game_files/roberto/sounds/giving_card.mp3');

/* Loads the neccesary lines of code to boot the game. */
function load_game(){
    cash_text.innerText = "€" + cash_value;
}

load_game();

/* Starts the game with the start button. */
function start(){
    audio.play();
    start_btn.style.display = "none";
    your_first_card.src=random_card_1;
    your_second_card.src=random_card_2;
    dealer_cards.src=random_card_3;
    dealer_cards.style.display = "block";
    your_first_card.style.display = "block";
    your_second_card.style.display = "block";
    hit.style.display = "block";
    pass.style.display = "block";

    console.log(your_first_card.src);
    console.log(your_second_card.src);

    /* Sets the standard total value to zero. */
let total_value = 0;   

cards[0,1,2,3] = 2;
cards[4,5,6,7] = 3;
cards[8,9,10,11] = 4;
cards[12,13,14,15] = 5;
cards[16,17,18,19] = 6;
cards[20,21,22,23] = 7;
cards[24,25,26,27] = 8;
cards[28,29,30,31] = 9;
cards[32,33,34,35] = 10;

console.log(total_value);
}