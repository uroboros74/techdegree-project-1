/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  The array 'quotes' contains five objects that carry the information of quotes.
  The contents of objects are labeled with keys: `quote`,`source`, `citation`, `year`.
***/

var quotes=[{quote: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.", source: "Einstein", citation: "speech", year: "1846"}, {quote: "The very nature of science is discoveries, and the best of those discoveries are the ones you don't expect.", source: "Neil Tyson", citation: "", year: "1968"}, {quote: "Bad times have a scientific value. These are occasions a good learner would not miss.", source: "poem", citation: "Ralph Emerson", year: "1857"}, {quote: "Science is the captain, and practice the soldiers.", source: "Leonardo da Vinci", citation: "", year: "1754"}, {quote: "The function of sociology, as of every science, is to reveal that which is hidden.", source: "Pierre Bourdieu", citation: "", year: "1937"}];


/***
`getRandomQuote` function returns a random object from the array 'quotes'
***/
function getRandomQuote(){
var random=Math.random();
var num=Math.floor((quotes.length)* (random));
return quotes[num];
}

/***
`printQuote` function:
   - Calls the `getRandomQuote` function and assign it to a variable.
   - Uses an if statement to check for the `source`, `citation`, `year` properties 
   - Creates a string variable with the contents of the random quote variable and combines it to the HTML string.
   - closes with a final `p` tag.
   - Sets the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
var result=getRandomQuote();

var empty='';
empty=empty+
  "<p class=\"quote\">" +result["quote"] +"</p> \n<p class=\"source\">" +result["source"];
var it=empty.concat(result);

if ('ciation' in result){
empty=empty+"<span class=\"citation\">" +result["citation"]+ "</span>"
}

if ('year' in result){
  empty=empty+"<span class=\"year\"> "+result["year"]+" </span>"
}

empty=empty+"</p>"
document.getElementById("quote-box").innerHTML = empty;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  is triggered, and it invokes the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
