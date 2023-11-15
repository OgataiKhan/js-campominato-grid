'use strict';

function myCreateElement(tag, classNames, content){
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    element.append(content);
    return element;
}

const board = document.querySelector('.board');

const classArray = ['cell', 'cell10'];

for (let i = 1; i <= 100; i++) {
    const myCell = myCreateElement('div', classArray, i);
    board.append(myCell);
}