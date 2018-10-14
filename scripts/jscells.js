// the JSCells model
// is independent of view or controller
// knows how to manage itself, such as add a new child

let rootCell; // so is in global scope, to iterate through and redraw


// why is this a function and not a const, or let 
// or should it be a Class {constructor(){}} ??
// and why use '=' & ';' instead of ':' and ',' ???
function JSCell (name, desc, classList, cells = []) {
    this.name = name;
    this.description = desc;  // doing this so can see diff between class and instance
    this.classList = `cell${(classList && classList.length > 0) ? ' ' + classList : ''}`; // display classes such as grid, added when displaying
    // this.ancestry = '';  Future... needs to update it's own ancestry 
    this.cells = cells;
}

