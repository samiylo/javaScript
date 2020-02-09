let cards = [


]

function createCard (cardName, cardSuit, cardValue) {
    let cardInfo = {
        Number: cardName,
        Face: cardSuit,
        Value: cardValue,
    }

    cards.push(cardInfo)
}
createCard("A", "Hearts", 1);
createCard("A", "Spades", 1);
createCard("A", "Clovers", 1);
createCard("A", "Diamonds", 1);

createCard("2", "Hearts", 2);
createCard("2", "Spades", 2);
createCard("2", "Clovers", 2);
createCard("2", "Diamons", 2);

createCard("3", "Hearts", 3);
createCard("3", "Spades", 3);
createCard("3", "Clovers", 3);
createCard("3", "Diamons", 3);

createCard("4", "Hearts", 4);
createCard("4", "Spades", 4);
createCard("4", "Clovers", 4);
createCard("4", "Diamonds", 4);

createCard("5", "Hearts", 5);
createCard("5", "Spades", 5);
createCard("5", "Clovers", 5);
createCard("5", "Diamonds", 5);

createCard("6", "Hearts", 6);
createCard("6", "Spades", 6);
createCard("6", "Clovers", 6);
createCard("6", "Diamonds", 6);

createCard("7", "Hearts", 7);
createCard("7", "Spades", 7);
createCard("7", "Clovers", 7);
createCard("7", "Diamonds", 7);

createCard("8", "Hearts", 8);
createCard("8", "Spades", 8);
createCard("8", "Clovers", 8);
createCard("8", "Diamonds", 8);

createCard("9", "Hearts", 9);
createCard("9", "Spades", 9);
createCard("9", "Clovers", 9);
createCard("9", "Diamonds", 9);

createCard("10", "Hearts", 10);
createCard("10", "Spades", 10);
createCard("10", "Clovers", 10);
createCard("10", "Diamonds", 10);

createCard("J", "Hearts", 10);
createCard("J", "Spades", 10);
createCard("J", "Clovers", 10);
createCard("J", "Diamonds", 10);

createCard("Q", "Hearts", 10);
createCard("Q", "Spades", 10);
createCard("Q", "Clovers", 10);
createCard("Q", "Diamonds", 10);

createCard("K", "Hearts", 10);
createCard("K", "Spades", 10);
createCard("K", "Clovers", 10);
createCard("K", "Diamonds", 10);




console.log(cards)

