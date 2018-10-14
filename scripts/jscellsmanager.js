// the controller for this JSCells Web App 
// it uses (instantiates) instances of the JSCells class (is it a class?)
// it calls on methods (class? instance?) on the JSCells objects (or class?)



const DEFAULT_CHILD_CELLS = 2;
const START_GENERATIONS = 3;
const CELL_ROOT_SELECTOR = '#main1';

// should all const variables be in CAPITALS?  
// const START_TEXT = [
//     { name: 'The Multiverse', desc: 'Everything real and imaginary', child_count: 1 },
//     { name: 'The Our Universe', desc: 'Our current reality' },
//     { name: 'A cell', desc: 'something' },
// ]

document.addEventListener('DOMContentLoaded', startCells());



// let rootCell; // so is in global scope, to iterate through and redraw

function startCells() {
    setStartState();
    drawCells();
}


function setStartState() {
    // create multiverse cell
    rootCell = new JSCell('Our Multiverse', 'All things real and imaginary', 'multiverse');

    // now make some children cells and put them into the rootCell's cells array

    // and

}



function drawCells() {
    // JSCell object is unaware of it's presentation, so shouldn't be tied to HTML 
    // needs to have access to the cells collection, and iterate through each to draw them
    // Using global rootCell as start, but could pass this in a cell
    // FUTURE: could pass root cell and a specific cell to be the "in focus" cell
    const rootCellDiv = createCellDiv(rootCell, 'grid');
    document.querySelector(CELL_ROOT_SELECTOR).appendChild(rootCellDiv);
}


function redrawCell(cell) {
    // FUTURE
    // instead of redrawing entire cells collection, could just redraw a specific cell
    // say when chaning only name, description, but also when adding new children?
}


function createCellDiv(cell, displayClassList) {
    // takes a cell object and returns div to be appended to a parent element
    const classList = cell.classList + ` ${displayClassList}`;
    return createHTMLElement('div', classList, 'DELETE THIS');
}
