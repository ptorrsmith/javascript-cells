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

Also calls methods on indiv
|idual cell objects to change their state:
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

let CellManager; // so in our global scope  

function startCells() {
    // for the onclick="CellManager.setCellsStart(2, "Our Universe")"
    CellManager = { // why all inside this object?  for namespacing?

        setCellsStart: function (name = 'Our Multiverse', description = 'Multiverse of all things real and imaginary!', ancestry_root = '0', markdown = '', universeCellQty = 1, initialChildCellQty = 3) { // will default to only 1 "universe" child cell within the multiverse's cells collection.
            this.resetCells(); // clear out any HTML in our multiverse node
            this.setPreState(name, description, ancestry_root, markdown, universeCellQty, initialChildCellQty);
        },

        // how do I hide functions and properties?
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
                let universe = new JSCell(`This Crazy Hihi Universe 2018!`, `Our current reality`, 'aaaaa', `${universalAncestryPrefix}${i + 1}`, `# And what a universe it is!`);
                for (let j = 0; j < initialChildCellQty; j++) {
                    let cell = new JSCell(`Child Cell ${j + 1}`, `A cell`, 'bbbb', `${universe.ancestry}.${j + 1}`, `# A child of the universe :-)`);
                    for (let k = 0; k < initialChildCellQty; k++) {
                        let newCell = new JSCell(`extra Child Cell ${k + 1}`, `An extra cell`, 'cccc', `${universe.ancestry}.${k + 1}`, `# An extra child of the universe :-)`);
                        cell.cells.push(newCell);
                    }
                    universe.cells.push(cell);
                }
                multiverse.cells.push(universe);
            }
        },
        addChildCells: function () {
            // todo
            let newCell = new JSCell();
            multiverse.cells.push(cell);
        },

        resetCells: function () {
            let getMultiverse = document.querySelector(`div.multiverse`);  // returns a node, an array-like object
            // appears document.querySelector only returns a single element.
            getMultiverse.innerHTML = ``;
        },

        drawBoard: function () {
            // get multiverse DOM element
            let multiverseDiv = document.querySelector('div.multiverse');  // returns a node, an array-like object, but just the first one.
            // we already have multiverse cell object to iterate through to build up either
            //  * multiverseDiv.innerHTML = text of HTML
            //  * multiverseDiv.appendChild(new DOM elements);  // will go with this approach



            // create dom elements by iterating through all cells in multiverse

            // multiverse title and cells
            let titleSpan = document.createElement('span');
            let descSpan = document.createElement('span');
            // let h1 = document.createElement('h1');
            // let p = document.createElement('p');
            titleSpan.appendChild(document.createTextNode(multiverse.name));
            descSpan.appendChild(document.createTextNode(multiverse.description));

            // span.appendChild(h1);
            multiverseDiv.appendChild(titleSpan);
            multiverseDiv.appendChild(descSpan);

            // unie(s), multiverse.cells, should be appended as child divs (with any)
            // call a recursive function to return divs for all the cells, if any
            // for each child cell  // should use for... each, or each... for/in ??
            for (let i = 0; i < multiverse.cells.length; i++) {
                // append a div element (each with title+desc spans and 0 or more divs) and children recursively
                let cell = multiverse.cells[i];
                let cellDiv = document.createElement('div');
                cellDiv.className = cell.className || 'cell grid test universe';
                multiverseDiv.appendChild(reduceCellToDiv(cellDiv, cell)); // so should return a div for each child cell in cell.cells
            }

            // creating a function to build up div element 
            // function cellsToDivs(cellDiv, cell) {
            function reduceCellToDiv(cellDiv, cell) {  // cellDiv will be our accumulator, cell is our current value to use to append title, desc, and divs for any cell.cells
                // takes in a cell object (title, desc, *cells[])
                // will recursively call itself for each of any child cells in cell.cells[]
                // this should return cellDiv at the end
                let cellTitleSpan = document.createElement('span');
                cellTitleSpan.className = 'cell-title';
                cellTitleSpan.appendChild(document.createTextNode(cell.name));
                cellDiv.appendChild(cellTitleSpan);
      
                let cellDescSpan = document.createElement('span');
                cellDescSpan.className = 'cell-desc';
                cellDescSpan.appendChild(document.createTextNode(cell.description));
                cellDiv.appendChild(cellDescSpan);

                if (Array.isArray(cell.cells) && cell.cells.length > 0) {
                    // we want to call this function again, to return a div (with title, desc, divs)
                    let ChildCellDiv = document.createElement('div');
                    ChildCellDiv.className = cell.className || 'oops'; //'cell grid universe blah';
                    cellDiv.appendChild(cell.cells.reduce(reduceCellToDiv, ChildCellDiv));
                }
                return cellDiv;
            }
        }

        // example recursive reducer function
        // function flat(r, a) {
        //     if (Array.isArray(a)) {
        //         return a.reduce(flat, r);
        //     }
        //     r.push(a);
        //     return r;
        // }

        // var array = [3, [4, [5, [6, 7]]]];
        // document.write('<pre>' + JSON.stringify(array.reduce(flat, []), 0, 4) + '</pre>');

    }
    CellManager.setCellsStart();
    CellManager.drawBoard();
}





//name: function () {
//    multiverse = new Multiverse(name, 3);  // note that multiverse is declared in global scope outside the CellManager constructor, so it is accessible elsewhere
//},





















