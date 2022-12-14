const cards = ["../game_files/roberto/texures/cards/2_of_clubs.png", "../game_files/roberto/texures/cards/2_of_diamonds.png", "../game_files/roberto/texures/cards/2_of_hearts.png", "../game_files/roberto/texures/cards/2_of_spades.png", 
               "../game_files/roberto/texures/cards/3_of_clubs.png", "../game_files/roberto/texures/cards/3_of_diamonds.png", "../game_files/roberto/texures/cards/3_of_hearts.png", "../game_files/roberto/texures/cards/3_of_spades.png", 
               "../game_files/roberto/texures/cards/4_of_clubs.png", "../game_files/roberto/texures/cards/4_of_diamonds.png", "../game_files/roberto/texures/cards/4_of_hearts.png", "../game_files/roberto/texures/cards/4_of_spades.png", 
               "../game_files/roberto/texures/cards/5_of_clubs.png", "../game_files/roberto/texures/cards/5_of_diamonds.png", "../game_files/roberto/texures/cards/5_of_hearts.png", "../game_files/roberto/texures/cards/5_of_spades.png", 
               "../game_files/roberto/texures/cards/6_of_clubs.png", "../game_files/roberto/texures/cards/6_of_diamonds.png", "../game_files/roberto/texures/cards/6_of_hearts.png", "../game_files/roberto/texures/cards/6_of_spades.png", 
               "../game_files/roberto/texures/cards/7_of_clubs.png", "../game_files/roberto/texures/cards/7_of_diamonds.png", "../game_files/roberto/texures/cards/7_of_hearts.png", "../game_files/roberto/texures/cards/7_of_spades.png", 
               "../game_files/roberto/texures/cards/8_of_clubs.png", "../game_files/roberto/texures/cards/8_of_diamonds.png", "../game_files/roberto/texures/cards/8_of_hearts.png", "../game_files/roberto/texures/cards/8_of_spades.png", 
               "../game_files/roberto/texures/cards/9_of_clubs.png", "../game_files/roberto/texures/cards/9_of_diamonds.png", "../game_files/roberto/texures/cards/9_of_hearts.png", "../game_files/roberto/texures/cards/9_of_spades.png", 
               "../game_files/roberto/texures/cards/10_of_clubs.png", "../game_files/roberto/texures/cards/10_of_diamonds.png", "../game_files/roberto/texures/cards/10_of_hearts.png", "../game_files/roberto/texures/cards/10_of_spades.png", 
               "../game_files/roberto/texures/cards/jack_of_clubs.png", "../game_files/roberto/texures/cards/jack_of_diamonds.png", "../game_files/roberto/texures/cards/jack_of_hearts.png", "../game_files/roberto/texures/cards/jack_of_spades.png", 
               "../game_files/roberto/texures/cards/king_of_clubs.png", "../game_files/roberto/texures/cards/king_of_diamonds.png", "../game_files/roberto/texures/cards/king_of_hearts.png", "../game_files/roberto/texures/cards/king_of_spades.png", 
               "../game_files/roberto/texures/cards/queen_of_clubs.png", "../game_files/roberto/texures/cards/queen_of_diamonds.png", "../game_files/roberto/texures/cards/queen_of_hearts.png", "../game_files/roberto/texures/cards/queen_of_spades.png", ];


cards[0,1,2,3] = 2;
cards[4,5,6,7] = 3;
cards[8,9,10,11] = 4;
cards[12,13,14,15] = 5;
cards[16,17,18,19] = 6;
cards[20,21,22,23] = 7;
cards[24,25,26,27] = 8;
cards[28,29,30,31] = 9;
cards[32,33,34,35] = 10;

let start_btn = document.getElementById("start");  
let your_cards = document.getElementById("your_cards");
let dealer_cards = document.getElementById("dealer_cards");
let hit = document.getElementById("hit");
let pass = document.getElementById("pass");

let cash_value = 5000;
let cash_text = document.getElementById("cash_text")

let audio = new Audio('../game_files/roberto/sounds/giving_card.mp3');

function load_game(){
    cash_text.innerText = "€" + cash_value;
}

function start(){
    load_game()
    audio.play();
    start_btn.style.display = "none";
    document.getElementById("your_cards").src="../game_files/roberto/texures/cards/2_of_clubs.png";
    dealer_cards.style.display = "block";
    your_cards.style.display = "block";
    hit.style.display = "block";
    pass.style.display = "block";
}

