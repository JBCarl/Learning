const cardArray = [
    {
        name: '1',
        img:'images/pic1.jpeg',
    },
    {
        name: '2',
        img:'images/pic2.jpeg'
    },
    {
        name: '3',
        img:'images/pic3.jpeg'
    },
    {
        name: '4',
        img:'images/pic4.jpeg'
    },
    {
        name: '5',
        img:'images/pic5.jpeg'
    },
    {
        name: 'stack',
        img:'images/stack.jpeg'
    },
    {
        name: '1',
        img:'images/pic1.jpeg'
    },
    {
        name: '2',
        img:'images/pic2.jpeg'
    },
    {
        name: '3',
        img:'images/pic3.jpeg'
    },
    {
        name: '4',
        img:'images/pic4.jpeg'
    },
    {
        name: '5',
        img:'images/pic5.jpeg'
    },
    {
        name: 'stack',
        img:'images/stack.jpeg'
    }
]

//console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const score = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
let cardsFound = []
let cardsMissed = []

function createBoard () {
    for (let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        //console.log(card, i)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id')
    //console.log('clicked', cardId)
    //console.log(cardArray[cardId])d
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }

}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    //console.log('check')
    //console.log(cardsChosenIds)
    if(cardsChosenIds[0] == cardsChosenIds[1]){
        alert('Stop clicking the same card...')
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.png')
        cardsChosenIds = []
        cardsChosen = []
        return
    }
    if(cardsChosen[0] == cardsChosen[1]){
        //alert('Match')
        cards[cardsChosenIds[0]].setAttribute('src','images/White.png')
        cards[cardsChosenIds[1]].setAttribute('src','images/White.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
        cardsFound.push(cardsChosen)
    }
    else{
        console.log(cardsChosenIds)
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.png')
        cardsMissed.push(cardsChosen)
    }
    score.innerHTML =  cardsFound.length - cardsMissed.length * 2
        cardsChosenIds = []
        cardsChosen = []
    if(cardsFound.length == cardArray.length/2){
        if(score.innerHTML < 0){
            alert('You win, I guess...')
        }
        else{
            alert("You won, bet you can't do it again")
        }
    }
}


