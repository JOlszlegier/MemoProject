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
            img: 'pictures/Dog100.jpg'
        },
        {
            name:'dog',
            img: 'pictures/Dog100.jpg'
        },
        {
            name:'bug',
            img: 'pictures/Bug100.jpg'
        },
        {
            name:'bug',
            img: 'pictures/Bug100.jpg'
        },
        {
            name:'parrots',
            img: 'pictures/Parrots100.jpg'
        },
        {
            name:'parrots',
            img: 'pictures/Parrots100.jpg'
        },
        {
            name:'dino',
            img: 'pictures/dino100.jpg'
        },
        {
            name:'dino',
            img: 'pictures/dino100.jpg'
        },
        {
            name:'frog',
            img: 'pictures/Frog100.jpg'
        },
        {
            name:'frog',
            img: 'pictures/Frog100.jpg'
        },
        {
            name:'koala',
            img: 'pictures/koala100.jpg'
        },
        {
            name:'koala',
            img: 'pictures/koala100.jpg'
        },
        {
            name:'pig',
            img: 'pictures/Pig100.jpg'
        },
        {
            name:'pig',
            img: 'pictures/Pig100.jpg'
        },
        {
            name:'howl',
            img: 'pictures/Howl100.jpg'
        },
        {
            name:'howl',
            img: 'pictures/Howl100.jpg'
        },
]
const deckArrayMobile = [
    {
        name:'dog',
        img: 'pictures/DogSmall.jpg'
    },
    {
        name:'dog',
        img: 'pictures/DogSmall.jpg'
    },
    {
        name:'bug',
        img: 'pictures/BugSmall.jpg'
    },
    {
        name:'bug',
        img: 'pictures/BugSmall.jpg'
    },
    {
        name:'parrots',
        img: 'pictures/ParrotsSmall.jpg'
    },
    {
        name:'parrots',
        img: 'pictures/ParrotsSmall.jpg'
    },
    {
        name:'dino',
        img: 'pictures/dinoSmall.jpg'
    },
    {
        name:'dino',
        img: 'pictures/dinoSmall.jpg'
    },
    {
        name:'frog',
        img: 'pictures/FrogSmall.jpg'
    },
    {
        name:'frog',
        img: 'pictures/FrogSmall.jpg'
    },
    {
        name:'koala',
        img: 'pictures/koalaSmall.jpg'
    },
    {
        name:'koala',
        img: 'pictures/koalaSmall.jpg'
    },
    {
        name:'pig',
        img: 'pictures/PigSmall.jpg'
    },
    {
        name:'pig',
        img: 'pictures/PigSmall.jpg'
    },
    {
        name:'howl',
        img: 'pictures/HowlSmall.jpg'
    },
    {
        name:'howl',
        img: 'pictures/HowlSmall.jpg'
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

const deckMapping = (array) =>{
    namesDeck = array.map((cards) => {return cards.name});
}

const attributeSetting = (card,i) =>{
    card.setAttribute('src','pictures/tile.jpg')
    card.setAttribute('id',i.toString());
    card.setAttribute('class','single-box');
}

const attributeSettingMobile = (card,i) =>{
    card.setAttribute('src','pictures/tileSmall.jpg')
    card.setAttribute('id',i.toString());
    card.setAttribute('class','single-box');
}

const cardListener = (card,i,array) =>{
    card.addEventListener('click', e =>{
        clickCounter();
        card.setAttribute('src',array[i].img)
        clickedCards.push(namesDeck[i]);
        clickedCardsId.push(i);
        if(clickedCards.length === 2) {
            setTimeout(scoreCheck,300);
        }
    })
}



const scoreCheck = () =>{
    let picture = 0;
    if (mobile.matches) picture= 'pictures/tileSmall.jpg';
    else picture = 'pictures/tile.jpg';

    const cards = document.querySelectorAll('img');
    if(clickedCards[0] === clickedCards[1]) {
        doneCards.push(clickedCards[0]);
        doneCards.push(clickedCards[0]);
    }
    else if(doneCards.find(element => element===clickedCards[0])){
        cards[clickedCardsId[1]].setAttribute('src',picture);
    }
    else if (doneCards.find(element => element===clickedCards[1])){
        cards[clickedCardsId[0]].setAttribute('src',picture);
    }
    else {
        cards[clickedCardsId[0]].setAttribute('src',picture);
        cards[clickedCardsId[1]].setAttribute('src',picture);
    }
    arrayErase();
    if(doneCards.length === deckArray.length){
        alert("You won !");
        reset();
    }
}

const createDeck = (array,mobile) => {
    for(let i=0;i<namesDeck.length;i++) {
        const card = document.createElement('img');
        if (mobile === 1) attributeSettingMobile(card,i);
        else   attributeSetting(card,i);
        cardListener(card,i,array);
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
    let deck = 0;
    let mobileMode = 0;
    if(mobile.matches){
        deck = deckArrayMobile;
        mobileMode = 1;
    }
    else{
        deck = deckArray;
        mobileMode = 0;
    }
    while(box.firstChild){
        box.removeChild(box.firstChild);
    }
    variableErasing()
    arrayErase();
    shuffledDeck(deck);
    deckMapping(deck)
    createDeck(deck,mobileMode)
    document.getElementById("clicks").innerHTML = moves;
}

const mobile = window.matchMedia( "(max-width: 430px)" )
if(mobile.matches){
    shuffledDeck(deckArrayMobile);
    deckMapping(deckArrayMobile);
    createDeck(deckArrayMobile,1);
}
else {
    shuffledDeck(deckArray);
    deckMapping(deckArray);
    createDeck(deckArray,0);
}

