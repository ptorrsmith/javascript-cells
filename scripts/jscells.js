// Wait for page to load
//  Universe with 2 normal cells, each with 2 child cell+2s
//  Note: all cells when created have 2 child cells
//      child cells only have grand-children added when they become visible
//      
// Then start the multiverse
//  Add event handlers to universe (click to add new cell+2)
//  Add event handlers to all child cells (click to focus) 

document.addEventListener('DOMContentLoaded', startCells);

// Define your `multiverse` object here!
var multiverse = {
    universes: [
    ]
}


function startCells() {
    loadMultiverse(1);
    loadUniverses(2);


}



function loadMultiverse(count) {
    // clear out existing html
    let multiverse = document.getElementsByClassName('multiverse')[0];
    multiverse.innerHTML = "<span>The multiverse</span>";
    // create a single universe and put into the multiverse
    let universe = document.createElement('div');
    universe.className = "universe cell grid";
    universe.id = "cell-0";
    let uvTitle = document.createElement('span');
    uvTitle.innerHTML = "The Universe";
    universe.appendChild(uvTitle);
    // $('body').append(universe);
    multiverse.appendChild(universe);

}

function loadUniverses(count) {
    // loop through all universes and add count child cells
    // only 1 universe for inital app
    let universes = document.getElementsByClassName('universe');
    for (i = 0; i < universes.length; i++) {
        // do count times
        for (j = 0; j < count; j++) {
            let cell = document.createElement('div');
            cell.className = "child cell grid";
            cell.id = "cell-" + (i+1) + "." + (j+1);

            let cellTitle = document.createElement('span');
            cellTitle.innerHTML = "child cell " + (i+1) + "." + (j+1);
            cell.appendChild(cellTitle);
            universes[i].appendChild(cell);

        }
    }

}
