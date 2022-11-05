var twitterBtn = document.querySelector(".twitter-btn");
var newQuoteBtn = document.querySelector(".new-quote");
var quoteContainer = document.querySelector(".quote-container");
var quoteText = document.querySelector(".text");
var quoteAuthor = document.querySelector(".author");
var url = "https://type.fit/api/quotes";
var quotes = [];
var fetchQutoes = function () {
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        quotes = data;
        newQuote();
    });
};
var newQuote = function () {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    if (quoteText)
        quoteText.textContent = quote.text;
    if (quoteAuthor)
        quoteAuthor.textContent = quote.author || "Unknown";
};
var tweetQuote = function (text, author) {
    var tweetUrl = "https://twitter/intent/tweet?text=".concat(text, " - ").concat(author);
    window.open(tweetUrl, "_blank");
};
console.log(newQuoteBtn);
fetchQutoes();
