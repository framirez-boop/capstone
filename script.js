const colors = ["Red", "Blue", "Green", "Yellow"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let deck = [};
let human = [];
let computer = [];
let discardPile = [];

function startGame(){
deck = [];
colors.forEach(color)
values.forEach(value)
deck.push({ color, value})
 if (value !== "0") deck.push({ color, value });
}]

for (let i = 0; i++) {
 deck.push({ color: "wild", value: "Wild"});
 deck.push({ color: "wild", value: "Wild+4"});
}

shuffle(deck);

humanHand = deck.splice(0, 7);
computerHand = deck.splice(0, 7);


let firstCard = deck.find((c) => !isNaN(c.value)
deck.splice(deck.indexOf(firstCard), 1);
discardPile.push(firstCard);

updateUi();
}

function shuffle(array) {
 for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[i]];
 }
}

function playCard(index0 {
 if (!isPlayerTurn) return;

 const cardToPlay = humanHand[index];
 const topCard = discardPile[discardPile.length - 1];

 if(cardToPlay.value.includes("wild")) {
  pendingWildCardIndex = index;
  document.getElementById(














