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
// ?? cells is an array, or should we make it a cells collection object, with a name and a cells array?
function JSCell(name, description, ancestry, markdown) {
    this.name = name;
    this.description = description;
    this.ancestry = ancestry;
    this.markdown = markdown;
    this.cells = [];
    // future: method to update ancestry of all children
    // future: this.cellsCollection = new JSCellsCollection
}










// function Multiverse(name = "This Crazy Hihi Universe 2018!", cells = 2) { // can in future take a cells collection to load from other instance, export, save etc (JSON).  All cells should have this ability (for moving branches) 
//     this.name = name;
//     this.cells = []; // will need to populate this with cells x child cells (e.g. 2 child cells)
//     // this.cellsCollection = {
//     //     name: "Multiverse Cells",
//     //     cells: [new JSCell("This Crazy Hihi Universe 2018!", "Our current reality ;-)", "")]
//     for (i = 0; i < cells; i++) {
//         let cell = new JSCell('Child Cell ${i}', 'A cell with no children','1.1.2.1.7.4.8.1', '# Cell #${i}');
//         this.cells.push(cell);
//     }
// }
