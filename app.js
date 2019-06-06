
const questionAnswers = [{
        question: 'In 1990 this computer scientist assembled the fundamental technologies of the World Wide Web.',
        answerOptions: [
            { A: 'Linus Torvalds' },
            { B: 'Bill Gates' },
            { C: 'Tim Berners-Lee' },
            { D: 'Steve Jobs' }
        ],
        answer: 'C',
        summary: "While working at CERN, a particle physics lab in Switzerland, Berners-Lee noticed that visiting scientists lacked a common protocol to share information over the internet. So he built one.",
    },
    {
        question: 'This "law" states that computer performance speeds will double every two years.',
        answerOptions: [
            { A: "Ohm's Law" },
            { B: "Linus's Law" },
            { C: "Heisenberg's Law" },
            { D: "Moore's Law" }
        ],
        answer: "D",
        summary: 'In 1965 Gordon Moore was director of R&D at Fairchild Semiconductor. He observed and accurately predicted that the number of components on a semiconductor chip would double every two years.'
    },
    {
        question: "Until it was officially changed in 2015 this was Google's corporate motto.",
        answerOptions: [
            { A: "Where do you want to go today?" },
            { B: "Don't be evil" },
            { C: "Internet, easy" },
            { D: "Think Different" }
        ],
        answer: "B",
        summary: "The motto was adopted by the company's young founders early in its incorporation. In 2015 it was officially changed to 'Do the right thing'. "
    },
    {
        question: "The ______ was the first commercially produced electronic computer in the world. It accurately predicted the results of the 1952 U.S. presidential race.",
        answerOptions: [
            { A: "IBM 1401" },
            { B: "ENIAC" },
            { C: "UNIVAC" },
            { D: "Altair 8800" }
        ],
        answer: "C",
        summary: "On election night 1952 the UNIVAC correctly forecast a landslide victory for Dwight Eisenhower, the candidate that was NOT favored by the media and pollsters. The legacy company that developed this machine evolved into today's Unisys Corporation."
    },
    {
        question: 'This company developed the first computer to feature a graphical user interface (GUI).',
        answerOptions: [
            { A: "Atari" },
            { B: "Xerox" },
            { C: "Apple" },
            { D: "Microsoft" }
        ],
        answer: "B",
        summary: "The Xerox Alto was designed and built at the company's Palo Alto Research Center in the 1970s. After visiting the facility in 1979 Steve Jobs began plans to develop Apple's first GUI-based operating system."
    },
    {
        question: "Northern California's Santa Clara Valley earned the moniker 'Silicon Valley' in the 1960s after several startups there began developing",
        answerOptions: [
            { A: "transformers" },
            { B: "personal computers" },
            { C: "transistor radios" },
            { D: "semiconductors" }
        ],
        answer: "D",
        summary: "In 1956 Bill Shockley, one of the inventors of the transistor, founded Shockley Semiconductor Labs in Mountain View. His employees would go on to start Fairchild Semiconductor and eventually Intel. Semiconductor technology allowed electronic circuits to be miniaturized by printing them on silicon wafers or 'chips'."
    },
    {
        question: "After its launch in 1998 Google's search engine gained industry dominance by utilizing a better method for",
        answerOptions: [
            { A: "collecting user data" },
            { B: "hiring developers" },
            { C: "ranking web pages" },
            { D: "targeting advertisements" }
        ],
        answer: "C",
        summary: "At the time competing search engines ranked results by how often a searched term appeared as text on a web page. Google ranked results according to the number of relevant pages that linked to the page being evaluated."
    },
    {
        question: "In the nineteenth century this man designed the 'Analytical Engine': a contraption of program-controlled mechanical gears theoretically capable of performing any calculation. ",
        answerOptions: [
            { A: "Nikola Tesla" },
            { B: "Herman Hollerith" },
            { C: "Thomas Edison" },
            { D: "Charles Babbage" }
        ],
        answer: "D",
        summary: "Although the machine was never successfully built the Analytical Engine is considered to be the first historical conception of a modern computer."
    },
    {
        question: "In 1980 IBM agreed to ship its first line of personal computers with this Microsoft software installed. This deal eventually led to Microsoft's dominance in the PC industry.",
        answerOptions: [
            { A: "Windows" },
            { B: "DOS" },
            { C: "Word" },
            { D: "easyOS" }
        ],
        answer: "B",
        summary: "Microsoft included a non-exclusive clause in the deal to provide IBM with this pre-GUI, command-line operating system. Because IBM designed their PC using third-party components competitors were able to legally issue clones. DOS became the defacto OS for all of these machines."
    },
    {
        question: 'This nineteenth century Englishwoman is often credited as the author of the first algorithm',
        answerOptions: [
            { A: "Ada Lovelace" },
            { B: "Queen Victoria" },
            { C: "Mary Shelley" },
            { D: "Clara Barton" }
        ],
        answer: "A",
        summary: "To demonstrate a possible application of Charles Babbage's 'Analytical Engine' Lovelace diagrammed a set of steps the machine would follow to solve a mathematical sequence. "
    },
    {
        question: 'The prototype of this technology was initially developed at a failing podcast startup.',
        answerOptions: [
            { A: "Twitter" },
            { B: "Spotify" },
            { C: "YouTube" },
            { D: "Facebook" }
        ],
        answer: "A",
        summary: "Twitter founder Jack Dorsey had the idea for an SMS-based communication system while working at Odeo in 2006. Odeo was a website that allowed users to create and share podcasts."
    },
    {
        question: 'This is a slang term for an undocumented, often humorous feature hidden in piece of software.',
        answerOptions: [
            { A: "surprise party" },
            { B: "easter egg" },
            { C: "roman candle" },
            { D: "xmas in july" }
        ],
        answer: "B",
        summary: "Apparently the term was first used in 1979 when an underpaid Atari programmer secretly inserted his name into a room in a game. Go to Google and search 'do a barrel roll'."
    },
    {
        question: '______ designed the first Apple computer',
        answerOptions: [
            { A: "Steve Jobs" },
            { B: "Paul Allen" },
            { C: "Steve Wozniak" },
            { D: "Bill Gates" }
        ],
        answer: "C",
        summary: "In 1975 Steve Wozniak designed and hand-built a computer that would become the Apple I. He and Steve Jobs assembled and sold the circuit boards from a garage during the next year."
    },
    {
        question: 'hotornot.com was a early 2000s website where users submitted pictures of themselves to be rated for attractiveness by others. A founder of which company built a similar site in 2003?',
        answerOptions: [
            { A: "Uber" },
            { B: "Airbnb" },
            { C: "Facebook" },
            { D: "Instagram" }
        ],
        answer: "C",
        summary: "Mark Zuckerberg's early site was called facemash.com. It presented female ID photos hacked from Harvard University dormitory websites and asked users to compare and rank them."
    },
    {
        question: "The first use of the word 'bug' to describe a computer malfunction came from a ",
        answerOptions: [
            { A: "1980s hacker who went by the moniker 'electro_fly'" },
            { B: "fried transistor that resembled an insect" },
            { C: "failed 1960s NASA spy satellite code named 'praying-mantis'" },
            { D: "dead moth found in an electro-mechanical relay" }
        ],
        answer: "D",
        summary: "On September 9th, 1947 programmer Grace Hopper wrote in the Harvard Mark II computer's log book 'First actual case of bug being found'. This was after a problem with the machine was traced to a moth stuck between relay contacts."
    },
    {
        question: "To pass a _______ a machine must exhibit intelligent behavior indistinguishable from that of a human.",
        answerOptions: [
            { A: "Logic Gate" },
            { B: "Turing Test" },
            { C: "Bill Gate" },
            { D: "Edison Test" }
        ],
        answer: "B",
        summary: 'Englishman Alan Turing is widely considered to be the father of theoretical computer science and artificial intelligence. The Turing Test was proposed in his 1950 paper "Computing Machinery and Intelligence".'
    },
    {
        question: "In 1998 the U.S. Department of Justice and the Attorneys General of twenty U.S. states sued this company for 'illegally thwarting competition in order to protect and extend its monopoly'.",
        answerOptions: [
            { A: "Apple" },
            { B: "IBM" },
            { C: "Amazon" },
            { D: "Microsoft" }
        ],
        answer: "D",
        summary: "Microsoft had bundled its Internet Explorer web browser with all Windows operating systems. They then claimed that the two previously separate pieces of software were the same product. The government's assertion was that this was done intentionally to kill competition from competing web browsers.",
    },
    {
        question: 'In the early 2000s this was the dominant technology to provide animation, interactivity and video playback to a website. As HTML5 compliant browsers proliferated it has largely fallen out of use.',
        answerOptions: [
            { A: "Flash" },
            { B: "BASIC" },
            { C: "Spark" },
            { D: "HTML" }
        ],
        answer: "A",
        summary: "The Flash Player is a browser plug-in. Much of the functionality provided by Flash was included in the HTML5 specification and is now hard-coded into your browser."
    },
];

