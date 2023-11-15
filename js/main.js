'use strict';

// Functions
function myCreateElement(tag, classNames, content){
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    element.append(content);
    return element;
}

const board = document.querySelector('.board');
const classArray = ['cell', 'cell10'];

// Grid creation
for (let i = 1; i <= 100; i++) {
    const myCell = myCreateElement('div', classArray, i);
    // Event listener
    myCell.addEventListener('click', function() {
    console.log(i);
    this.classList.add('cell-clicked');
    });
    board.append(myCell);
}