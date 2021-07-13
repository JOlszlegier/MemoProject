const box = document.querySelector(".game-box");
let clickedCards = [];
let clickedCardsId = [];
let doneCards = [];
let clicks = 0;
let moves = 0;
let namesDeck = []
const deckArray = [
        {
            name:'dog',
            img: 'Dog100.jpg'
        },
        {
            name:'dog',
            img: 'Dog100.jpg'
        },
        {
            name:'bug',
            img: 'Bug100.jpg'
        },
        {
            name:'bug',
            img: 'Bug100.jpg'
        },
        {
            name:'parrots',
            img: 'Parrots100.jpg'
        },
        {
            name:'parrots',
            img: 'Parrots100.jpg'
        },
        {
            name:'dino',
            img: 'dino100.jpg'
        },
        {
            name:'dino',
            img: 'dino100.jpg'
        },
        {
            name:'frog',
            img: 'Frog100.jpg'
        },
        {
            name:'frog',
            img: 'Frog100.jpg'
        },
        {
            name:'koala',
            img: 'koala100.jpg'
        },
        {
            name:'koala',
            img: 'koala100.jpg'
        },
        {
            name:'pig',
            img: 'Pig100.jpg'
        },
        {
            name:'pig',
            img: 'Pig100.jpg'
        },
        {
            name:'howl',
            img: 'Howl100.jpg'
        },
        {
            name:'howl',
            img: 'Howl100.jpg'
        },
]

const shuffledDeck = (array) => {
    for (let firstIndex = array.length - 1; firstIndex > 0; firstIndex--) {
        const secondIndex = Math.floor(Math.random() * (firstIndex + 1));
        [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
    }
}

const arrayErase = () =>{
    clickedCards = [];
    clickedCardsId = [];
}

const variableErasing = () =>{
    moves = 0;
    doneCards =[];
    clicks = 0;
}
const deckMapping = () =>{
    namesDeck = deckArray.map((cards) => {return cards.name});
}

const attributeSetting = (card,i) =>{
    card.setAttribute('src','tile.jpg')
    card.setAttribute('id',i.toString());
    card.setAttribute('class','single-box');
}

const cardListener = (card,i) =>{
    card.addEventListener('click', e =>{
        clickCounter();
        card.setAttribute('src',deckArray[i].img)
        clickedCards.push(namesDeck[i]);
        clickedCardsId.push(i);
        if(clickedCards.length === 2) {
            setTimeout(scoreCheck,300);
        }
    })
}

const scoreCheck = () =>{
    const cards = document.querySelectorAll('img');
    if(clickedCards[0] === clickedCards[1]) {
        doneCards.push(clickedCards[0]);
        doneCards.push(clickedCards[0]);
    }
    else if(doneCards.find(element => element===clickedCards[0])){
        cards[clickedCardsId[1]].setAttribute('src','tile.jpg');
    }
    else if (doneCards.find(element => element===clickedCards[1])){
        cards[clickedCardsId[0]].setAttribute('src','tile.jpg');
    }
    else {
        cards[clickedCardsId[0]].setAttribute('src','tile.jpg');
        cards[clickedCardsId[1]].setAttribute('src','tile.jpg');
    }
    arrayErase();
    if(doneCards.length === deckArray.length){
        alert("You won !");
        reset();
    }
}

const createDeck = () => {
    for(let i=0;i<namesDeck.length;i++) {
        const card = document.createElement('img');
        attributeSetting(card,i);
        cardListener(card,i);
        box.append(card);
    }
}

const clickCounter = () =>{
    clicks +=1;
    moves=clicks/2;
    moves=Math.floor(moves);
    document.getElementById("clicks").innerHTML = moves;
}

const reset = () => {
    const box = document.querySelector(".game-box");
    while(box.firstChild){
        box.removeChild(box.firstChild);
    }
    variableErasing()
    arrayErase();
    shuffledDeck(deckArray);
    deckMapping()
    createDeck()
    document.getElementById("clicks").innerHTML = moves;
}

shuffledDeck(deckArray);
deckMapping();
createDeck();

