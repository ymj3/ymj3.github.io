let startpicture = document.getElementById("startpicture");
let opacity = 1;
let fadeIn = setInterval(() => {
    if (opacity <= 0) {
        clearInterval(fadeIn);
    }
    startpicture.style.opacity = opacity;
    opacity -= 0.01;
}, 20);


switch (new Date().getMonth()) {
    case 0: document.body.style.backgroundImage = "url(./resources/1.jpg)"; break;
    case 1: document.body.style.backgroundImage = "url(./resources/2.jpg)"; break;
    case 2: document.body.style.backgroundImage = "url(./resources/3.jpg)"; break;
    case 3: document.body.style.backgroundImage = "url(./resources/4.jpg)"; break;
    case 4: document.body.style.backgroundImage = "url(./resources/5.jpg)"; break;
    case 5: document.body.style.backgroundImage = "url(./resources/6.jpg)"; break;
    case 6: document.body.style.backgroundImage = "url(./resources/7.jpg)"; break;
    case 7: document.body.style.backgroundImage = "url(./resources/8.jpg)"; break;
    case 8: document.body.style.backgroundImage = "url(./resources/9.jpg)"; break;
    case 9: document.body.style.backgroundImage = "url(./resources/10.jpg)"; break;
    case 10: document.body.style.backgroundImage = "url(./resources/11.jpg)"; break;
    case 11: document.body.style.backgroundImage = "url(./resources/12.jpg)"; break;

}