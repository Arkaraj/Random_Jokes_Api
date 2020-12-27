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
let load4 = document.querySelector('#load4');
let searchQuery = document.querySelector('#search');
let gifSearch = document.querySelector('#gifsearch');
let giffer = document.querySelector('#giffer');

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
            "x-rapidapi-key": keys.jokes,
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
        }
    }).catch((err) => {
        console.log(err);
        jokeNormal.innerHTML = "Sorry Api didn't work";
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
            "x-rapidapi-key": keys.jokes,
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    });

    const quote = await getquote.json();
    quotePara.innerHTML = `"${quote.content}"`;
    Author.innerHTML = `--${quote.originator.name}`;
}

async function generateGif() {

    const val = (searchQuery.value).split(/\s/).join('+');
    const getGif = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${keys.gifs}&tag=${val}&limit=1`);

    const gif = await getGif.json();
    load4.src = gif.data.images.original.url;
    load4.style.display = 'block';
    load4.style.margin = '0';
    //giffer.innerHTML = gif.data[0].images.original.url;
    console.log(gif.data[0].images.downsized.url)
}

jokegen.addEventListener('click', generateChuckJoke);
jokeNormalButton.addEventListener('click', generateJoke);
quoteButton.addEventListener('click', generateQuote);
gifSearch.addEventListener('click', generateGif);