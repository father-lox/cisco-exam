    let questionsB = [];

    let questions = document.querySelectorAll(".wpProQuiz_quiz .wpProQuiz_list")[0];

    for (const question of questions.children) {
        let item = {
            question: "",
            answers: [],
            correctAnswer: null
        }
        
        if (question.querySelector("img") === null) {
            item.question = question.querySelector("strong").textContent;
            item.answers = Array.from(question.querySelectorAll("li label")).map(answer => answer.textContent.trim());
            item.correctAnswer = question.querySelector('span[style="color: #ff0000;"]').parentElement.getAttribute("data-pos");
            Number(item.correctAnswer);
            questionsB.push(item);
        }
    }

console.log(questionsB)