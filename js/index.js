var quotes = ["Be yourself; everyone else is already taken.", "So many books, so little time."]
var authors = ["― Oscar Wilde", "― Frank Zappa"]
var last = -1;

function generateQuote() {
    var random;
    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (random === last);
    var generatedQuote = quotes[random];
    var author = authors[random]
    document.getElementById("quote").innerHTML = generatedQuote;
    document.getElementById("author").innerHTML = author;
    last = random;
}