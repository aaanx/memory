function createElement() {
    var wrapper = document.querySelector('.wrapper');
    var element = document.createElement('div');
    element.classList.add('box');
    wrapper.appendChild(element);
}

function addElements() {
    var elementsNumber = 16;
    for (let i = 0; i < elementsNumber; i++) {
        createElement();
    }
}
addElements();