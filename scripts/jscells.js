// the JSCells model
// is independent of view or controller
// knows how to manage itself, such as add a new child

let rootCell; // so is in global scope, to iterate through and redraw


// why is this a function and not a const, or let 
// or should it be a Class {constructor(){}} ??
// and why use '=' & ';' instead of ':' and ',' ???


// function JSCell (name, desc, classList, cells = []) {
//     this.name = name;
//     this.description = desc;  // doing this so can see diff between class and instance
//     this.classList = `cell${(classList && classList.length > 0) ? ' ' + classList : ''}`; // display classes such as grid, added when displaying
//     // this.ancestry = '';  Future... needs to update it's own ancestry 
//     this.cells = cells;
// }

function JSCell(cell = START_ROOT_CELL) {
    this.name = cell.name;
    this.desc = cell.desc;
    this.classList = `cell ${cell.classList||''}`;
    this.cells = cell.cells || []; // should be [], but for future ?
}


// JSCell.prototype.addChildren = function (cells = START_CHILD_CELLS_TREE) {
JSCell.prototype.addChildren = function (cells = START_CHILD_CELLS_TREE) {

    // problems with 'this.' doing it this way
    // cells.forEach(function (childCell) {  // only one universe node, and it's children to add
    //     const child = new JSCell({name: childCell.name, desc: childCell.desc, cells: childCell.cells});
    //     this.cells.push(child);  // this refers to Window here for some reason!!
    //     child.addChildren(childCell.cells);
    // })

    for (let i = 0; i < cells.length; i++) {
        const child = new JSCell(
            {
                name: cells[i].name,
                desc: cells[i].desc,
                classList: cells[i].classList
                // cells: cells[i].cells // this omits the need for recursion, if I ommit it and try to call child.children, then the 'this.addChildren() fails with undefined
            }
        );
        this.cells.push(child);  // this is undefined here !!
        if (cells[i].cells && cells[i].cells.length > 0) {
            child.addChildren(cells[i].cells);
        }
    }
}


// Ability to pass JSCell object a function which it can use to return a presentation form
// so could pass it a function to return divs appropriately
// think we'd use map perhaps? or reduce?  (eek!)
// JSCell.prototype.present() {}





// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// the prototype property can be used to add methods to existing constructors.

// Well, to be exact, the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.