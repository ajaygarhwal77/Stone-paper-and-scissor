const computerImage = document.querySelector(`.computerimage`);
const divOfComputer = document.querySelector(`.computerdiv`);
const userStoneDiv = document.querySelector(`.userstone`);
const userPaperDiv = document.querySelector(`.userpaper`);
const userScissorDiv = document.querySelector(`.userscissor`);
const texts = document.querySelector(`.texts`);
const situations = [`stone`, `paper`, `scissor`];
let randomSituation;
let userScore = 0;
let computerScore = 0;
const resettingTime = function () {
    userStoneDiv.style.pointerEvents = 'auto';
    userPaperDiv.style.pointerEvents = 'auto';
    userScissorDiv.style.pointerEvents = 'auto';
    computerImage.classList.remove(`addedpropertytoimage`);
    divOfComputer.style.backgroundColor = `#fc032c`;
    computerImage.src = `question_marks_12_550.png`;
    userStoneDiv.style.backgroundColor = `#fc032c`;
    userScissorDiv.style.backgroundColor = `#fc032c`;
    userPaperDiv.style.backgroundColor = `#fc032c`;
};
userStoneDiv.addEventListener(`click`, function () {
    randomSituation = Math.trunc(Math.random() * situations.length);
    console.log(situations[randomSituation]);
    computerImage.src = `${situations[randomSituation]}.png`;
    computerImage.classList.add(`addedpropertytoimage`);
    if (situations[randomSituation] === `stone`) {
        divOfComputer.style.backgroundColor = `yellow`;
        userStoneDiv.style.backgroundColor = `yellow`;
    } else if (situations[randomSituation] === `paper`) {
        divOfComputer.style.backgroundColor = `green`;
        computerScore++;
        texts.textContent = `User have ${userScore} points and Computer have ${computerScore} points.`
    } else if (situations[randomSituation] === `scissor`) {
        userStoneDiv.style.backgroundColor = `green`;
        userScore++;
        texts.textContent = `User have ${userScore} points and Computer have ${computerScore} points.`
    };
    userScissorDiv.style.pointerEvents = 'none';
    userStoneDiv.style.pointerEvents = 'none';
    userPaperDiv.style.pointerEvents = 'none';
    setTimeout(resettingTime, 2000);
});
userPaperDiv.addEventListener(`click`, function () {
    randomSituation = Math.trunc(Math.random() * situations.length);
    console.log(situations[randomSituation]);
    computerImage.src = `${situations[randomSituation]}.png`;
    computerImage.classList.add(`addedpropertytoimage`);
    if (situations[randomSituation] === `paper`) {
        divOfComputer.style.backgroundColor = `yellow`;
        userPaperDiv.style.backgroundColor = `yellow`;
    } else if (situations[randomSituation] === `scissor`) {
        divOfComputer.style.backgroundColor = `green`;
        computerScore++;
        texts.textContent = `User have ${userScore} points and Computer have ${computerScore} points.`
    } else if (situations[randomSituation] === `stone`) {
        userPaperDiv.style.backgroundColor = `green`;
        userScore++;
        texts.textContent = `User have ${userScore} points and Computer have ${computerScore} points.`
    };
    userScissorDiv.style.pointerEvents = 'none';
    userStoneDiv.style.pointerEvents = 'none';
    userPaperDiv.style.pointerEvents = 'none';
    setTimeout(resettingTime, 2000);
});
userScissorDiv.addEventListener(`click`, function () {
    randomSituation = Math.trunc(Math.random() * situations.length);
    console.log(situations[randomSituation]);
    computerImage.src = `${situations[randomSituation]}.png`;
    computerImage.classList.add(`addedpropertytoimage`);
    if (situations[randomSituation] === `scissor`) {
        divOfComputer.style.backgroundColor = `yellow`;
        userScissorDiv.style.backgroundColor = `yellow`;
    } else if (situations[randomSituation] === `stone`) {
        divOfComputer.style.backgroundColor = `green`;
        computerScore++;
        texts.textContent = `User have ${userScore} points and Computer have ${computerScore} points.`
    } else if (situations[randomSituation] === `paper`) {
        userScissorDiv.style.backgroundColor = `green`;
        userScore++;
        texts.textContent = `User have ${userScore} points and Computer have ${computerScore} points.`
    };
    userScissorDiv.style.pointerEvents = 'none';
    userStoneDiv.style.pointerEvents = 'none';
    userPaperDiv.style.pointerEvents = 'none';
    setTimeout(resettingTime, 2000);
});