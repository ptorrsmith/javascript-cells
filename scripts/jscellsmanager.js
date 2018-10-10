/*

See Multiverse class (function) constructor in jscells.js
    Note: a global let multiverse; in jscells.js declares the object, but does not create it.  This so globally accessible (good practice or avoid bugs?) 
CellManager will create an instance cell objects and cells collections to place into other cells' cells collections 

CellManager creates a global (class?) object called CellManager
Handles all "click" events from browser (and other events)

It creates (but does not declare) our multiverse object (new Multiverse(2, "Our Crazy Universe!"))

Responsibilities:

Controls interaction between browser/user and the multiverse object that the web page (DOM) is built up from.

Calls methods on the multiverse object to change its state:
* set name (optional on constructor)
* add one cell to its cells collection (name, how many children? = 2)  (future, add cells collection/tree)
* remove a cell (cell) - will remove all descendants

Also calls methods on individual cell objects to change their state:
* set name
* can add them to another cell's collection


*/

/* 
Wait for page to load
Make a multiverse object, with a single cell instance (Universe) with 2 normal cells, each with 2 child cell+2s
 Note: all cells when created have 2 child cells
     child cells only have grand-children added when they become visible
   
Then start the multiverse
 Add event handlers to universe (click to add new cell+2)
 Add event handlers to all child cells (click to focus) 
*/

// document.addEventListener('DOMContentLoaded', CellManager.setCellsStart("Our Multi-verse", 1, 2));
document.addEventListener('DOMContentLoaded', startCells);

let CellManager; // so in global scope

function startCells() {
    console.log(`Starting!!`);

    // for the onclick="CellManager.setCellsStart(2, "Our Universe")"
    CellManager = {
        setCellsStart: function (name = 'Our Multiverse', description = 'Multiverse of all things real and imaginary!', ancestry_root = '', markdown = '', universeCellQty = 1, initialChildCellQty = 2) { // will default to only 1 "universe" child cell within the multiverse's cells collection.
            this.resetCells(); // clear out any HTML in our multiverse node
            this.setPreState(name, description, ancestry_root, markdown, universeCellQty, initialChildCellQty);
        },
        resetCells: function () {
            let getMultiverse = document.querySelector(`div.multiverse`);  // returns a node, an array-like object
            getMultiverse.innerHTML = `<h1>hello World</h1>`;
        },
        setPreState: function (name, description, ancestryRoot, markdown, universeCellQty, initialChildCellQty) {
            // create our multiverse
            multiverse = new JSCell(name, description, ancestryRoot, markdown);
            let universalAncestryPrefix;
            if (ancestryRoot.length == 0) { // ?? single line if value setting
                universalAncestryPrefix = ``;
            } else {
                universalAncestryPrefix = `${ancestryRoot}.`;
            }
            // create childCellQty number of cells (universe) with grandChildCellQty initial child cells
            for (let i = 0; i < universeCellQty; i++) {
                let universe = new JSCell(`This Crazy Hihi Universe 2018!`, `Our current reality`, `${ancestryRoot}${i+1}`, `# And what a universe it is!`);
                for (let j = 0; j < initialChildCellQty; j++) {
                    let cell = new JSCell(`Child Cell ${j+1}`, `A cell`, `${universe.ancestry}.${j+1}`, `# A child of the universe :-)`);
                    universe.cells.push(cell);
                }
                multiverse.cells.push(universe);
            }
        },
        addChildCells: function () {
            // todo
        },
        drawBoard: function() {
            let getMultiverse = document.querySelector('div.multiverse');  // returns a node, an array-like object
            // getMultiverse.innerHTML = `${multiverse.name} (${multiverse.description}) : ${multiverse.cells.length}`;
            getMultiverse.innerHTML = `${JSON.stringify(multiverse)}`;
        }
    }

    CellManager.setCellsStart();
    CellManager.drawBoard();
    console.log(`Ending!!`);

}





//name: function () {
//    multiverse = new Multiverse(name, 3);  // note that multiverse is declared in global scope outside the CellManager constructor, so it is accessible elsewhere
//},





















