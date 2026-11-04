const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', displayAnswer);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

let currentAnswer = '';

async function getQuote() {
    console.log('Button clicked');

    try {
        const response = await fetch(endpoint);
    
        if (!response.ok) {
            throw Error(response.statusText);
        }
    
        const json = await response.json();
        console.log(json.question);
        displayQuote(json.question);

        currentAnswer = json.answer;
        document.querySelector('#js-answer-text').textContent = '';
    }   catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer() {
    console.log('blexas is real');
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = currentAnswer;
}

getQuote();