// get html elements
const question = document.querySelector('#question');

const answerOptionContainer = document.querySelector('#answer-option-container');

const answer = document.querySelector('#answer');

const summary = document.querySelector('#summary');

const nextQuestionBtn = document.querySelector('#next-question-btn');

// cycle thru questionsAnswers
let qaIndex = 0;

let answerOptions;

function loadQandAs(questionAnswers, qaIndex) {
    question.innerText = `QUESTION: ${questionAnswers[qaIndex].question}`;

    answerOptions = questionAnswers[qaIndex].answerOptions;

    // clear for each new question answerOptions
    answerOptionContainer.innerHTML = '';

    const li = document.createElement('li');
    li.classList = 'answer-option pointer';

    for (let i of answerOptions) {
        li.innerText = `${Object.keys(i)}: ${Object.values(i)}`
        answerOptionContainer.appendChild(li.cloneNode(true));
    }
    // clear UI items (displayed only on correct answer)
    answer.innerText = 'ANSWER:';
    summary.innerText = '';
    nextQuestionBtn.style.display = 'none'

    // for possible formatting options later delete if not used
    // return answerOptions;
};


let clickCount = 0;
let correctAnswers = 0;

// get clicked answer-option
answerOptionContainer.addEventListener('click', (e) => {
    // target user click
    if (e.target.classList.contains('answer-option')); {
        userAnswer = e.target;
    };

    if (userAnswer.innerText.slice(0, 1) == `${questionAnswers[qaIndex].answer}`) {
        clickCount++;

        setTimeout(() => {
            answer.innerText = `ANSWER: ${userAnswer.innerText.slice(2)} is CORRECT!!!`;
            summary.innerText = `${questionAnswers[qaIndex].summary}`;
            nextQuestionBtn.style.display = 'block';
        }, 150)
    } else {
        clickCount++;

        answer.innerText = 'ANSWER:';
        setTimeout(() => {
            // userAnswer.style.color = 'darkgreen';
            answer.innerText = 'ANSWER: NOPE TRY AGAIN!!!';
            summary.innerText = '';
            nextQuestionBtn.style.display = 'none';
        }, 150)
    };
});


