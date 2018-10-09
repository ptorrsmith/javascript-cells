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
    
}
  