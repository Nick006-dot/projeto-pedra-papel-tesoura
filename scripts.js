const optionImage = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const outcomeText = document.querySelector(".outcome-text")
const userOutcome = document.querySelector(".user-outcome img")
const computerOutcome = document.querySelector(".computer-outcome img")

const computerSrcImages = ['images/pedra.png', 'images/papel.png', 'images/tesoura.png']

/*

 (R) Rock - pedra
 (P) Paper - papel
 (S) Scissor - tesoura

 Pedra - Ganha de tesoura, perde para papel
 Papel - Ganha de pedra, perde para tesoura
 Tesoura - Ganha de papel, Perde para pedra

*/

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você",
}

function handleOptionClick(event){
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImage).indexOf(clickedImage)

    container.classList.add("start")
    outcomeText.textContent = "..."

    userOutcome.src = computerOutcome.src = 'images/pedra.png'

    setTimeout(() => {
        container.classList.remove("start")

        userOutcome.src = computerSrcImages[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length) 
        computerOutcome.src = computerSrcImages[randomNumber]

        const userValue = ['R', 'P' ,'S'] [userIndex]
        const computerValue = ['R', 'P' ,'S'] [randomNumber]
        const userComputerResult = userValue + computerValue
        const finalOutcome = winner[userComputerResult]

        outcomeText.textContent = userValue === computerValue ? 'Empate' : finalOutcome + ' Ganhou!'
    }, 2000);
}



optionImage.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})


