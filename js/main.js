'use strict';

function myCreateElement(tag, className, content){
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element;
}

