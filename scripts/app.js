// get HTML elements
const mainContainer = document.querySelector('#main-container');
const question = document.querySelector('#question');
const answerOptionContainer = document.querySelector('#answer-option-container');
const answer = document.querySelector('#answer');
const summary = document.querySelector('#summary');
const nextBtn = document.querySelector('#next-btn');

let randIndexArr = [];

function makeRandIndex(arr) {
    for (let i in questionAnswers) {
        randIndexArr.push(i)
    }
    return randIndexArr.sort((a, b) => 0.5 - Math.random());
}

// cycle thru questionsAnswers
let questionIndex = 0,
    currIndex, answerOptions;

function loadQuestions(arr, questionIndex) {
    currIndex = randIndexArr[questionIndex]

    // clear previous UI items (displayed only on correct answer)
    answer.innerText = '';
    summary.innerText = '';
    nextBtn.style.display = 'none'
    // reset, get new answer options
    answerOptionContainer.innerHTML = '';
    answerOptions = arr[currIndex].answerOptions;

    question.innerText = `QUESTION: ${arr[currIndex].question}`;

    const li = document.createElement('li');
    li.classList = 'answer-option pointer';

    for (let i of answerOptions) {
        li.innerText = `${Object.keys(i)}: ${Object.values(i)}`
        answerOptionContainer.appendChild(li.cloneNode(true));
    }
    return currIndex;
};

let userAnswer, clickCount = 0,
    correctAnswers = 0;
flyinEgg.classList = '';

// get user clicked answer-option
answerOptionContainer.addEventListener('click', (e) => {
    if (e.target.className != 'answer-option pointer') {
        return;
    } else { userAnswer = e.target }
    console.log(questionIndex)
    if (userAnswer.innerText.slice(0, 1) == `${questionAnswers[currIndex].answer}`) {
        clickCount++;
        answer.innerText = `ANSWER: ${userAnswer.innerText.slice(3)} is CORRECT!!!`;
        if (userAnswer.innerText.slice(3) == 'easter egg') {
            flyinEgg();
        }
        setTimeout(() => {
            summary.innerHTML = `${questionAnswers[currIndex].summary}`;
            nextBtn.innerText = 'NEXT QUESTION';
            nextBtn.style.display = 'block';
            // scroll to answer (for small screens)
            if (questionIndex != randIndexArr.length) {
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
    // if all questions completed 
    if (questionIndex == randIndexArr.length - 1) {
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
            randIndexArr = [];
            makeRandIndex(questionAnswers);
            loadQuestions(questionAnswers, questionIndex);
        })
        // load new question
    } else {
        questionIndex++;
        loadQuestions(questionAnswers, questionIndex);
    };
});

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
    makeRandIndex(questionAnswers);
});