const grid = document.querySelector(".grid");
const player = document.querySelector("#player");
const timer = document.querySelector("#timer");

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

let firstCard = "";
let secondCard = "";
let intervalTimerKey;

const checkEndOfTheGame = () => {

    const cardsNumber = document.querySelectorAll(".card").length;
    const disabledCards = document.querySelectorAll(".disabled-card").length;

    if (cardsNumber === disabledCards) {
        clearInterval(intervalTimerKey);
        alert(`Parabéns, ${player.textContent}! Seu tempo foi de ${timer.textContent}`);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    
    if (firstCharacter === secondCharacter) {

        
        firstCard.firstChild.classList.add("disabled-card");
        secondCard.firstChild.classList.add("disabled-card");

        firstCard = "";
        secondCard = "";

        checkEndOfTheGame();
    }
    else {
       setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = "";
            secondCard = "";

       }, 400);
    }
}

const revealCard = ({target}) => {
    const targetParent = target.parentNode;

    if (targetParent.classList.contains("reveal-card")) {
        return;
    }

    if (firstCard === "") {
        targetParent.classList.add("reveal-card");
        firstCard = targetParent;
    }
    else if (secondCard === "") {
        targetParent.classList.add("reveal-card");
        secondCard = targetParent;

        checkCards();
    }

}

const createElement = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;

    return element;
}

const createCard = (character) => {

    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url("../../img/${character}.png")`;

    card.append(front, back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-character", character)

    return card;
}

const loadGame = () => {
    const duplicateArray = [...characters, ...characters];
    const shuffledArray = duplicateArray.sort(() => Math.random() > 0.5 ? 1 : -1);
    
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

const intervalTimer = () => {

    intervalTimerKey = setInterval(() => {
        timer.textContent = Number(timer.textContent) + 1;
    }, 1000)
}

window.onload = () => {

    player.textContent = sessionStorage.getItem("player-name");
    intervalTimer();
    loadGame();
}
    

