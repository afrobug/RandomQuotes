const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.querySelector("span.loader");

function loading() {
    loader.classList.remove("hide");
    quoteContainer.classList.add("hide");
}

function complete() {
    loader.classList.add("hide");
    quoteContainer.classList.remove("hide");
}

let apiQuotes = [];

function newQuote() {
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author || "Anonymous";
    if(quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    }else {
        quoteText.classList.remove("long-quote");
    }
} 

async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        complete();
    } catch (error){

    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

getQuotes();