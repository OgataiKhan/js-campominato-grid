'use strict';

// Functions
// Element creator
function myCreateElement(tag, classNames, content){
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    element.append(content);
    return element;
}

// Click handler
function handlePlayClick () {
    // Clear existing grid
    board.innerHTML = '';
    // Save wanted classes as an array
    const classArray = ['cell', `cell${sideLength}`];
    // Grid creation
    for (let i = 1; i <= totalCells; i++) {
        const myCell = myCreateElement('div', classArray, i);
        // Cell event listener
        myCell.addEventListener('click', function() {
        console.log(i);
        this.classList.add('cell-clicked');
        });
        board.append(myCell);
    }
}

// Difficulty setter function
function setDifficulty(side) {
    sideLength = String(side);
    totalCells = side * side;
}

// Variables
const board = document.querySelector('.board');
const playButtons = document.querySelectorAll('.play-btn');
const difficultySelector = document.getElementById('difficulty');
let sideLength = '9';
let totalCells = 81;

// Set grid size and cell number based on selected difficulty
difficultySelector.addEventListener('change', function() {
    const selectedDifficulty = this.value;
    switch (selectedDifficulty) {
        case 'easy':
            setDifficulty(10);
            break;
        case 'hard':
            setDifficulty(7);
            break;
        case 'medium':
        default:
            setDifficulty(9);
    }
});

// Add event listeners to play buttons
for (let j = 0; j < playButtons.length; j++) {
    playButtons[j].addEventListener('click', handlePlayClick);
}