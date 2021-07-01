let body = document.querySelector("body");
let correctAnswers = document.getElementById("correctAnswers");
let wrongAnswers = document.getElementById("wrongAnswers");

let countCorrectAnswers = 0;
let countWrongAnswers = 0;
let countQuestions = info.length;
let numberQuestion = 0;

function createQuestion(question) {
    let h1 = `<h1>${numberQuestion + 1 + "/" + countQuestions + " " + question.question}</h1>`;
    let answerTemplate = ``;
    question.answers.forEach((answer, index) => {
        answerTemplate += `
            <div class="answer">
                <input type="radio" data-index="${index}" data-correct-answer="${index == question.correctAnswer ? true : false}" name="answers" id="answer-${index}">
                <label for="answer-${index}">${answer}</label>
            </div>
        `;
    });
    
    let template = `
        <div class="question">
            ${h1}
            ${answerTemplate}
        </div>
    `;
    body.insertAdjacentHTML("beforeend", template);
    document.querySelectorAll(".answer input[type='radio']").forEach(item => item.addEventListener("change", check));
}

function check(evt) {
    if (evt.target.getAttribute("data-correct-answer") === "true") {
        evt.target.nextElementSibling.style.color = "green";
        numberQuestion++;
        countCorrectAnswers++;
        setTimeout(() => {
            document.querySelector(".question").remove();
            createQuestion(info[numberQuestion]);
        }, 2000);
    }
    else {
        evt.target.nextElementSibling.style.color = "red";
        countWrongAnswers++;
    }
    updataScore(countCorrectAnswers, countWrongAnswers);
}

function updataScore(correct, wrong) {
    correctAnswers.textContent = correct;
    wrongAnswers.textContent = wrong;
}

updataScore(countCorrectAnswers, countWrongAnswers);
createQuestion(info[numberQuestion]);