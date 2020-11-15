var bark = new Audio();
bark.src = "dog.mp3"

var moo = new Audio();
moo.src = "cow.mp3"

var roar = new Audio();
roar.src = "lion.mp3"

document.getElementById('cowsound').addEventListener("click", e => moo.play());

document.getElementById('dogsound').addEventListener("click", e => bark.play());

document.getElementById('lionsound').addEventListener("click", e => roar.play());


