let cards = [


]

function createCard (cardNumber, cardSuit, cardValue) {
    let cardInfo = {
        Number: cardNumber,
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


console.log(cards)