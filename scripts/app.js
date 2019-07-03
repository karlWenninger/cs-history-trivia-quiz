// get HTML elements
const question = document.querySelector('#question');
const answerOptionContainer = document.querySelector('#answer-option-container');
const answer = document.querySelector('#answer');
const summary = document.querySelector('#summary');
const nextBtn = document.querySelector('#next-btn');

let randIndexArr = [];
function makeRandIndex(arr) {
    for (let i in questionAnswers) {
        console.log(i)
        randIndexArr.push(i)
    }
    return randIndexArr.sort((a, b) => 0.5 - Math.random());
}

// cycle thru questionsAnswers
let qaIndex = 0;
let answerOptions;

function loadQuestions(arr, qaIndex) {
    question.innerText = `QUESTION: ${arr[randIndexArr[qaIndex]].question}`;

    answerOptions = arr[randIndexArr[qaIndex]].answerOptions;

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
    if (e.target.className != 'answer-option pointer') {
        return;
    } else { userAnswer = e.target }

    if (userAnswer.innerText.slice(0, 1) == `${questionAnswers[randIndexArr[qaIndex]].answer}`) {
        clickCount++;
        answer.innerText = `ANSWER: ${userAnswer.innerText.slice(3)} is CORRECT!!!`;
        if (userAnswer.innerText.slice(3) == 'easter egg') {
            flyinEgg();
        }
        setTimeout(() => {
            summary.innerHTML = `${questionAnswers[randIndexArr[qaIndex]].summary}`;
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

// load next question, track correctAnswers 
// btn is hidden until correct answer selected
nextBtn.addEventListener('click', () => {
    console.log(qaIndex , randIndexArr.length, randIndexArr[qaIndex])
    if (clickCount == 1) {
        correctAnswers++;
    }
    clickCount = 0;

    // if all questions completed 
    if (qaIndex == randIndexArr.length - 1) {
        // clear all this stuff
        question.innerText = '';
        answer.innerText = '';
        summary.innerText = '';
        answerOptionContainer.innerHTML = '';
        // to display end msg splash screen
        const endMsg = document.createElement('div');
        endMsg.innerHTML = `<h4>YOU ANSWERED ${correctAnswers} OUT OF ${questionAnswers.length} CORRECTLY ON THE FIRST CLICK. CONGRATS!!!</h4><br><p>If you liked these questions here's some more stuff you'll enjoy:</p>${endGameLinks}`;
        question.appendChild(endMsg);

        nextBtn.innerText = 'DO QUIZ AGAIN';
        nextBtn.addEventListener('click', () => {
            correctAnswers = 0;
            randIndexArr = [];
            makeRandIndex(questionAnswers);
            loadQuestions(questionAnswers, qaIndex);
        })
        // load new question
    } else {
        qaIndex++;
        loadQuestions(questionAnswers, qaIndex);
        // alert('this is the else trigger')
    };
});

function flyinEgg() {
    const flyinEgg = document.querySelector('#flyin-egg');
    flyinEgg.className = 'move-da-egg';
}

// add question on page load
document.addEventListener('DOMContentLoaded', () => {
    // opening splash screen only
    const startMsg = document.createElement('div');
    startMsg.style.textAlign = 'center';
    startMsg.style.marginTop = '';
    startMsg.innerHTML = `COMPUTER HISTORY<br>&&<br>TRIVIA QUIZ<br><br>
                           ${questionAnswers.length} multiple choice questions<br><br>
                          (click on correct answer)`;
    question.appendChild(startMsg);
    
    nextBtn.innerHTML = 'START<br>QUIZ';
    makeRandIndex(questionAnswers);
});