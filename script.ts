const twitterBtn = document.querySelector(".twitter-btn");
const newQuoteBtn = document.getElementById("new-quote");
const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

const url = "https://type.fit/api/quotes";

function loading(): void {
  const loader = document.getElementById("loader");
  if (loader) loader.hidden = false;
  if (quoteContainer) quoteContainer.classList.add("none");
}
function complete(): void {
  const loader = document.getElementById("loader");
  if (loader) loader.hidden = true;
  if (quoteContainer) quoteContainer.classList.remove("none");
}

interface Quote {
  text: string;
  author: string | undefined | null;
}

let quotes: Quote[] = [];

const fetchQutoes = function (): void {
  loading();
  fetch(url)
    .then((res) => res.json())
    .then((data: Quote[]): void => {
      quotes = data;
      complete();
      newQuote();
    });
};

const newQuote = function (): void {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  if (quoteText) quoteText.textContent = quote.text;
  if (quoteAuthor) quoteAuthor.textContent = quote.author || "Unknown";
};

const tweetQuote = function (): void {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText?.textContent} - ${quoteAuthor?.textContent}`;
  window.open(tweetUrl, "_blank");
};

newQuoteBtn?.addEventListener("click", newQuote);
twitterBtn?.addEventListener("click", tweetQuote);

fetchQutoes();
