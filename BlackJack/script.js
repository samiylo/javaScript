var cards = []
// var playerHand = []
// var dealerHand = []


function createCard (cardName, cardSuit, cardValue, imagePath) {
    let cardInfo = {
        Number: cardName,
        Face: cardSuit,
        Value: cardValue,
        Image: imagePath
    }

    cards.push(cardInfo)
}
createCard("A", "Hearts", 1, src='images/AH.jpg');
createCard("A", "Spades", 1, src='images/AS.jpg');
createCard("A", "Clovers", 1, src='images/AC.jpg');
createCard("A", "Diamonds", 1, src='images/AD.jpg');

createCard("2", "Hearts", 2, src='images/2H.jpg');
createCard("2", "Spades", 2, src='images/2S.jpg');
createCard("2", "Clovers", 2, src='images/2C.jpg');
createCard("2", "Diamons", 2, src='images/2D.jpg');

createCard("3", "Hearts", 3, src='images/3H.jpg');
createCard("3", "Spades", 3, src='images/3S.jpg');
createCard("3", "Clovers", 3, src='images/3C.jpg');
createCard("3", "Diamons", 3, src='images/3D.jpg');

createCard("4", "Hearts", 4, src='images/4H.jpg');
createCard("4", "Spades", 4, src='images/4S.jpg');
createCard("4", "Clovers", 4, src='images/4C.jpg');
createCard("4", "Diamonds", 4, src='images/4D.jpg');

createCard("5", "Hearts", 5, src='images/5H.jpg');
createCard("5", "Spades", 5, src='images/5S.jpg');
createCard("5", "Clovers", 5, src='images/5C.jpg');
createCard("5", "Diamonds", 5, src='images/5D.jpg');

createCard("6", "Hearts", 6, src='images/6H.jpg');
createCard("6", "Spades", 6, src='images/6S.jpg');
createCard("6", "Clovers", 6, src='images/6C.jpg');
createCard("6", "Diamonds", 6, src='images/6D.jpg');

createCard("7", "Hearts", 7, src='images/7H.jpg');
createCard("7", "Spades", 7, src='images/7S.jpg');
createCard("7", "Clovers", 7, src='images/7C.jpg');
createCard("7", "Diamonds", 7, src='images/7D.jpg');

createCard("8", "Hearts", 8, src='images/8H.jpg');
createCard("8", "Spades", 8, src='images/8S.jpg');
createCard("8", "Clovers", 8, src='images/8C.jpg');
createCard("8", "Diamonds", 8, src='images/8D.jpg');

createCard("9", "Hearts", 9, src='images/9H.jpg');
createCard("9", "Spades", 9, src='images/9S.jpg');
createCard("9", "Clovers", 9, src='images/9C.jpg');
createCard("9", "Diamonds", 9, src='images/9D.jpg');

createCard("10", "Hearts", 10, src='images/10H.jpg');
createCard("10", "Spades", 10, src='images/10S.jpg');
createCard("10", "Clovers", 10, src='images/10C.jpg');
createCard("10", "Diamonds", 10, src='images/10D.jpg');

createCard("J", "Hearts", 10, src='images/JH.jpg');
createCard("J", "Spades", 10, src='images/JS.jpg');
createCard("J", "Clovers", 10, src='images/JC.jpg');
createCard("J", "Diamonds", 10, src='images/JD.jpg');

createCard("Q", "Hearts", 10, src='images/QH.jpg');
createCard("Q", "Spades", 10, src='images/QS.jpg');
createCard("Q", "Clovers", 10, src='images/QC.jpg');
createCard("Q", "Diamonds", 10, src='images/QD.jpg');

createCard("K", "Hearts", 10, src='images/KH.jpg');
createCard("K", "Spades", 10, src='images/KS.jpg');
createCard("K", "Clovers", 10, src='images/KC.jpg');
createCard("K", "Diamonds", 10, src='images/KD.jpg');



// ========================================================= Start Deal Function

var dealerHand = document.getElementById('dealer-hand');
var playerHand = document.getElementById('player-hand');


var dealerPoints = 0
var playerPoints = 0

function deal() {

    let dealercard1 = cards.pop()
    let playercard1 = cards.pop()

    let playercard2 = cards.pop()
    let dealercard2 = cards.pop()

    dealerPoints += (dealercard1.Value) + (dealercard2.Value);
    playerPoints += (playercard1.Value) + (playercard2.Value);
    
    
    let dealerimageNode = document.createElement('img');
    dealerimageNode.setAttribute('src', dealercard1.Image)
    let playerimageNode = document.createElement('img');
    playerimageNode.setAttribute('src', playercard1.Image)

    let dealerimageNode2 = document.createElement('img');
    dealerimageNode2.setAttribute('src', '/images/Red_back.jpg')
    let playerimageNode2 = document.createElement('img');
    playerimageNode2.setAttribute('src', playercard2.Image)

    dealerHand.appendChild(dealerimageNode);
    playerHand.appendChild(playerimageNode);
    dealerHand.appendChild(dealerimageNode2);
    playerHand.appendChild(playerimageNode2);
}

function hit() {
    let playerCard = cards.pop();

    playerPoints += playerCard.Value
    

    let playerImageNode = document.createElement('img');
    playerImageNode.setAttribute('src', playerCard.Image)

    playerHand.appendChild(playerImageNode)

}

var dealButtonNode = document.getElementById('deal-button');
var hitButtonNode = document.getElementById('hit-button')

dealButtonNode.addEventListener('click', function(event) {
    
    deal();
})

hitButtonNode.addEventListener('click', function(event){
    hit();
})


