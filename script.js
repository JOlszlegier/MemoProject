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
            name:'squirrel',
            img: 'squirrel100.jpg'
        },
        {
            name:'squirrel',
            img: 'squirrel100.jpg'
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


shuffledDeck(deckArray);


const namesDeck =deckArray.map((cards) => {return cards.name});


//TODO : make this one better
const createDeck = () => {
    for(let i=0;i<namesDeck.length;i++) {
        const card = document.createElement('img');

        // card.setAttribute('src',deckArray[i].img)
        card.setAttribute('src','blank.jpg')
        card.setAttribute('data-id',i);

        box.append(card);
    }
}

const images = document.querySelectorAll("img");

const click = () =>{



}


createDeck();