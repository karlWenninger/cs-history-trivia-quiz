const questionAnswers = [{
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
        question: "Until it was changed in 2015 this was Google's corporate motto:",
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
        question: 'In 1990 this computer scientist assembled the fundamental technologies of the World Wide Web:',
        answerOptions: [
            { A: 'Linus Torvalds' },
            { B: 'Bill Gates' },
            { C: 'Tim Berners-Lee' },
            { D: 'Steve Jobs' }
        ],
        answer: 'C',
        summary: "While working at CERN (a particle physics lab in Switzerland) Berners-Lee noticed that visiting scientists lacked a common protocol to share information over the internet. So he built one.",
    },
    {
        question: "In the early 1970s a journalist dubbed Northern California's Santa Clara Valley 'Silicon Valley'. This was due to the number of companies in the area developing this technology:",
        answerOptions: [
            { A: "transformers" },
            { B: "personal computers" },
            { C: "the internet" },
            { D: "semiconductors" }
        ],
        answer: "D",
        summary: "In 1956 Bill Shockley, one of the inventors of the transistor, founded Shockley Semiconductor Labs in Mountain View. His employees would go on to start Fairchild Semiconductor and eventually Intel. Semiconductor technology allows electronic circuits to be miniaturized by printing them on silicon 'chips'."
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
        question: 'In 1974 this microcomputer was sold as a hardware kit that had to be assembled by the user. It is considered to be the first commercially available personal computer.',
        answerOptions: [
            { A: "Commodore PET" },
            { B: "Altair 8800" },
            { C: "Apple I" },
            { D: "IBM PC" }
        ],
        answer: "B",
        summary: "After seeing an article about the Altair in Popular Electronics magazine a young Bill Gates wrote some software for it. This was to become Microsoft's founding product."
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
        question: 'In the early 2000s this was the dominant technology to provide animation, interactivity and video playback to a website. As HTML 5 compliant browsers proliferated it has largely fallen out of use.',
        answerOptions: [
            { A: "FireWire" },
            { B: "BASIC" },
            { C: "Flash" },
            { D: "HTML" }
        ],
        answer: "C",
        summary: "The Flash Player is a browser plug-in. Much of the multi-media functionality previously provided by Flash is now accomplished natively in your browser using HTML 5, CSS and JavaScript."
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
        summary: "The Xerox Alto was designed and built at the company's Palo Alto Research Center in the 1970s. Apparently Xerox's east coast management never understood the revolutionary nature of the technology. After visiting the facility in 1979 Steve Jobs began plans to develop Apple's first GUI-based operating system."
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
        question: 'This "law" states that computer performance speeds will double every two years.',
        answerOptions: [
            { A: "Ohm's Law" },
            { B: "Linus's Law" },
            { C: "Shockley's Law" },
            { D: "Moore's Law" }
        ],
        answer: "D",
        summary: 'In 1965 Gordon Moore was director of R&D at Fairchild Semiconductor. He observed and accurately predicted that the number of components on a semiconductor chip would double every two years.'
    },
    {
        question: "In 1980 IBM agreed to ship its first line of personal computers with this Microsoft software installed. The deal eventually led to Microsoft's dominance in the PC industry.",
        answerOptions: [
            { A: "Windows" },
            { B: "DOS" },
            { C: "Word" },
            { D: "Excel" }
        ],
        answer: "B",
        summary: "Microsoft included a non-exclusive clause in the deal to provide IBM with this pre-GUI, command-line operating system. Because IBM designed their PC using third-party components competitors were able to easily issue clones. DOS became the defacto OS for all of these machines."
    },
    {
        question: 'This nineteenth century Englishwoman is often credited as the author of the first algorithm:',
        answerOptions: [
            { A: "Ada Lovelace" },
            { B: "Queen Victoria" },
            { C: "Mary Shelley" },
            { D: "Clara Barton" }
        ],
        answer: "A",
        summary: "To demonstrate a possible application of Charles Babbage's 'Analytical Engine' Lovelace diagrammed a set of steps the machine would follow to solve a mathematical problem."
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
        summary: "As a Harvard University student Mark Zuckerberg built a site called facemash.com. It presented female ID photos hacked from university dormitory sites and asked users to compare and rank them."
    },
    {
        question: "This machine accurately predicted the results of the 1952 U.S. presidential race. It was also the world's first commercially available electronic computer.",
        answerOptions: [
            { A: "IBM 1401" },
            { B: "BRAINIAC I" },
            { C: "UNIVAC I" },
            { D: "Altair 8800" }
        ],
        answer: "C",
        summary: "On election night 1952 the UNIVAC correctly forecast a landslide victory for Dwight Eisenhower, the candidate that was NOT favored by the media and pollsters. The legacy company that developed this technology evolved into today's Unisys Corporation."
    },
    {
        question: "The first version of this website was built because its founders felt placing an ad on Craigslist was too impersonal.",
        answerOptions: [
            { A: "Tinder" },
            { B: "Indeed" },
            { C: "Airbnb" },
            { D: "eBay" }
        ],
        answer: "C",
        summary: "In 2007 the future founders of Airbnb were having trouble meeting rent. To raise money they built AirBedAndBreakfast.com, a site that offered an affordable alternative to a hotel: you could sleep on an airbed on the floor of their San Francisco apartment."
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
        question: 'This is a slang term for an undocumented, often humorous feature hidden in piece of software.',
        answerOptions: [
            { A: "surprise party" },
            { B: "easter egg" },
            { C: "roman candle" },
            { D: "xmas in july" }
        ],
        answer: "B",
        summary: "Apparently the term was first used in 1979 when an underpaid Atari programmer secretly inserted his name into a room in a game. Now go to Google and search 'do a barrel roll'."
    },
];

// get html elements
const question = document.querySelector('#question');

const answerOptionContainer = document.querySelector('#answer-option-container');

const answer = document.querySelector('#answer');

const summary = document.querySelector('#summary');

const nextQuestionBtn = document.querySelector('#next-question-btn');

const completeQuizScreen = document.querySelector('#complete-quiz-screen');
completeQuizScreen.style.display = 'none';

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


// randomize questionAnswer index order
let randIndexArr = [];

function makeRandIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randNum = Math.floor(Math.random() * questionAnswers.length);
        if (randIndexArr.indexOf(randNum) == -1) {
            randIndexArr.push(randNum);
            return qaIndex = randNum;
        } else { i--; }
    }
}

// load next question, track correctAnswers
nextQuestionBtn.addEventListener('click', () => {
    if (clickCount == 1) {
        correctAnswers++;
    }
    clickCount = 0;


    if (randIndexArr.length == questionAnswers.length) {
        randIndexArr = [];
        completeQuizScreen.style.display = 'inline';
        alert(`congrats you got ${correctAnswers} out of ${questionAnswers.length} correct!!!`)
    } else {
        makeRandIndex(questionAnswers);
        loadQandAs(questionAnswers, qaIndex);
        console.log(`randIndexArr ${randIndexArr.length} correctAnswers ${correctAnswers} ${questionAnswers.length}`)
    };
});

// add question on page load
document.addEventListener('DOMContentLoaded', () => {
    makeRandIndex(questionAnswers);
    loadQandAs(questionAnswers, qaIndex);
});