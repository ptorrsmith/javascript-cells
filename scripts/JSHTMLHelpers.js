// helper classes for creating HTML elements

function createHTMLElement (tagName, classList, innerText) {
    const element = document.createElement(tagName);
    const tagContents = document.createTextNode(innerText);

    const att = element.setAttribute('class', classList)
    // att.value = classList;  // what if no classList provided?
    element.appendChild(tagContents);
    return element;
}

