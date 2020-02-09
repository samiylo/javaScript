let cards = [


]

function createCard (cardName, cardSuit, cardValue, imagePath) {
    let cardInfo = {
        Number: cardName,
        Face: cardSuit,
        Value: cardValue,
        Image: imagePath
    }

    cards.push(cardInfo)
}
createCard("A", "Hearts", 1, <img src='images/AH.jpg'></img> );
createCard("A", "Spades", 1, <img src='images/AS.jpg'></img>);
createCard("A", "Clovers", 1, <img src='images/AC.jpg'></img>);
createCard("A", "Diamonds", 1, <img src='images/AD.jpg'></img>);

createCard("2", "Hearts", 2, <img src='images/2H.jpg'></img>);
createCard("2", "Spades", 2, <img src='images/2S.jpg'></img>);
createCard("2", "Clovers", 2, <img src='images/2C.jpg'></img>);
createCard("2", "Diamons", 2, <img src='images/2D.jpg'></img>);

createCard("3", "Hearts", 3, <img src='images/3H.jpg'></img>);
createCard("3", "Spades", 3, <img src='images/3S.jpg'></img>);
createCard("3", "Clovers", 3, <img src='images/3C.jpg'></img>);
createCard("3", "Diamons", 3, <img src='images/3D.jpg'></img>);

createCard("4", "Hearts", 4, <img src='images/4H.jpg'></img>);
createCard("4", "Spades", 4, <img src='images/4S.jpg'></img>);
createCard("4", "Clovers", 4, <img src='images/4C.jpg'></img>);
createCard("4", "Diamonds", 4, <img src='images/4D.jpg'></img>);

createCard("5", "Hearts", 5, <img src='images/5H.jpg'></img>);
createCard("5", "Spades", 5, <img src='images/5S.jpg'></img>);
createCard("5", "Clovers", 5, <img src='images/5C.jpg'></img>);
createCard("5", "Diamonds", 5, <img src='images/5D.jpg'></img>);

createCard("6", "Hearts", 6, <img src='images/6H.jpg'></img>);
createCard("6", "Spades", 6, <img src='images/6S.jpg'></img>);
createCard("6", "Clovers", 6, <img src='images/6C.jpg'></img>);
createCard("6", "Diamonds", 6, <img src='images/6D.jpg'></img>);

createCard("7", "Hearts", 7, <img src='images/7H.jpg'></img>);
createCard("7", "Spades", 7, <img src='images/7S.jpg'></img>);
createCard("7", "Clovers", 7, <img src='images/7C.jpg'></img>);
createCard("7", "Diamonds", 7, <img src='images/7D.jpg'></img>);

createCard("8", "Hearts", 8, <img src='images/8H.jpg'></img>);
createCard("8", "Spades", 8, <img src='images/8S.jpg'></img>);
createCard("8", "Clovers", 8, <img src='images/8C.jpg'></img>);
createCard("8", "Diamonds", 8, <img src='images/8D.jpg'></img>);

createCard("9", "Hearts", 9, <img src='images/.jpg'></img>);
createCard("9", "Spades", 9, <img src='images/.jpg'></img>);
createCard("9", "Clovers", 9, <img src='images/.jpg'></img>);
createCard("9", "Diamonds", 9, <img src='images/.jpg'></img>);

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

