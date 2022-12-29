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
/* Cards (Images) */
let your_first_card = document.getElementById("your_first_card");
let your_second_card = document.getElementById("your_second_card");
let your_hit_card_1 = document.getElementById("your_hit_card_1");
let your_hit_card_2 = document.getElementById("your_hit_card_2");
let dealer_cards = document.getElementById("dealer_cards");
let dealer_second_cards = document.getElementById("dealer_second_cards");
/* Shown total values */
let dealer_value = document.getElementById("dealer_value");
let player_value = document.getElementById("player_value");


/* Imports audio from the sounds folder. */
let dealing_fx = new Audio('../game_files/roberto/sounds/dealing.mp3');
let hit_fx = new Audio('../game_files/roberto/sounds/hit.mp3');


/* Default values */
let src;
let total_player = 0;
let total_dealer = 0;

function start() {
    dealer_value.style.display = "flex";
    player_value.style.display = "flex";
    start_btn.style.display = "none";
    dealing_fx.play();
    
    randomize();
    your_first_card.src = src;
    randomize();
    your_second_card.src = src;
    randomize_dealer();
    dealer_cards.src = src_dealer;
    randomize_dealer();
    dealer_second_cards.src = src_dealer;
    dealer_cards.style.display = "block";
    dealer_second_cards.style.display = "block";
    your_first_card.style.display = "block";
    your_second_card.style.display = "block";
    hit_btn.style.display = "block";
    pass_btn.style.display = "block";
    console.log("You have: " + total_player)
    console.log("Dealer has: " + total_dealer);
}

function hit() {
    let count = 0;
    count += 1;
    hit_fx.play();
    if (count == 1) {
        your_hit_card_1.style.display = "block";
        your_hit_card_1.src = src;
    }
    if (count == 2) {
        your_hit_card_2.style.display = "block";
        your_hit_card_2.src = src;
    }
    randomize();
    // randomize();
    // dealer_second_cards.src = src;
    // dealer_second_cards.style.display = "block";
}

function pass(){

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

// // Define the ranks and suits of the cards
// const ranks = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
// const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

// // Create a deck of cards as an array of objects
// let deck = [];
// for (let rank of ranks) {
//   for (let suit of suits) {
//     let value = parseInt(rank);
//     if (isNaN(value)) {
//       if (rank === 'Ace') {
//         value = 11;
//       } else {
//         value = 10;
//       }
//     }
//     deck.push({ rank: rank, suit: suit, value: value });
//   }
// }

// // Shuffle the deck using the Fisher-Yates shuffle algorithm
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// shuffle(deck);

// // Deal two cards to the player and two cards to the dealer
// let playerHand = [deck.shift(), deck.shift()];
// let dealerHand = [deck.shift(), deck.shift()];

// // Calculate the total value of a hand
// function getTotalValue(hand) {
//   let totalValue = 0;
//   let numAces = 0;
//   for (let i = 0; i < hand.length; i++) {
//     let card = hand[i];
//     totalValue += card.value;
//     if (card.rank === 'Ace') {
//       numAces++;
//     }
//   }
//   // If the hand contains an Ace, check if changing its value to 1 would
//   // result in a better total value
//   while (numAces > 0 && totalValue > 21) {
//     totalValue -= 10;
//     numAces--;
//   }
//   return totalValue;
// }

// // Calculate the total values of the player's and dealer's hands
// let playerTotal = getTotalValue(playerHand);
// let dealerTotal = getTotalValue(dealerHand);

// // Determine the winner of the game
// if (playerTotal > 21) {
//   console.log('You lose!');
// } else if (dealerTotal > 21 || dealerTotal < playerTotal) {
//   console.log('You win!');
// } else {
//   console.log('You lose!');
// }
