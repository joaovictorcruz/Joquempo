const $buttonStone1 = document.querySelector('.button-stone-1')
const $buttonPaper1 = document.querySelector('.button-paper-1')
const $buttonScissors1 = document.querySelector('.button-scissors-1')

const $buttonStone2 = document.querySelector('.button-stone-2')
const $buttonPaper2 = document.querySelector('.button-paper-2')
const $buttonScissors2 = document.querySelector('.button-scissors-2')

const $buttonReset = document.querySelector('.button-reset')

const $fieldPlayer1 = document.querySelector('.field-1')
const $fieldPlayer2 = document.querySelector('.field-2')

const $winnerTitle = document.querySelector('.winner-title')

const $buttonStart = document.querySelector('.button-start')

const $scoreBoard1 = document.querySelector('.scoreboard-1')
const $scoreBoard2 = document.querySelector('.scoreboard-2')

let movePlayer1 = ''
let movePlayer2 = ''
let winner = null
let scorePlayer1 = 0
let scorePlayer2 = 0
let gameStart = false

console.log(movePlayer1)
console.log(movePlayer2)

function verifyWinner() {
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {
        winner = 2
    } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {
        winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {
        winner = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
        winner = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone') {
        winner = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
        winner = 1
    } else if (movePlayer1 == movePlayer2) {
        winner = 0
    }
}

function printWinnerName(winner) {
    if (winner == 1) {
        $winnerTitle.innerHTML = 'Jogador 1 ganhou!'
    } else if (winner == 2) {
        $winnerTitle.innerHTML = 'Jogador 2 ganhou!'
    } else {
        $winnerTitle.innerHTML = 'Empatou'
    }
}

function givePoint(winner){
    if (winner == 1) {
        scorePlayer1 = scorePlayer1 + 1
    } else if(winner == 2) {
        scorePlayer2 = scorePlayer2 +1
    }    
}

function printPoint(){
    $scoreBoard1.innerHTML = scorePlayer1
    $scoreBoard2.innerHTML = scorePlayer2
}

function resetBoards(){
    $fieldPlayer1.innerHTML = ''
    $fieldPlayer2.innerHTML = ''
}

function resetVariables(){
    movePlayer1 = ''
    movePlayer2 = ''
}

function resetScore(){
    $scoreBoard1.innerHTML = '0'
    $scoreBoard2.innerHTML = '0'
}

function resetWinnerTitle(){
    $winnerTitle.innerHTML = 'Vencedor'
}

function resetScorePlayerVariables(){
    scorePlayer1 = 0
    scorePlayer1 = 0
}

function resetAll(){
    resetVariables()
    resetBoards()
    resetScore()
    resetWinnerTitle()
    resetScorePlayerVariables()
}

$buttonStone1.addEventListener('click', function (){
    if (gameStart == false) return
    $fieldPlayer1.innerHTML = '<img class="image-move" src="./images/stone.png"/>'
    movePlayer1 = 'stone'
    verifyWinner()
    if (winner != null) {
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        resetVariables
        setTimeout(resetBoards, 1000)
    }
})

$buttonPaper1.addEventListener('click', function () {
    if (gameStart == false) return
    $fieldPlayer1.innerHTML = '<img class="image-move" src="./images/paper.png"/>'
    movePlayer1 = 'paper'
    verifyWinner()
    if (winner != null) {
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        resetVariables
        setTimeout(resetBoards, 1000)
    }
})

$buttonScissors1.addEventListener('click', function () {
    if (gameStart == false) return
    $fieldPlayer1.innerHTML = '<img class="image-move" src="./images/scissors.png"/>'
    movePlayer1 = 'scissors'
    verifyWinner()
    if (winner != null) {
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        resetVariables
        setTimeout(resetBoards, 1000)
    }
})

$buttonStone2.addEventListener('click', function () {
    if (gameStart == false) return
    $fieldPlayer2.innerHTML = '<img class="image-move" src="./images/stone.png"/>'
    movePlayer2 = 'stone'
    verifyWinner()
    if (winner != null) {
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        resetVariables
        setTimeout(resetBoards, 1000)
    }
})

$buttonPaper2.addEventListener('click', function () {
    if (gameStart == false) return
    $fieldPlayer2.innerHTML = '<img class="image-move" src="./images/paper.png"/>'
    movePlayer2 = 'paper'
    verifyWinner()
    if (winner != null) {
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        resetVariables
        setTimeout(resetBoards, 1000) 
    }
})

$buttonScissors2.addEventListener('click', function () {
    if (gameStart == false) return
    $fieldPlayer2.innerHTML = '<img class="image-move" src="./images/scissors.png"/>'
    movePlayer2 = 'scissors'
    verifyWinner()
    if (winner != null) {
        printWinnerName(winner)
        givePoint(winner)
        printPoint()
        resetVariables
        setTimeout(resetBoards, 1000)
    }
})

$buttonReset.addEventListener('click', resetAll)

$buttonStart.addEventListener('click', function(){
    if (gameStart == false) {
        gameStart = true
        $buttonStart.classList.add('button-active')
        $buttonStart.innerHTML = 'Parar'
    } else {
        gameStart = false
    gameStart = true
    $buttonStart.classList.add('button-active')
    $buttonStart.innerHTML = 'Iniciar'
    }
})