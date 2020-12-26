let jokeDoc = document.querySelector('#jokes');
let jokegen = document.querySelector('#hit');
let jokeNormal = document.querySelector('#jokes2');
let jokeNormalButton = document.querySelector('#hit2');
let quotePara = document.querySelector('#quotes');
let quoteButton = document.querySelector('#hit3');
let Author = document.querySelector('#name');
let load1 = document.querySelector('#load1');
let load2 = document.querySelector('#load2');
let load3 = document.querySelector('#load3');
let source = 'ajax-loader.gif';

// https://api.chucknorris.io/jokes/random

// Using fetch
async function generateChuckJoke() {
    load1.src = source;
    load1.style.display = 'block';
    const jokelist = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await jokelist.json();
    jokeDoc.innerHTML = joke.value;

}

async function generateJoke() {
    load2.src = source;
    load2.style.display = 'block';
    const normalJoke = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ce58f459a0mshf0196057e588143p1221f4jsn5b83bf4c82fc",
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
        }
    });
    const njoke = await normalJoke.json();
    jokeNormal.innerHTML = njoke.body[0].setup + '<br>' + njoke.body[0].punchline;
}

async function generateQuote() {
    load3.src = source;
    load3.style.display = 'block';
    const getquote = await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ce58f459a0mshf0196057e588143p1221f4jsn5b83bf4c82fc",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    });

    const quote = await getquote.json();
    quotePara.innerHTML = `"${quote.content}"`;
    Author.innerHTML = `--${quote.originator.name}`;
}
jokegen.addEventListener('click', generateChuckJoke);
jokeNormalButton.addEventListener('click', generateJoke);
quoteButton.addEventListener('click', generateQuote);