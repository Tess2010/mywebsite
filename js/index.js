let quoteArray = [

    'I am who I say I am, not who you want me to be',
    'I am perfectly imperfect - Marilyn Munroe',
    'Beauty is always in the eye of the beholder',
    'Treat others how you would want to be treated',
    'The quickest way to get somewhere is one step at a time',
    'It always seems impossible until it is done',
    "Every failure is a win, because if you've learned from your failure, it has now become a lesson",
    'There is nothing impossible for those who will try. - Alexander the Great',
    'Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman', 
    'Champions keep playing until they get it right. — Billie Jean King',
    'You are your best thing. — Toni Morrison',
    'Success is not final, failure is not fatal: it is the courage to continue that counts. —Winston Churchill',
    'It is better to fail in originality than to succeed in imitation. — Herman Melville',
    "Nothing is impossible. The word itself says, I'm possible! — Audrey Hepburn",
    'A person who never made a mistake never tried anything new. — Albert Einstein',
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    'Whatever/Whoever you are, be a good one - Abraham Lincoln',
    'Live as if you were to die tomorrow. - Mahatma Gandhi',
    "It always seems impossible until it's done. - Nelson Mandela",
    'You are never too old to set another goal or to dream a new dream. —C.S. Lewis',
    "Be so good they can't ignore you. - Steve Martin",
    "If you tell the truth, you don't have to remember anything! - Mark Twain",
    "If you don't like the road you're walking, start paving another one! - Dolly Parton",
    'A champion is defined not by their wins but by how they can recover when they fall. — Serena Williams',
    "I'd rather regret the risks that didn't work out than the chances I didn't take at all.- Simone Biles."
]
function changeText() {
    let quote = document.getElementById("quote");
    let ran = Math.floor(Math.random() * 25)
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





