

var QuoteBox = document.getElementById("quote")
var Copy = document.getElementById("copy")
var Tag = document.getElementById("tag")
var Author = document.getElementById("author")

// Like Icon
var likebutton = document.getElementById("Like")




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





// New Quote Load ON Refresh Button Clicked
function LoadNewQuote(){ 
        QuoteBox.innerHTML= '<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player class="animation"  src="https://lottie.host/db6644a7-5008-4fbe-810a-c288a92de32c/3FmhygfCwo.json" background="#f3f3f3" speed="2" style="width: 300px; height: 300px" direction="1" playMode="normal" loop autoplay></dotlottie-player>'
    GetingRandomQuote()
}



// Like Animation
function like(){
    likebutton.innerHTML = '<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player src="https://lottie.host/a580908e-0c8d-40ae-b45a-fe2789b551cb/e5io6lQhPj.json" background="transparent" speed="1" style="width: 90px; height: 90px" direction="1" playMode="normal" autoplay></dotlottie-player>'
}




const copyContent = async () => {
    let text =  QuoteBox.innerHTML;
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }



// Ignore this 
// https://official-joke-api.appspot.com/random_joke

// https://api.quotable.io/random

// https://lottiefiles.com/animations/loading-animation-dDllMXjht9