// first question on page load
document.addEventListener('DOMContentLoaded', () => {
    randIndex(qaIndex)
    loadQandAs(questionAnswers, qaIndex);
    return qaIndex;
});


// load next question, track correctAnswers
nextQuestionBtn.addEventListener('click', () => {
    randIndex(qaIndex)
    loadQandAs(questionAnswers, qaIndex);
    if (clickCount == 1) {
        correctAnswers++;
    }

    console.log(randIndexArr, clickCount, correctAnswers)

    return clickCount = 0, qaIndex;
});


// INCLUDE AT END/BONUS??/
// '<a href='https://www.youtube.com/channel/UCHDr4RtxwA1KqKGwxgdK4Vg'>Computer History Museum</a>'


let randIndexArr = [];

function randIndex(index) {
    if (randIndexArr.length == questionAnswers.length) {
        alert(`you got ${correctAnswers} out of ${questionAnswers.length} correct!!!`)
        return randIndexArr = [];
    }
    for (let i = 0; i < questionAnswers.length; i++) {
        let randNum = Math.floor(Math.random() * questionAnswers.length);
        if (randIndexArr.indexOf(randNum) != -1) {
            continue;
        } else {
            randIndexArr.push(randNum);
            return qaIndex = randNum;
        }
    }
};


// console.log(qaIndex, randIndexArr)