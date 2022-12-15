//  anonymous objects = Objects without a name
//                      Not directly referenced
//                      Less syntax. No need for unique names

class Card{
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}


/*
let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Diamonds");
let card4 = new Card("A", "Clubs");
let card5 = new Card("2", "Hearts");
let card6 = new Card("2", "Spades");
let card7 = new Card("2", "Diamonds");
let card8 = new Card("2", "Clubs");

let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

console.log(cards);

console.log(card1.value + " " + card1.suit); // accessing the object directly by its name
console.log(cards[0].value + " " + cards[0].suit); // accessing the object indirectly via an array index
*/


// using anonymous objects
let deck = [new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonds"),
            new Card("A", "Clubs"),
            new Card("2", "Hearts"),
            new Card("2", "Spades"),
            new Card("2", "Diamonds"),
            new Card("2", "Clubs")];

// console.log(card1.value + " " + card1.suit);
// this statement will give an error as card1 object is not defined in this method

console.log(deck[0].value + " " + deck[0].suit);

deck.forEach(card => console.log(`${card.value} ${card.suit}`));