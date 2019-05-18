// get html elements
const question = document.querySelector('#question');

const answerOptionContainer = document.querySelector('#answer-option-container');

const answer = document.querySelector('#answer');

const summary = document.querySelector('#summary');

const nextQuestionBtn = document.querySelector('#next-question');

// cycle thru questionsAnswers
let qaIndex = 0;

function loadQandAs(questionAnswers, qaIndex) {
    question.innerText = `QUESTION: ${questionAnswers[qaIndex].question}`;

    const answerOptions = questionAnswers[qaIndex].answerOptions;

    document.querySelector('#answer-option-A').innerText = Object.values(answerOptions[0])
    document.querySelector('#answer-option-B').innerText = Object.values(answerOptions[1])
    document.querySelector('#answer-option-C').innerText = Object.values(answerOptions[2])
    document.querySelector('#answer-option-D').innerText = Object.values(answerOptions[3])

    // clear UI items (displayed only on correct answer)
    answer.innerText = 'ANSWER:';
    summary.innerText = '';
    nextQuestionBtn.style.display = 'none'
};

// get clicked answer-option
answerOptionContainer.addEventListener('click', (e) => {
    // target user click
    if (e.target.classList.contains('answer-option')); {
        userAnswer = e.target.innerText;
    };
    if (userAnswer == `${questionAnswers[qaIndex].answer}`) {
        answer.innerText = `ANSWER: ${questionAnswers[qaIndex].answer} is CORRECT!!!`;
        summary.innerText = `${questionAnswers[qaIndex].summary}`;
        nextQuestionBtn.style = '';
    } else {
        answer.innerText = 'ANSWER: NOPE TRY AGAIN!!!';
        summary.innerText = '';
        nextQuestionBtn.style.display = 'none'
    };
});

window.addEventListener('load', () => {
    loadQandAs(questionAnswers, qaIndex);
    return qaIndex;
});

// load next question
nextQuestionBtn.addEventListener('click', () => {
    // if (qaIndex < )
    qaIndex++;
    loadQandAs(questionAnswers, qaIndex);
    return qaIndex;
});


const questionAnswers = [{
        question: 'is credited as the inventor of the World Wide Web',
        answerOptions: [{ A: 'Linus Torvalds' },
            { B: 'Bill Gates' },
            { C: 'Tim Berners-Lee' },
            { D: 'Aida Lovelace' }
        ],
        answer: 'Tim Berners-Lee',
        summary: '"Most of the technology involved in the web, like the hypertext, like the internet, multifont text objects, had all been designed already. I just had to put them together."'
    },
    {
        question: 'This "law" states that computer performance speeds will double every two years',
        answerOptions: [{ A: "Ohm's Law" },
            { B: "Linus's Law" },
            { C: "Snoopy's Law" },
            { D: "Moore's Law" }
        ],
        answer: "Moore's Law",
        summary: 'In 1965 Gordon Moore was director of R&D at Fairchild Semiconductor. He observed and accurately predicted that the number of components on a semiconductor chip would double every two years.'
    },
    {
        question: 'This company is credited with development of the first computer to support a graphical user interface.',
        answerOptions: [{ A: "Intel" },
            { B: "Xerox" },
            { C: "Apple" },
            { D: "Microsoft" }
        ],
        answer: "Xerox",
        summary: "In 1973 (nearly a decade before the first commercially available GUI computer was released) the Xerox Alto was designed and built at the company's Palo Alto Research Center. Apparently Xerox's east coast management didn't understand the revolutionary nature of the GUI technology and never tried to market it."
    },
    {
        question: `look at the following binary numbers and their decimal equivalents:
        0001 = 1
        0010 = 2
        0100 = 4
        what is the decimal equivalent of binary 1000?
        `,
        answerOptions: [{ A: "5" },
            { B: "6" },
            { C: "7" },
            { D: "8" }
        ],
        answer: "8",
        summary: "using a decimal number system each number has a maximum value of 10 times (x10) the number to it's right. In a binary system each number doubles (x2) the value of the number on it's right."
    },
    {
        question: '______ designed the first Apple computer',
        answerOptions: [{ A: "Steve Wozniak" },
            { B: "Steve Ballmer" },
            { C: "Steve Jobs" },
            { D: "Steve Kazniwookie" }
        ],
        answer: "Steve Wozniak",
        summary: "In 1975 Steve Wozniak designed and hand-built a computer that would become the Apple I. He and Steve Jobs assembled and sold them from a garage during the next year."
    },
    {
        question: "The first use of the word 'bug' to describe a computer failure came from a ",
        answerOptions: [{ A: "1970s hacker who went by the moniker 'electro_fly'" },
            { B: "fried transistor that resembled an insect" },
            { C: "failed 1960s NASA spy satellite code named 'WASP'" },
            { D: "dead moth found in an electro-mechanical relay" }
        ],
        answer: "dead moth found in an electro-mechanical relay",
        summary: "On September 9th, 1947 programmer Grace Hopper wrote in the Harvard Mark II computer's log book 'First actual case of bug being found'. This was after a problem with the machine was traced to a moth stuck between relay contacts."
    },
    {
        question: "To pass a _______ a machine must exhibit intelligent behavior indistinguishable from that of a human.",
        answerOptions: [{ A: "Speed Gate" },
            { B: "Turing Test" },
            { C: "Babbage Test" },
            { D: "Logic Gate" }
        ],
        answer: "Turing Test",
        summary: 'Englishman Alan Turing is widely considered to be the father of theoretical computer science and artificial intelligence. The Turing Test was proposed in his 1950 paper "Computing Machinery and Intelligence".'
    },
];


// {
//     question: "",
//     answerOptions: [{ A: "" },
//         { B: "" },
//         { C: "" },
//         { D: "" }
//     ],
//     answer: "",
//     summary: ""
// },