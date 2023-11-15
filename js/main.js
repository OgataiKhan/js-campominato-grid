'use strict';

// Functions
function myCreateElement(tag, classNames, content){
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    element.append(content);
    return element;
}

function handlePlayClick () {
    // Clear existing grid
    board.innerHTML = '';

    // Grid creation
    for (let i = 1; i <= 100; i++) {
        const myCell = myCreateElement('div', classArray, i);
        // Cell event listener
        myCell.addEventListener('click', function() {
        console.log(i);
        this.classList.add('cell-clicked');
        });
        board.append(myCell);
    }
}

const board = document.querySelector('.board');
const classArray = ['cell', 'cell10'];
const playButtons = document.querySelectorAll('.play-btn');

for (let j = 0; j < playButtons.length; j++) {
    playButtons[j].addEventListener('click', handlePlayClick);
}