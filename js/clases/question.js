export default class Question {
    constructor(questions, wrapper) {
        this.questions = questions;
        this.countQuestions = questions.length;
        this.$wrapper = wrapper, this.$correctAnswers = null, this.$wrongAnswers = null;
        this.countCorrectAnswers = 0, this.countWrongAnswers = 0, this.numberQuestion = 0;
        this.isWrongAnswer = false;
    }

    init() {
        this.createScore();
        this.createQuestion(this.questions[this.numberQuestion]);
    }

    createScore() {
        let score = `<div class="score">
            <span>&#10004;: <span id="correctAnswers">${this.countCorrectAnswers}</span></span>
            <span>&#10006;: <span id="wrongAnswers">${this.countWrongAnswers}</span></span>
        </div>`;
        this.$wrapper.insertAdjacentHTML("beforeend", score);

        this.$correctAnswers = document.getElementById("correctAnswers");
        this.$wrongAnswers = document.getElementById("wrongAnswers");
    }

    createQuestion(que) {
        // Make question title template
        let h1 = `<h1>${this.numberQuestion + 1 + "/" + this.countQuestions + " " + que.question}</h1>`;
        
        // Make answers template
        let answers = ``;
        que.answers.forEach((answer, index) => {
            answers += `
                <div class="answer">
                    <input type="radio" data-index="${index}" data-correct-answer="${index == que.correctAnswer ? true : false}" name="answers" id="answer-${index}">
                    <label for="answer-${index}">${answer}</label>
                </div>
            `;
        });
        
        // Make question as html
        let template = `
            <div class="question">
                ${h1}
                ${answers}
            </div>
        `;
        this.$wrapper.insertAdjacentHTML("beforeend", template);
        this.$wrapper.querySelectorAll(".answer input[type='radio']")
            .forEach(item => item.addEventListener("change", this.check.bind(this)));
    }

    check(evt) {
        if (evt.target.getAttribute("data-correct-answer") === "true") {
            evt.target.nextElementSibling.style.color = "green";
            this.numberQuestion++;
            if (!this.isWrongAnswer) {
                this.countCorrectAnswers++;
            }
            else {
                this.isWrongAnswer = false;
            }
            setTimeout(() => {
                document.querySelector(".question").remove();
                this.createQuestion(this.questions[this.numberQuestion]);
            }, 2000);
        }
        else {
            evt.target.nextElementSibling.style.color = "red";
            this.countWrongAnswers++;
            this.isWrongAnswer = true;
        }
        this.updateScore();
    }

    updateScore() {
        if (this.$correctAnswers != null && this.$wrongAnswers != null) {
            this.$correctAnswers.textContent = this.countCorrectAnswers;
            this.$wrongAnswers.textContent = this.countWrongAnswers;
        }
        else {
            this.createScore();
        }
    }
}