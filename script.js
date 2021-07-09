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
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const clickedCards = [];
const clickedCardsId = [];
const doneCards = [];
let clicks = 0;
let moves = 0;
shuffledDeck(deckArray);




const createDeck = () => {
    const namesDeck =deckArray.map((cards) => {return cards.name});

    for(let i=0;i<namesDeck.length;i++) {
        const card = document.createElement('img');

        card.setAttribute('src','tile.jpg')
        card.setAttribute('data-id',i);
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


const deckRemove = () => {

    const card = document.querySelectorAll("#singleBox")
    card.remove();

}
const reset = () =>{
    deckRemove();
    // moves = 0;
    // doneCards.length =[];
    // clickedCards.length = [];
    // clickedCardsId.length = [];
    // clicks = 0;
    // shuffledDeck(deckArray);
    // createDeck();

}
createDeck();