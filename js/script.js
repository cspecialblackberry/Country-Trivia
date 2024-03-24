//letters that have only two countries: Z
//letters that have only one country: O, Q, W, Y, 
//letters with no countries: X 

const startBtn = document.getElementById('start-button')
const letterDiv = document.getElementById('round-letter')
const inputSection = document.getElementById('input-section')
const buttonSection = document.getElementById('button-section')

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']

const run = () => {
    startBtn.setAttribute('class', 'hidden')
    const roundLetter = letters[Math.floor(Math.random() * letters.length)]

    const letterDisplay = document.createElement('h1')
    letterDisplay.textContent = `This round's letter is ${roundLetter}` 
    letterDiv.appendChild(letterDisplay)

    let countryCount = 3

    console.log(roundLetter)

    if(roundLetter === 'Z'){
        countryCount = 2
    } else if(roundLetter === 'O' || roundLetter === 'Q' || roundLetter ==='W' || roundLetter === 'Y' ){
        countryCount = 1 
    }

    console.log(countryCount)
}

startBtn.addEventListener('click', run)