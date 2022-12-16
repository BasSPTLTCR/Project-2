
const btn = document.getElementById("button")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
let playerPosition = null
let start = null
let start2 = null
let start3 = null

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

        // Looks for the outer walls on the easy difficulty
        if (cols == 10 && (j > 4 || j < 4) && i == 0 || (j == 0 || j == 9) && (i > 0 && i != 9) || (j > 5 || j < 5) && i == 9) {
          // Gives the outer walls except for the player position the wall attribute
          cell.setAttribute("class", "wall")
          // Looks for the amount of columns used with the easy maze to place the exit
        } else if (cols == 10 && j == 5 && i == 9) {
          // Gives the one exit a class so it can be seen at all times
          cell.setAttribute("class", "exit")
        }else if (cols == 20) {

        } else {

        }
        
        // Add the cell to the row
        row.appendChild(cell);
        
      }
      // Add the row to the table
      table.appendChild(row);
    }
    
    // Add the table to the container
    container.appendChild(table);
    
    if (cols == 10) {
      // .setAttribute("class", "playerHead")
    }
}

function load() {
  start = document.getElementById(105).setAttribute("class", "playerHead")
  playerPosition = +document.getElementsByClassName("playerHead")[0].id
  wall = document.getElementsByClassName("wall")
  


  window.addEventListener("keydown", function(event){
    // Looks for when the key d is pressed
    if (event.key == "d") {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 100 
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveD = playerPosition + 100
    }
    // Looks for when the key a is pressed
    if (event.key == "a") {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 100
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveA = playerPosition + 100
    }
    // Looks for when the key w is pressed
    if (event.key == "w") {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 1
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveW = playerPosition + 100
    }
    // Looks for whhen the key s is pressed
    if (event.key == "s") {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 1
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveS = playerPosition + 100
    }
    console.log(playerPosition);
    })

}



function easyMode() {
  createGrid(10, 10)
  const outerWalls = 
  btn.style.display = "none"
  btn2.style.display = "none"
  btn3.style.display = "none"
  setTimeout(load, 0)
  
}

function normalMode() {
    createGrid(15, 15)
    btn.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
}

function hardMode() {
    createGrid(20, 20)
    btn.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
}

