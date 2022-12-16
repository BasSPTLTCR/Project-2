
const btn = document.getElementById("button")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
let playerPosition = null
let start = null
let start2 = null
let start3 = null
let nextMoveD = null
let nextMoveA = null
let nextMoveW = null
let nextMoveS = null

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
        
        // Maze randomization
        if (cols == 10 && (j > 0 && j < 9) && i < 9) {
          x = Math.floor(Math.random() * 10)
          console.log(x);
          if (x >= 6) {
            cell.setAttribute("class", "wall")
          }
        }

        // Add the cell to the row
        row.appendChild(cell);
        
      }
      // Add the row to the table
      table.appendChild(row);
    }
    
    // Add the table to the container
    container.appendChild(table);
}

function load() {
  start = document.getElementById(105).setAttribute("class", "playerHead")
  // start2 = 
  // start3 =
  playerPosition = +document.getElementsByClassName("playerHead")[0].id
  wall = document.getElementsByClassName("wall")
  


  window.addEventListener("keydown", function(event){
    // Looks for when the key d is pressed and if the movement that is about to perform will hit a div with the class wall and as long as the next movement that is about to run is going into the finish
    if (event.key == "d" && this.document.getElementById(nextMoveD).classList.contains("wall") != true && this.document.getElementById(nextMoveD).classList.contains("exit") != true) {

      // These three lines will provide moving the player to the right
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 100 
      this.document.getElementById(playerPosition).classList.add("playerHead")

      // These four lines will update the next movement of the player on every step
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1

      // Here it will look for the d key to be pressed and when the exit is in the providing move
    } else if (event.key == "d" && this.document.getElementById(nextMoveD).classList.contains("exit") == true){
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 100 
      this.document.getElementById(playerPosition).classList.remove("exit")
      this.document.getElementById(playerPosition).classList.add("playerHead")
      // Display finish
    }
    // Looks for when the key a is pressed
    if (event.key == "a" && (nextMoveA != 5 && this.document.getElementById(nextMoveA).classList.contains("wall") != true)) {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 100
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1
    }
    // Looks for when the key w is pressed
    if (event.key == "w" && (nextMoveW > 105 && this.document.getElementById(nextMoveW).classList.contains("wall") != true)) {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 1
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1
    }
    // Looks for whhen the key s is pressed
    if (event.key == "s" && this.document.getElementById(nextMoveS).classList.contains("wall") != true) {
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 1
      this.document.getElementById(playerPosition).classList.add("playerHead")
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1
    }
    console.log(playerPosition);
    })

}



function easyMode() {
  createGrid(10, 10)
  btn.style.display = "none"
  btn2.style.display = "none"
  btn3.style.display = "none"
  nextMoveD = 105 + 100
  nextMoveA = 105 - 100
  nextMoveW = 105 - 1
  nextMoveS = 105 + 1
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

