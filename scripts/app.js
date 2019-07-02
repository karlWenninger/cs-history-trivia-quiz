// get HTML elements
const question = document.querySelector('#question');
const answerOptionContainer = document.querySelector('#answer-option-container');
const answer = document.querySelector('#answer');
const summary = document.querySelector('#summary');
const nextBtn = document.querySelector('#next-btn');

// cycle thru questionsAnswers
let qaIndex = 0;
let answerOptions;

function loadQandAs(arr, index) {
    question.innerText = `QUESTION: ${arr[index].question}`;

    answerOptions = arr[index].answerOptions;

    // clear previous answerOptions 
    answerOptionContainer.innerHTML = '';

    const li = document.createElement('li');
    li.classList = 'answer-option pointer';

    for (let i of answerOptions) {
        li.innerText = `${Object.keys(i)}: ${Object.values(i)}`
        answerOptionContainer.appendChild(li.cloneNode(true));
    }
    // clear UI items (displayed only on correct answer)
    answer.innerText = '';
    summary.innerText = '';
    nextBtn.style.display = 'none'
};

let clickCount = 0;
let correctAnswers = 0;
flyinEgg.classList = '';

// get user clicked answer-option
answerOptionContainer.addEventListener('click', (e) => {
    // target user click
    if (e.target.classList.contains('answer-option')); {
        userAnswer = e.target;
    };

    if (userAnswer.innerText.slice(0, 1) == `${questionAnswers[qaIndex].answer}`) {
        clickCount++;
        answer.innerText = `ANSWER: ${userAnswer.innerText.slice(3)} is CORRECT!!!`;
        if (userAnswer.innerText.slice(3) == 'easter egg') {
            flyinEgg();
        }
        setTimeout(() => {
            summary.innerHTML = `${questionAnswers[qaIndex].summary}`;
            nextBtn.innerText = 'NEXT QUESTION';
            nextBtn.style.display = 'block';
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

// randomize questionAnswer index order
let randIndexArr = [];

function makeRandIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randNum = Math.floor(Math.random() * arr.length);
        if (randIndexArr.indexOf(randNum) == -1) {
            randIndexArr.push(randNum);
            return qaIndex = randNum;
        } else { i--; }
    }
}

// load next question, track correctAnswers 
// btn is hidden until correct answer selected
nextBtn.addEventListener('click', () => {
    if (clickCount == 1) {
        correctAnswers++;
    }
    clickCount = 0;

    // if all questions completed 
    if (randIndexArr.length == questionAnswers.length) {
        question.innerText = '';
        answer.innerText = '';
        summary.innerText = '';
        answerOptionContainer.innerHTML = '';

        const endMsg = document.createElement('div');
        endMsg.innerHTML = `<h4>YOU ANSWERED ${correctAnswers} OUT OF ${questionAnswers.length} CORRECTLY ON THE FIRST CLICK. CONGRATS!!!</h4><br><p>If you liked these questions here's some more stuff you'll enjoy:</p>${endGameLinks}`;
        question.appendChild(endMsg);
        correctAnswers = 0;
        randIndexArr = [];
        nextBtn.innerText = 'DO QUIZ AGAIN';

        // load new question
    } else {
        makeRandIndex(questionAnswers);
        loadQandAs(questionAnswers, qaIndex);
        // console.log(`randIndexArr ${randIndexArr.length} correctAnswers ${correctAnswers} ${questionAnswers.length}`)
    };
});

function flyinEgg() {
    const flyinEgg = document.querySelector('#flyin-egg');
    flyinEgg.className = 'move-da-egg';
}

// add question on page load
document.addEventListener('DOMContentLoaded', () => {
    const startMsg = document.createElement('div');
    startMsg.style.textAlign = 'center';
    startMsg.style.marginTop = '';
    startMsg.innerHTML = `COMPUTER HISTORY<br>&&<br>TRIVIA QUIZ<br><br>
                           ${questionAnswers.length} multiple choice questions<br><br>
                          (click on correct answer)`;
    question.appendChild(startMsg);
    nextBtn.innerHTML = 'START<br>QUIZ';
    nextBtn.addEventListener('click', () => {
        makeRandIndex(questionAnswers);
        loadQandAs(questionAnswers, qaIndex);

    })
});