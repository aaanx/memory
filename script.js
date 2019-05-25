var elementsNumber = 16;
var wrapper = document.querySelector('.wrapper');
var element = document.createElement('div');

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

// Dodawanie zdjęć

function displayImages() {
    var images = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    var allDivs = document.querySelectorAll('div.box');

    for (let i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', `/img/${images[i]}.jpg`);
        allDivs[i].appendChild(img);
    }
}
displayImages()


