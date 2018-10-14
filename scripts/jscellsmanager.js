// the controller for this JSCells Web App 
// it uses (instantiates) instances of the JSCells class (is it a class?)
// it calls on methods (class? instance?) on the JSCells objects (or class?)



const DEFAULT_CHILD_CELLS = 3;
const START_GENERATIONS = 2;
const CELL_ROOT_SELECTOR = 'main';

// should all const variables be in CAPITALS?  

// want to load a cell with cells from a tree array provided


// the start root object
const START_ROOT_CELL = {
    name: 'The Multiverse', desc: 'Everything real and imaginary', classList: 'multiverse', cells: []
}

// the initial child cells to load
const START_CHILD_CELLS_TREE = [
    {
        name: 'The Our Universe', desc: 'Our current reality', classList: 'universe', cells: [
            {
                name: 'Cell 1', desc: 'something', classList: 'domain', cells: [
                    { name: 'Grandchild cell 1.1', desc: 'something smaller', classList: 'child' },
                    { name: 'Grandchild cell 1.2', desc: 'something else smaller', classList: 'child' },
                    { name: 'Grandchild cell 1.3', desc: 'another something smaller', classList: 'child' }
                ]
            },
            {
                name: 'Cell 2', desc: 'something else', classList: 'domain', cells: [
                    { name: 'Grandchild cell 2.1', desc: 'a smaller thing', classList: 'child' },
                    { name: 'Grandchild cell 2.2', desc: 'good things come in small packages', classList: 'child' },
                    { name: 'Grandchild cell 2.3', desc: 'yet another small item', classList: 'child' }
                ]
            }
        ]
    },
]




document.addEventListener('DOMContentLoaded', startCells());



// let rootCell; // so is in global scope, to iterate through and redraw

function startCells() {
    setStartState(); // create the root cell (our multiverse), tell it to make more sample state children
    document.querySelector(CELL_ROOT_SELECTOR).appendChild(drawCells(rootCell));

    // drawCells(); // tell the cells to draw themseleves and their children and give me a div to add in as our multiverse

}


function setStartState() {
    // create the root cell (our multiverse), tell it to make more sample state children
    // create multiverse cell
    // rootCell = new JSCell('Our Multiverse', 'All things real and imaginary', 'multiverse');

    rootCell = new JSCell(START_ROOT_CELL);  // so in future can move cells around or copy trees (yuk!)
    rootCell.addChildren(START_CHILD_CELLS_TREE);

    // rootCell = new JSCell(START_ROOT_CELL).addChildren(START_CHILD_CELLS_TREE);

}



function drawCells(cell) {
    // JSCell object is unaware of it's presentation, so shouldn't be tied to HTML 
    // needs to have access to the cells collection, and iterate through each to draw them
    // Using global rootCell as start, but could pass this in a cell
    // FUTURE: could pass root cell and a specific cell to be the "in focus" cell
    const cellDiv = createCellDiv(cell, 'grid');
    cell.cells.forEach(childCell => {
        cellDiv.appendChild(drawCells(childCell))        
    });
    return cellDiv;
}


function redrawCell(cell) {
    // FUTURE
    // instead of redrawing entire cells collection, could just redraw a specific cell
    // say when chaning only name, description, but also when adding new children?
}


function createCellDiv(cell, displayClassList) {
    // takes a cell object and returns div to be appended to a parent element
    const classList = cell.classList + ` ${displayClassList}`;
    const div = createHTMLElement('div', classList, '');
    div.appendChild(createHTMLElement('h2', '', cell.name));
    div.appendChild(createHTMLElement('h3', '', cell.desc));
    return div;
}
