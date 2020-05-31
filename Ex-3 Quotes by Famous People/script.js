
const quotes =[
  {
    name: 'Stephan King',
    quote: 'Get busy living or get bussy dying.'
  },
  {
    name: 'John F. Kennedy',
    quote: 'Those who dare to fail miserably can achieve greatly.'
  },
  {
    name: 'Abraham Lincoln',
    quote: 'I\'m a success today because I had a friend who believed in me and I didn\'t have heart to let him down.'
  },
  {
    name: 'Leonardo Da Vonci',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
  },
  {
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy, be.'
  }

]

const quoteBtn = document.querySelector("#quoteBtn"); // we target the elements by id
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
  let random = Math.floor(Math.random()*quotes.length);
  quote.innerHTML = quotes[random].quote;
  quoteAuthor.innerHTML = quotes[random].name;
}
