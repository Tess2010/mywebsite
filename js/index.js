let quoteArray = [

    'I am who I say I am, not who you want me to be',
    'I am imperfectly perfect',
    'Beauty is always in the eye of the beholder',
    'Treat others how you wouldmwant tobe treated',
    'The quickest way to get somewhere is one step at a time',
    'It always seems impossible until it is done',
    "Every failure is a win, because if you've learned from your failure, it has now become a lesson"
]
function changeText(){
    let quote = document.getElementById("quote");
    let ran = Math.floor(Math.random()*6)
    quote.innerText= quoteArray[ran];
}