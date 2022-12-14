const buttons = document.getElementsByClassName("bas-buttons")
buttons.style.display = "block"

function createGrid(rows, cols) {
    // Get a reference to the container element
    const container = document.getElementById('grid');
  
    // Create a table element
    const table = document.createElement('table');
  
    // Loop through the specified number of rows
    for (let i = 0; i < rows; i++) {

      // Create a row element
      const row = document.createElement('tr');
      row.setAttribute("id", i * 100 + 100)

      // Loop through the specified number of columns
      for (let j = 0; j < cols; j++) {

        // Create a cell element
        const cell = document.createElement('td');

        // Adds an attribute to the actual tiles that will allow the player to move
        cell.setAttribute("id", i * 100 + 100 + j + 1)

        // Add the cell to the row
        row.appendChild(cell);

      }
      // Add the row to the table
      table.appendChild(row);
    }
  
    // Add the table to the container
    container.appendChild(table);
}

function easyMode() {
    createGrid(10, 10)
    buttons.style.display = "none"
}

function normalMode() {
    createGrid(15, 15)
    buttons.style.display = "none"
}

function hardMode() {
    createGrid(20, 20)
    buttons.style.display = "none"
}

