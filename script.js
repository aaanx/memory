var elementsNumber = 16;
var wrapper = document.querySelector('.wrapper');
var element = document.createElement('div');
var allDivs = document.querySelectorAll('div.box');

// Tworzenie pojedynczego diva
function createElement() {
    element = document.createElement('div');
    element.classList.add('box');
    wrapper.appendChild(element);
}

//dodanie x kart memory
function addElements() {
    for (let i = 0; i < elementsNumber; i++) {
        createElement();
    }
}

addElements();

// Sortowanie zdjęć

var images = [
    {
        src: '/img/1.jpg',
        id: 1
    },
    {
        src: '/img/2.jpg',
        id: 2
    },
    {
        src: '/img/3.jpg',
        id: 3
    },
    {
        src: '/img/4.jpg',
        id: 4
    },
    {
        src: '/img/5.jpg',
        id: 5
    },
    {
        src: '/img/6.jpg',
        id: 6
    },
    {
        src: '/img/7.jpg',
        id: 7
    },
    {
        src: '/img/8.jpg',
        id: 8
    },
    {
        src: '/img/9.jpg',
        id: 1
    },
    {
        src: '/img/10.jpg',
        id: 8
    },
    {
        src: '/img/11.jpg',
        id: 2
    },
    {
        src: '/img/12.jpg',
        id: 3
    },
    {
        src: '/img/13.jpg',
        id: 4
    },
    {
        src: '/img/14.jpg',
        id: 5
    },
    {
        src: '/img/15.jpg',
        id: 6
    },
    {
        src: '/img/16.jpg',
        id: 7
    }];

function shuffle(images) {
    var currentIndex = images.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = images[currentIndex];
        images[currentIndex] = images[randomIndex];
        images[randomIndex] = temporaryValue;
    }

    return images;
}
shuffle(images);

// Wyświetlanie/dodawanie zdjęć

function displayImages() {

    allDivs = document.querySelectorAll('div.box');
    for (let i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', images[i].src);
        allDivs[i].appendChild(img);
    }
}
displayImages();


//sprawdzanie elementów

function checkIfPair(a) {
    console.log(a);

}

// pokaż img
let clickCounter = 0;
var clickedImages = [];

function onClick(e) {
    console.log(e);
    if (clickCounter <= 1) {
        var clickedImage = e.firstChild;
        console.log(e.firstChild);
        clickedImages.push(clickedImage);
        clickedImage.classList.toggle('show');
        checkIfPair(clickedImages);
    } else {
        return;
    }
    clickCounter++;
    console.log(clickCounter);
}

for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', function () {
        onClick(allDivs[i]);
    })
}








