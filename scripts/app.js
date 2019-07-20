const mainContainer = document.querySelector('#main-container');
const question = document.querySelector('#question');
const answerOptionContainer = document.querySelector('#answer-option-container');
const answer = document.querySelector('#answer');
const summary = document.querySelector('#summary');
const nextBtn = document.querySelector('#next-btn');

// cycle thru questionsAnswers
let questionIndex = -1;

function loadQuestions(arr, questionIndex) {
    // clear previous answer items, display current on correct answer
    answer.innerText = '';
    summary.innerText = '';
    nextBtn.style.display = 'none'
    answerOptionContainer.innerHTML = '';
    answerOptions = arr[questionIndex].answerOptions;

    question.innerText = `QUESTION: ${arr[questionIndex].question}`;

    const li = document.createElement('li');
    li.classList = 'answer-option pointer';

    for (let i of answerOptions) {
        li.innerText = `${Object.keys(i)}: ${Object.values(i)}`
        answerOptionContainer.appendChild(li.cloneNode(true));
    }
    return questionIndex;
};

// get user clicked answer-option
let userAnswer, clickCount = 0,
    correctAnswers = 0;
flyinEgg.classList = '';

answerOptionContainer.addEventListener('click', (e) => {
    if (e.target.className != 'answer-option pointer') {
        return;
    } else { userAnswer = e.target }
    if (userAnswer.innerText.slice(0, 1) == `${questionAnswers[questionIndex].answer}`) {
        clickCount++;
        answer.innerText = `ANSWER: ${userAnswer.innerText.slice(3)} is CORRECT!!!`;
        if (userAnswer.innerText.slice(3) == 'easter egg') {
            flyinEgg();
        }
        setTimeout(() => {
            summary.innerHTML = `${questionAnswers[questionIndex].summary}`;
            nextBtn.innerText = 'NEXT QUESTION';
            nextBtn.style.display = 'block';

            // scroll to answer (for small screens)
            if (questionIndex != questionAnswers.length) {
                nextBtn.scrollIntoView(true);
            }

        }, 100)
    } else {
        clickCount++;
        answer.innerText = 'ANSWER:';
        nextBtn.style.display = 'none';
        summary.innerText = '';

        if (clickCount == 1) {
            answer.innerText = 'ANSWER: NOPE TRY AGAIN!!!';
            // flash alert
        } else {
            setTimeout(() => {
                answer.innerText = 'ANSWER: NOPE TRY AGAIN!!!';
            }, 150)
        }
    };
});

// load next question, track correctAnswers, btn is hidden until correct answer selected
nextBtn.addEventListener('click', () => {
    if (clickCount == 1) {
        correctAnswers++;
    }
    clickCount = 0;
    mainContainer.scrollIntoView(true);

    console.log(questionIndex + ' ' + questionAnswers.length)


    // if all questions completed 
    if (questionIndex == questionAnswers.length - 1) {
        question.innerText = '';
        answer.innerText = '';
        summary.innerText = '';
        answerOptionContainer.innerHTML = '';

        // display end msg splash screen
        const endMsg = document.createElement('div');
        endMsg.innerHTML = `<h4>YOU ANSWERED ${correctAnswers} OUT OF ${questionAnswers.length} CORRECTLY ON THE FIRST CLICK. CONGRATS!!!</h4><br><p>If you liked these questions here's some more stuff you'll enjoy:</p>${endGameLinks}`;
        question.appendChild(endMsg);

        nextBtn.innerText = 'DO QUIZ AGAIN';
        nextBtn.addEventListener('click', () => {
            correctAnswers = 0;
            loadQuestions(questionAnswers, questionIndex);
        })
        // load new question
    } else {
        questionIndex++;
        loadQuestions(questionAnswers, questionIndex);
    };
});

// for easter egg question
function flyinEgg() {
    const flyinEgg = document.querySelector('#flyin-egg');
    flyinEgg.className = 'flyin-egg-ani';
}

// add question on page load
document.addEventListener('DOMContentLoaded', () => {
    // opening splash screen only
    const startMsg = document.createElement('div');
    startMsg.style.textAlign = 'center';
    startMsg.innerHTML = `COMPUTER HISTORY<br>&&<br>TRIVIA QUIZ<br><br>
                           ${questionAnswers.length} multiple choice questions<br><br>
                          (click on correct answer)`;
    question.appendChild(startMsg);

    nextBtn.innerHTML = 'START<br>QUIZ';
});