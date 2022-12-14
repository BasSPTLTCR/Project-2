/* Gets all cards from the texure folder. */
const cards = ["../game_files/roberto/texures/cards/2_of_clubs.png", "../game_files/roberto/texures/cards/2_of_diamonds.png", "../game_files/roberto/texures/cards/2_of_hearts.png", "../game_files/roberto/texures/cards/2_of_spades.png", 
               "../game_files/roberto/texures/cards/3_of_clubs.png", "../game_files/roberto/texures/cards/3_of_diamonds.png", "../game_files/roberto/texures/cards/3_of_hearts.png", "../game_files/roberto/texures/cards/3_of_spades.png", 
               "../game_files/roberto/texures/cards/4_of_clubs.png", "../game_files/roberto/texures/cards/4_of_diamonds.png", "../game_files/roberto/texures/cards/4_of_hearts.png", "../game_files/roberto/texures/cards/4_of_spades.png", 
               "../game_files/roberto/texures/cards/5_of_clubs.png", "../game_files/roberto/texures/cards/5_of_diamonds.png", "../game_files/roberto/texures/cards/5_of_hearts.png", "../game_files/roberto/texures/cards/5_of_spades.png", 
               "../game_files/roberto/texures/cards/6_of_clubs.png", "../game_files/roberto/texures/cards/6_of_diamonds.png", "../game_files/roberto/texures/cards/6_of_hearts.png", "../game_files/roberto/texures/cards/6_of_spades.png", 
               "../game_files/roberto/texures/cards/7_of_clubs.png", "../game_files/roberto/texures/cards/7_of_diamonds.png", "../game_files/roberto/texures/cards/7_of_hearts.png", "../game_files/roberto/texures/cards/7_of_spades.png", 
               "../game_files/roberto/texures/cards/8_of_clubs.png", "../game_files/roberto/texures/cards/8_of_diamonds.png", "../game_files/roberto/texures/cards/8_of_hearts.png", "../game_files/roberto/texures/cards/8_of_spades.png", 
               "../game_files/roberto/texures/cards/9_of_clubs.png", "../game_files/roberto/texures/cards/9_of_diamonds.png", "../game_files/roberto/texures/cards/9_of_hearts.png", "../game_files/roberto/texures/cards/9_of_spades.png", 
               "../game_files/roberto/texures/cards/10_of_clubs.png", "../game_files/roberto/texures/cards/10_of_diamonds.png", "../game_files/roberto/texures/cards/10_of_hearts.png", "../game_files/roberto/texures/cards/10_of_spades.png", 
               "../game_files/roberto/texures/cards/ace_of_clubs.png",  "../game_files/roberto/texures/cards/ace_of_diamonds.png",  "../game_files/roberto/texures/cards/ace_of_hearts.png",  "../game_files/roberto/texures/cards/ace_of_spades.png", 
               "../game_files/roberto/texures/cards/jack_of_clubs.png", "../game_files/roberto/texures/cards/jack_of_diamonds.png", "../game_files/roberto/texures/cards/jack_of_hearts.png", "../game_files/roberto/texures/cards/jack_of_spades.png", 
               "../game_files/roberto/texures/cards/king_of_clubs.png", "../game_files/roberto/texures/cards/king_of_diamonds.png", "../game_files/roberto/texures/cards/king_of_hearts.png", "../game_files/roberto/texures/cards/king_of_spades.png", 
               "../game_files/roberto/texures/cards/queen_of_clubs.png", "../game_files/roberto/texures/cards/queen_of_diamonds.png", "../game_files/roberto/texures/cards/queen_of_hearts.png", "../game_files/roberto/texures/cards/queen_of_spades.png"];

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

/* Sets the standard total value to zero. */
let total_value = 0;

