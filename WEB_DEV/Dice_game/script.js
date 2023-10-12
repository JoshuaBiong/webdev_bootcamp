// let randomNum = randomNum.random() * 6
// console.log(randomNum)
// random image generator for DICE 1
let randomNum = Math.floor(Math.random() * 6 + 1)
let randomDice = 'dice' + randomNum + '.png'
let randomImageSource = '../Dice_game/images/' + randomDice
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)


// random image generator for DICE 2
let randomNum2 = Math.floor(Math.random() * 6 + 1)
let randomDice2 = 'dice' + randomNum2 + '.png'
let randomImageSource2 = '../Dice_game/images/' + randomDice2
let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource2)

if (randomDice > randomDice2) {
    document.querySelectorAll("h2")[0].innerHTML = "Player 1 Win! "
        // console.log("player one WIN")
} else if (randomDice < randomDice2) {
    // console.log("player 2 WIN")
    document.querySelectorAll("h2")[0].innerHTML = "Player 2 Win! "
} else {
    console.log('DRAW')
}

// let result = document.getElementsByClassName('container')