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
    
    let countryCount = 3

    if(roundLetter === 'Z'){
        countryCount = 2
    } else if(roundLetter === 'O' || roundLetter === 'Q' || roundLetter ==='W' || roundLetter === 'Y'){
        countryCount = 1 
    }

    const letterDisplay = document.createElement('h1')
    letterDisplay.textContent = `Enter ${countryCount} countries starting with ${roundLetter}.` 
    letterDiv.appendChild(letterDisplay)

    for(i=0; i<countryCount; i++){
        const inputDiv = document.createElement('div')
        const listTag = document.createElement('p')
        listTag.textContent= `${i+1}.`
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('placeholder', 'Enter Country')
        inputDiv.appendChild(listTag)
        inputDiv.appendChild(input)
        inputSection.appendChild(inputDiv)
    }
}

startBtn.addEventListener('click', run)