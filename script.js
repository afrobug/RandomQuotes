let apiQuotes = [];

function newQuote() {
   const randomIndex = Math.floor(Math.random() * apiQuotes.length);
}

async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        const apiQuotes = await response.json();
        newQuote();
    } catch (error){

    }
}

getQuotes();