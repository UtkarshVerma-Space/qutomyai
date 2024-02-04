

var QuoteBox = document.getElementById("quote")
var Copy = document.getElementById("copy")
var Tag = document.getElementById("tag")
var Author = document.getElementById("author")

// Set time out so to show animation when new quote appear
function GetingRandomQuote(){

    setTimeout(()=>{
        // Async Funtion Fetching Quote from API
        async function GetRandomQuote(){
            try{
                let data = await fetch("https://api.quotable.io/random")
                let quote = await data.json()
                QuoteBox.innerText=quote.content
                Tag.innerText = quote.tags
                Author.innerText = "By "+ quote.authorSlug

            }catch{
                console.log("Error")
            }
        }
        GetRandomQuote()
    },1000)
    
}
GetingRandomQuote()


// When Button Clicked
function LoadNewQuote(){ 
        QuoteBox.innerHTML= '<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player class="animation"  src="https://lottie.host/db6644a7-5008-4fbe-810a-c288a92de32c/3FmhygfCwo.json" background="#f3f3f3" speed="2" style="width: 300px; height: 300px" direction="1" playMode="normal" loop autoplay></dotlottie-player>'
    GetingRandomQuote()
}
  



// Ignore this 
// https://official-joke-api.appspot.com/random_joke

// https://api.quotable.io/random

// https://lottiefiles.com/animations/loading-animation-dDllMXjht9