let quoteArray = [

    'I am who I say I am, not who you want me to be',
    'I am perfectly imperfect',
    'Beauty is always in the eye of the beholder',
    'Treat others how you would want to be treated',
    'The quickest way to get somewhere is one step at a time',
    'It always seems impossible until it is done',
    "Every failure is a win, because if you've learned from your failure, it has now become a lesson"
]
function changeText() {
    let quote = document.getElementById("quote");
    let ran = Math.floor(Math.random() * 6)
    quote.innerText = quoteArray[ran];
}

let currentIndex = 0;
function moveImage(direction) {
    const arrPic = ["../images/Destinations/Italy-Bologna.jpg", 
        "../images/Destinations/Mina_Port.jpg", "../images/Destinations/ArticFox.jpg" ];
        
    let image = document.getElementById("mainPic");
    if (currentIndex + direction >= 0 && currentIndex + direction <= (arrPic.length - 1)) {
            currentIndex += direction
            image.src = arrPic[currentIndex];
        }
    else {
        if (currentIndex == arrPic.length - 1) {
            currentIndex = 0
            image.src = arrPic[currentIndex]
        } else {
        currentIndex = arrPic.length - 1
        image.src = arrPic[currentIndex]
    }
    }
}