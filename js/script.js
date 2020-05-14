/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// an array of object collects quotes information
let quotes=[
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein"
    },    
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        source: "Mark Twain",
        citation: "https://www.goodreads.com/author/quotes/1244.Mark_Twain",
        tags: ['life', 'friends']
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        source: "Thomas A. Edison",
        citation: "https://www.goodreads.com/author/quotes/3091287.Thomas_A_Edison"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        source: "Thomas A. Edison",
        citation: "https://www.goodreads.com/author/quotes/3091287.Thomas_A_Edison"
    },    
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        source: "Mahatma Gandhi",
        citation: "https://www.goodreads.com/author/quotes/5810891.Mahatma_Gandhi"
    },
    {
        quote: "An eye for an eye will only make the whole world blind.",
        source: "Mahatma Gandhi",
        citation: "https://www.goodreads.com/author/quotes/5810891.Mahatma_Gandhi"
    },  
    {
        quote: "Be the change that you wish to see in the world.",
        source: "Mahatma Gandhi",
        citation: "https://www.goodreads.com/author/quotes/5810891.Mahatma_Gandhi",
        year:1913,
        tags:['wish', 'change']
    }       

];



// get random quote from quotes
function getRandomQuote(){
    let randomIdx=Math.floor(Math.random()*quotes.length);
    return quotes[randomIdx];
}

/**get random color  */
function getRandomColor(){
    let colors=[0,0,0];
    for(let i=0; i<colors.length; i++){
        colors[i]=Math.floor(Math.random()*256);
    }
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`;    
}





//create quote information string and write to HTML
function printQuote(){
    const quote=getRandomQuote();
    let html='';
    html+=`<p class="quote">${quote.quote}</p>`;
    html+=`<p class="source">${quote.source}`;
    if (quote.citation){
        html+=`<span class="citation">${quote.citation}</span>`;
    }
    if (quote.year){
        html+=`<span class="year">${quote.year}</span>`;        
    }
    if (quote.tags){
        html+=`<span class="tags">${quote.tags}</span>`;
    }
    html+='</p>';
    document.getElementById('quote-box').innerHTML = html;
    
    //change background color randomly 
    document.body.style.backgroundColor=getRandomColor();
}


//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//refresh quotes every 12 second
setInterval(printQuote, 12000);