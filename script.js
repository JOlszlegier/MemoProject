const box = document.querySelector(".gameBox");

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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const clickedCards = [];
const clickedCardsId = [];
const doneCards = [];
let clicks = 0;
let moves = 0;
shuffledDeck(deckArray);

let namesDeck =deckArray.map((cards) => {return cards.name});

const createDeck = () => {


    for(let i=0;i<namesDeck.length;i++) {
        const card = document.createElement('img');

        card.setAttribute('src','tile.jpg')
        card.setAttribute('id',i.toString());
        card.setAttribute('class','singleBox');

        card.addEventListener('click',e =>{
            clickCounter();
        })

        card.addEventListener('click', e =>{

            card.setAttribute('src',deckArray[i].img)
            clickedCards.push(namesDeck[i]);
            clickedCardsId.push(i);

            if(clickedCards.length === 2)
            {
                setTimeout(scoreCheck,300);
            }
        })

        box.append(card);


    }
}

const scoreCheck = () =>{
    const cards = document.querySelectorAll('img');
    if(clickedCards[0] === clickedCards[1]) {
        doneCards.push(clickedCards);
    }
    else {
        cards[clickedCardsId[0]].setAttribute('src','tile.jpg');
        cards[clickedCardsId[1]].setAttribute('src','tile.jpg');
    }

    clickedCards.length = [];
    clickedCardsId.length = [];

    if(doneCards.length === deckArray.length/2){
        alert("You won !");
        location.reload();
    }

}

const clickCounter = () =>{
    clicks +=1;
    moves=clicks/2;
    moves=Math.floor(moves);
    document.getElementById("clicks").innerHTML = moves;
}


const reset = () => {
    for(let i = 0; i<deckArray.length; i++) {
        const card = document.getElementById(i.toString());
        if (card) {
            card.remove();
        }
    }
    moves = 0;
    doneCards.length =[];
    clickedCards.length = [];
    clickedCardsId.length = [];
    clicks = 0;
    shuffledDeck(deckArray);
    namesDeck = deckArray.map((cards) => {return cards.name});
    createDeck()
    document.getElementById("clicks").innerHTML = moves;
}

createDeck();