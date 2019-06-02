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

    document.querySelector('#answer-option-A').innerText = `${Object.keys(answerOptions[0])}: ${Object.values(answerOptions[0])}`
    document.querySelector('#answer-option-B').innerText = `${Object.keys(answerOptions[1])}: ${Object.values(answerOptions[1])}`
    document.querySelector('#answer-option-C').innerText = `${Object.keys(answerOptions[2])}: ${Object.values(answerOptions[2])}`
    document.querySelector('#answer-option-D').innerText = `${Object.keys(answerOptions[3])}: ${Object.values(answerOptions[3])}`

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
        console.log(userAnswer.slice(0, 1));
    };

    if (userAnswer.slice(0, 1) == `${questionAnswers[qaIndex].answer}`) {
        setTimeout(() => {
            answer.innerText = `ANSWER: ${userAnswer.slice(2)} is CORRECT!!!`;
            summary.innerText = `${questionAnswers[qaIndex].summary}`;
            nextQuestionBtn.style = '';
        }, 150)
    } else {
        answer.innerText = 'ANSWER:';
        setTimeout(() => {
            answer.innerText = 'ANSWER: NOPE TRY AGAIN!!!';
            summary.innerText = '';
            nextQuestionBtn.style.display = 'none';
        }, 150)
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
        question: 'In 1990 this computer scientist developed the fundamental technologies of the World Wide Web.',
        answerOptions: [
            { A: 'Linus Torvalds' },
            { B: 'Bill Gates' },
            { C: 'Tim Berners-Lee' },
            { D: 'Alan Turing' }
        ],
        answer: 'C',
        summary: "Berners-Lee was working at CERN, a particle physics lab in Switzerland. He noticed that visiting scientists coming from all over the world lacked a common protocol to share information over the internet.",
        furtherReading: `FURTHER READING: <a href='https://webfoundation.org/about/sir-tim-berners-lee/' target="_blank">webfoundation.org: Sir Tim Berners-Lee</a>`,
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
            { A: "Think Different" },
            { B: "Don't be evil" },
            { C: "Internet, easy" },
            { D: "Where do you want to go today?" }
        ],
        answer: "B",
        summary: "In 2015 Google changed it's motto to 'Do the right thing'. "
    },
    {
        question: 'In ____ the UNIVAC computer was used to predict the results of a U.S. presidential election. On election night it correctly forecast a landslide victory for the candidate that was NOT favored by the media and pollsters.',
        answerOptions: [
            { A: "1948" },
            { B: "1952" },
            { C: "1956" },
            { D: "1960" }
        ],
        answer: "B",
        summary: "The UNIVAC..."
    },
    {
        question: 'This company is credited with development of the first computer to feature a graphical user interface (GUI).',
        answerOptions: [
            { A: "Atari" },
            { B: "Xerox" },
            { C: "Apple" },
            { D: "Microsoft" }
        ],
        answer: "B",
        summary: "In 1973 (nearly a decade before the first commercially available GUI computer was released) the Xerox Alto was designed and built at the company's Palo Alto Research Center. Apparently Xerox's east coast management didn't understand the revolutionary nature of the GUI technology and never tried to market it."
    },
    {
        question: "After it's launch in 1998 Google's search engine gained industry dominance by utilizing a better method for",
        answerOptions: [
            { A: "collecting user data" },
            { B: "hiring developers" },
            { C: "ranking web pages" },
            { D: "targeting advertisements" }
        ],
        answer: "C",
        summary: "At the time search engines ranked results by how often a searched term appeared on a web page. Google ranked results according to the number of relevant pages that linked to the page being evaluated."
    },
    {
        question: "In 1980 IBM agreed to ship it's new line of personal computers with this Microsoft software installed. This deal eventually led to the Microsoft's dominance in the PC industry.",
        answerOptions: [
            { A: "Word" },
            { B: "MS-DOS" },
            { C: "Internet Explorer" },
            { D: "Windows" }
        ],
        answer: "B",
        summary: "Microsoft included a non-exclusive clause in the deal that allowed them to license MS-DOS (a pre-Windows, command-line operating system) to other computer manufactures. Because IBM designed their PC using existing third party components competing companies we're able to easily and legally issue clones. MS-DOS became the default OS for many of these machines."
    },
    {
        question: 'Which option below is not a programming language?',
        answerOptions: [
            { A: "HTML" },
            { B: "C++" },
            { C: "JavaScript" },
            { D: "Python" }
        ],
        answer: "A",
        summary: ""
    },

    {
        question: "The prototype of this app was developed as an internal communication tool at a failing podcast startup.",
        answerOptions: [
            { A: "Twitter" },
            { B: "Spotify" },
            { C: "YouTube" },
            { D: "Facebook" }
        ],
        answer: "A",
        summary: "Twitter co-founder Jack Dorsey conceived of the idea of an individual using a SMS service to communicate with a small group while working at Odeo. Odeo was a website that enabled users to create and share podcasts. It's assets were sold in 2007. "
    },
    {
        question: "At it's root level a computer's processor is reading the state of discreet transistors: an electronic signal is read as 1 and a lack of signal is read as 0. This level of code is referred to as",
        answerOptions: [
            { A: "C++" },
            { B: "machine code" },
            { C: "BASIC" },
            { D: "assembly code" }
        ],
        answer: "B",
        summary: ""
    },

    {
        question: '______ designed the first Apple computer',
        answerOptions: [
            { A: "Steve Wozniak" },
            { B: "Steve Ballmer" },
            { C: "Steve Jobs" },
            { D: "Steve Kazniwookie" }
        ],
        answer: "A",
        summary: "In 1975 Steve Wozniak designed and hand-built a computer that would become the Apple I. He and Steve Jobs assembled and sold them from a garage during the next year."
    },
    {
        question: 'hotornot.com was an early 2000s website where users submitted pictures of themselves to be rated for attractiveness by others. A founder of which company below built a similar site in 2003?',
        answerOptions: [
            { A: "Facebook" },
            { B: "Airbnb" },
            { C: "Uber" },
            { D: "Instagram" }
        ],
        answer: "A",
        summary: "Mark Zuckerberg's ealy site was called facemash.com. The site presented female ID photos hacked from Harvard University dormitory sites and asked users to compare and rank them."
    },

    {
        question: "The first use of the word 'bug' to describe a computer malfunction came from a ",
        answerOptions: [
            { A: "1970s hacker who went by the moniker 'electro_fly'" },
            { B: "fried transistor that resembled an insect" },
            { C: "failed 1960s NASA spy satellite code named 'dragon-fly'" },
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
            { C: "Bill's Gate" },
            { D: "Edison Test" }
        ],
        answer: "B",
        summary: 'British scientist Alan Turing is widely considered to be the father of theoretical computer science and artificial intelligence. The Turing Test was proposed in his 1950 paper "Computing Machinery and Intelligence".'
    },
    {
        question: "In 1998 the U.S. Department of Justice and the Attorneys General of twenty U.S. states sued this company for 'illegally thwarting competition in order to protect and extend its monopoly'.",
        answerOptions: [
            { A: "Apple" },
            { B: "Facebook" },
            { C: "Amazon" },
            { D: "Microsoft" }
        ],
        answer: "D",
        summary: "Microsoft had bundled its Internet Explorer web browser with all Windows operating systems. They then claimed that the two pieces of software were the same product. The government's assertion was that this was done intentionally to kill competition from competing web browsers.",
    },
    {
        question: 'In the early 2000s this was the dominant technology to play animations, games, audio and video on the internet. As HTML5 compliant browsers proliferated it has largely fallen out of use.',
        answerOptions: [
            { A: "Flash" },
            { B: "Ruby" },
            { C: "PHP" },
            { D: "Java" }
        ],
        answer: "A",
        summary: "had to download and update the player blah blah blah"
    },

];


// for (let i of questionAnswers) {
//     for (let j of i.answerOptions) {
//         console.log(Object.keys(j))
//     }
// }