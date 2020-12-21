const quotes = [
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
        color: "brown white"
    },
    {
        text: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
        author: "Maimonides",
        color: "red white"
    },
    {
        text: "I didn’t fail the test. I just found 100 ways to do it wrong.",
        author: "Benjamin Franklin",
        color: "blue black"
    },
    {
        text: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs",
        color: "black white"
    },
    {
        text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        author: "Johann Wolfgang von Goethe",
        color: "pink black"
    },
    {
        text: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone",
        color: "yellow black"
    },
    {
        text: "Life is what we make it, always has been, always will be.",
        author: "Grandma Moses",
        color: "darkslategray white"
    },
    {
        text: "A truly rich man is one whose children run into his arms when his hands are empty.",
        author: "Unknown",
        color: "orange black"
    },
    {
        text: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll",
        color: "white black"
    },
    {
        text: "Remember no one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        color: "blue black"
    },
    {
        text: "Either you run the day, or the day runs you",
        author: "Jim Rohn",
        color: "red black"
    },
    {
        text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        author: "Maya Angelou",
        color: "brown white"
    },
]

const textEl = document.querySelector("#text");
const authorEl = document.querySelector("#author");
const tweetQuote = document.querySelector('a#tweet-quote');
const projectCreator = document.querySelector('.project-creator');

const mainEl = document.querySelector("main")

const newQuoteBtn = document.querySelector("#new-quote");

function generateRandomQuote() {
    const randomQuoteIndex = Math.round(Math.random().toFixed(1) * quotes.length) - 1;
    const { text, author, color } = quotes[randomQuoteIndex]
    const [ background, foreground ] = color.split(' ')

    textEl.innerHTML = text;
    textEl.style.color = foreground;

    authorEl.innerHTML = `- ${author}`;
    authorEl.style.color = foreground;

    mainEl.style.backgroundColor = background;

    newQuoteBtn.style.backgroundColor = background;
    newQuoteBtn.style.color = foreground;
    
    tweetQuote.style.backgroundColor = background;
    tweetQuote.style.color = foreground;

    projectCreator.style.color = foreground;
}

console.log(text)
console.log(author)
generateRandomQuote()

newQuoteBtn.addEventListener('click', generateRandomQuote)