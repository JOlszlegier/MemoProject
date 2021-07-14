const box = document.querySelector(".game-box");
let clickedCards = [];
let clickedCardsId = [];
let doneCards = [];
let clicksCounter = 0;
let namesDeck = []
let movesCounter = 0;
let filteredArray = [];

const deckArray = [
        {
            name:'dog',
            img: 'Pictures/Dog100.jpg'
        },
        {
            name:'dog',
            img: 'Pictures/Dog100.jpg'
        },
        {
            name:'bug',
            img: 'Pictures/Bug100.jpg'
        },
        {
            name:'bug',
            img: 'Pictures/Bug100.jpg'
        },
        {
            name:'parrots',
            img: 'Pictures/Parrots100.jpg'
        },
        {
            name:'parrots',
            img: 'Pictures/Parrots100.jpg'
        },
        {
            name:'dino',
            img: 'Pictures/dino100.jpg'
        },
        {
            name:'dino',
            img: 'Pictures/dino100.jpg'
        },
        {
            name:'frog',
            img: 'Pictures/Frog100.jpg'
        },
        {
            name:'frog',
            img: 'Pictures/Frog100.jpg'
        },
        {
            name:'koala',
            img: 'Pictures/koala100.jpg'
        },
        {
            name:'koala',
            img: 'Pictures/koala100.jpg'
        },
        {
            name:'pig',
            img: 'Pictures/Pig100.jpg'
        },
        {
            name:'pig',
            img: 'Pictures/Pig100.jpg'
        },
        {
            name:'howl',
            img: 'Pictures/Howl100.jpg'
        },
        {
            name:'howl',
            img: 'Pictures/Howl100.jpg'
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
    movesCounter = 0;
    doneCards =[];
    clicksCounter = 0;
}
const deckMapping = () =>{
    namesDeck = deckArray.map(cards => cards.name);
}

const attributeSetting = (card,i) =>{
    card.setAttribute('src','Pictures/tile.jpg')
    card.setAttribute('id',i.toString());
    card.setAttribute('class','single-box');
}

const cardListener = (card,i) =>{
    card.addEventListener('click', () =>{
        if(clickedCards.length !== 2 ){
            clickCounter();
            card.setAttribute('src',deckArray[i].img)
            clickedCards.push(namesDeck[i]);
            clickedCardsId.push(i);
        }
        if(clickedCards.length === 2) {
            firstCheck(clickedCards);
        }
    })
}

const firstCheck = (clickedCards) =>{
    if(clickedCards[0] !== clickedCards[1]){
        setTimeout(scoreCheck,700)
    }else scoreCheck();
}
const scoreCheck = () =>{
    const cards = document.querySelectorAll('img');
    if((clickedCards[0] === clickedCards[1]) && (clickedCardsId[0] !==clickedCardsId[1])) {
        doneCards.push(clickedCards[0]);
        doneCards.push(clickedCards[0]);
    }
    else if(doneCards.find(element => element===clickedCards[0])){
        cards[clickedCardsId[1]].setAttribute('src','Pictures/tile.jpg');
    }
    else if (doneCards.find(element => element===clickedCards[1])){
        cards[clickedCardsId[0]].setAttribute('src','Pictures/tile.jpg');
    }
    else {
        cards[clickedCardsId[0]].setAttribute('src','Pictures/tile.jpg');
        cards[clickedCardsId[1]].setAttribute('src','Pictures/tile.jpg');
    }
    arrayErase();
    filteredArray = doneCards.filter(e => e != null);
    if(filteredArray.length === deckArray.length){
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
    clicksCounter +=1;
    movesCounter=clicksCounter/2;
    movesCounter=Math.floor(movesCounter);
    document.getElementById("clicksCounter").innerHTML = movesCounter;
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
    document.getElementById("clicksCounter").innerHTML = movesCounter;
}

shuffledDeck(deckArray);
deckMapping();
createDeck();

