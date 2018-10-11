/*
This is the model for a Multiverse of Cells.
It is used to construct a multiverse object with cell objects which have properties and methods to manage themselves

*/

// set global (public) instance variable
let multiverse; /// so this is in our global scope
// note: multiverse is just a cell, with a name, description, ancestry (of 0), and optional markdown


// [ts] This constructor function may be converted to a class declaration.
// function JSCell(name: any, description: any, ancestry: any, markdown: any): void
// ?? Constructor functions vs class declarations?  
// and what is super().  extends?  (OOP?)
// ?? cells is an array, or should we make it a cells collection object, with a name and a cells array?  Future.  Array for now to keep simple.


function JSCell(name = 'A Cell', description = '', classProp = '', ancestry = '', markdown = '') {
    this.name = name; // this means the object created with new JSCell()
    this.description = description;
    this.cellClass = `cell grid ${classProp.length > 0 ? ' ' + classProp : ''}`; 
    this.ancestry = ancestry;
    this.markdown = markdown;
    this.cells = [];
    // future: method to update ancestry of all children
    // future: this.cellsCollection = new JSCellsCollection

}