/* Loads the neccesary lines of code to boot the game. */
function load_game(){
    cash_text.innerText = "€" + cash_value;

    /* Gives the cards a value. */
    if(your_first_card == "../game_files/roberto/texures/cards/2_of_clubs.png" || "../game_files/roberto/texures/cards/2_of_diamonds.png" || "../game_files/roberto/texures/cards/2_of_hearts.png" || "../game_files/roberto/texures/cards/2_of_spades.png"){
        total_value += 2;
    }
    if(your_first_card == "../game_files/roberto/texures/cards/3_of_clubs.png" || "../game_files/roberto/texures/cards/3_of_diamonds.png" || "../game_files/roberto/texures/cards/3_of_hearts.png" || "../game_files/roberto/texures/cards/3_of_spades.png"){
        total_value += 3;
    }
    if(your_first_card == "../game_files/roberto/texures/cards/4_of_clubs.png" || "../game_files/roberto/texures/cards/4_of_diamonds.png" || "../game_files/roberto/texures/cards/4_of_hearts.png" || "../game_files/roberto/texures/cards/4_of_spades.png"){
        total_value += 4; 
    }
    if(your_first_card == "../game_files/roberto/texures/cards/5_of_clubs.png" || "../game_files/roberto/texures/cards/5_of_diamonds.png" || "../game_files/roberto/texures/cards/5_of_hearts.png" || "../game_files/roberto/texures/cards/5_of_spades.png"){
        total_value += 5;
    }
    if(your_first_card == "../game_files/roberto/texures/cards/6_of_clubs.png" || "../game_files/roberto/texures/cards/6_of_diamonds.png" || "../game_files/roberto/texures/cards/6_of_hearts.png" || "../game_files/roberto/texures/cards/6_of_spades.png"){
        total_value += 6;       
    }
    if(your_first_card == "../game_files/roberto/texures/cards/7_of_clubs.png" || "../game_files/roberto/texures/cards/7_of_diamonds.png" || "../game_files/roberto/texures/cards/7_of_hearts.png" || "../game_files/roberto/texures/cards/7_of_spades.png"){
        total_value += 7;
    }
    if(your_first_card == "../game_files/roberto/texures/cards/8_of_clubs.png" || "../game_files/roberto/texures/cards/8_of_diamonds.png" || "../game_files/roberto/texures/cards/8_of_hearts.png" || "../game_files/roberto/texures/cards/8_of_spades.png"){
        total_value += 8;
    }
    if(your_first_card == "../game_files/roberto/texures/cards/9_of_clubs.png" || "../game_files/roberto/texures/cards/9_of_diamonds.png" || "../game_files/roberto/texures/cards/9_of_hearts.png" || "../game_files/roberto/texures/cards/9_of_spades.png"){
        total_value += 9;
    }
   if(your_first_card ==  "../game_files/roberto/texures/cards/10_of_clubs.png" || "../game_files/roberto/texures/cards/10_of_diamonds.png" || "../game_files/roberto/texures/cards/10_of_hearts.png" || "../game_files/roberto/texures/cards/10_of_spades.png" ||
    "../game_files/roberto/texures/cards/jack_of_clubs.png" || "../game_files/roberto/texures/cards/jack_of_diamonds.png" || "../game_files/roberto/texures/cards/jack_of_hearts.png" || "../game_files/roberto/texures/cards/jack_of_spades.png" || 
    "../game_files/roberto/texures/cards/king_of_clubs.png" || "../game_files/roberto/texures/cards/king_of_diamonds.png" || "../game_files/roberto/texures/cards/king_of_hearts.png" || "../game_files/roberto/texures/cards/king_of_spades.png" || 
    "../game_files/roberto/texures/cards/queen_of_clubs.png" || "../game_files/roberto/texures/cards/queen_of_diamonds.png" || "../game_files/roberto/texures/cards/queen_of_hearts.png" || "../game_files/roberto/texures/cards/queen_of_spades.png"){
        total_value += 10;
    }

    
    if(random_card_2 == "../game_files/roberto/texures/cards/2_of_clubs.png" || "../game_files/roberto/texures/cards/2_of_diamonds.png" || "../game_files/roberto/texures/cards/2_of_hearts.png" || "../game_files/roberto/texures/cards/2_of_spades.png"){
        total_value += 2;
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/3_of_clubs.png" || "../game_files/roberto/texures/cards/3_of_diamonds.png" || "../game_files/roberto/texures/cards/3_of_hearts.png" || "../game_files/roberto/texures/cards/3_of_spades.png"){
        total_value += 3;
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/4_of_clubs.png" || "../game_files/roberto/texures/cards/4_of_diamonds.png" || "../game_files/roberto/texures/cards/4_of_hearts.png" || "../game_files/roberto/texures/cards/4_of_spades.png"){
        total_value += 4; 
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/5_of_clubs.png" || "../game_files/roberto/texures/cards/5_of_diamonds.png" || "../game_files/roberto/texures/cards/5_of_hearts.png" || "../game_files/roberto/texures/cards/5_of_spades.png"){
        total_value += 5;
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/6_of_clubs.png" || "../game_files/roberto/texures/cards/6_of_diamonds.png" || "../game_files/roberto/texures/cards/6_of_hearts.png" || "../game_files/roberto/texures/cards/6_of_spades.png"){
        total_value += 6;       
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/7_of_clubs.png" || "../game_files/roberto/texures/cards/7_of_diamonds.png" || "../game_files/roberto/texures/cards/7_of_hearts.png" || "../game_files/roberto/texures/cards/7_of_spades.png"){
        total_value += 7;
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/8_of_clubs.png" || "../game_files/roberto/texures/cards/8_of_diamonds.png" || "../game_files/roberto/texures/cards/8_of_hearts.png" || "../game_files/roberto/texures/cards/8_of_spades.png"){
        total_value += 8;
    }
    if(random_card_2 == "../game_files/roberto/texures/cards/9_of_clubs.png" || "../game_files/roberto/texures/cards/9_of_diamonds.png" || "../game_files/roberto/texures/cards/9_of_hearts.png" || "../game_files/roberto/texures/cards/9_of_spades.png"){
        total_value += 9;
    }
   if(random_card_2 ==  "../game_files/roberto/texures/cards/10_of_clubs.png" || "../game_files/roberto/texures/cards/10_of_diamonds.png" || "../game_files/roberto/texures/cards/10_of_hearts.png" || "../game_files/roberto/texures/cards/10_of_spades.png" ||
    "../game_files/roberto/texures/cards/jack_of_clubs.png" || "../game_files/roberto/texures/cards/jack_of_diamonds.png" || "../game_files/roberto/texures/cards/jack_of_hearts.png" || "../game_files/roberto/texures/cards/jack_of_spades.png" || 
    "../game_files/roberto/texures/cards/king_of_clubs.png" || "../game_files/roberto/texures/cards/king_of_diamonds.png" || "../game_files/roberto/texures/cards/king_of_hearts.png" || "../game_files/roberto/texures/cards/king_of_spades.png" || 
    "../game_files/roberto/texures/cards/queen_of_clubs.png" || "../game_files/roberto/texures/cards/queen_of_diamonds.png" || "../game_files/roberto/texures/cards/queen_of_hearts.png" || "../game_files/roberto/texures/cards/queen_of_spades.png"){
        total_value += 10;
    }
}

/* Starts the game with the start button. */
function start(){
    load_game()
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
    console.log(total_value);
    console.log(random_card_1);
}
