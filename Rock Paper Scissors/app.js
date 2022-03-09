

const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoiceInternal = e.target.id 
    userChoice.innerHTML = userChoiceInternal
    generateComputerChoice()
    calculateResult()
}))

function generateComputerChoice(){
    const choicen = Math.floor(Math.random()* possibleChoices.length)
    //console.log(choicen)
    //Is there an array lookup to do this shorter?
    if (choicen === 0){
        computerChoiceInternal = 'rock'}
    if (choicen === 1){
        computerChoiceInternal = 'paper'}
    if (choicen === 2){
        computerChoiceInternal = 'scissors'}
        console.log(computerChoiceInternal)
    computerChoice.innerHTML = computerChoiceInternal
}

function calculateResult(){
    if (computerChoiceInternal === userChoiceInternal){
        result = 'draw! Play again!'}
    if (computerChoiceInternal === 'rock' && userChoiceInternal === 'paper'){
        result = 'win!'}
    if (computerChoiceInternal === 'rock' && userChoiceInternal === 'scissors'){
        result = 'lose!'}  
    if (computerChoiceInternal === 'paper' && userChoiceInternal === 'rock'){
        result = 'lose!'}
    if (computerChoiceInternal === 'paper' && userChoiceInternal === 'scissors'){
        result = 'win!'}  
    if (computerChoiceInternal === 'scissors' && userChoiceInternal === 'paper'){
        result = 'lose!'}
    if (computerChoiceInternal === 'scissors' && userChoiceInternal === 'rock'){
        result = 'win!'} 
        //console.log(result)
        resultDisplay.innerHTML = result         
}