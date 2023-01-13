// Get a reference to the container element
const container = document.getElementById('grid');
const btn = document.getElementById("button")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
let table
let time
let time2
let result
let playerPosition
let nextMoveD
let nextMoveA
let nextMoveW
let nextMoveS
let movementFlag = false

const maze0 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 1, 0, 0, 0, 0, 1, 2],
  [2, 1, 0, 1, 0, 1, 1, 0, 1, 2],
  [2, 1, 0, 0, 0, 1, 0, 0, 0, 2],
  [4, 0, 0, 1, 0, 0, 0, 1, 1, 2],
  [2, 0, 1, 1, 0, 1, 0, 0, 0, 3],
  [2, 0, 1, 0, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const maze1 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 0, 0, 0, 1, 0, 1, 0, 2],
  [2, 1, 0, 1, 0, 1, 0, 1, 0, 2],
  [4, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 1, 0, 1, 1, 1, 1, 0, 0, 3],
  [2, 1, 0, 0, 0, 0, 1, 0, 0, 2],
  [2, 1, 1, 1, 1, 0, 1, 1, 0, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const maze2 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 0, 0, 1, 1, 0, 2],
  [2, 0, 0, 1, 1, 1, 0, 1, 0, 2],
  [4, 0, 1, 0, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 1, 1, 1, 1, 1, 0, 3],
  [2, 1, 0, 0, 0, 1, 1, 0, 0, 2],
  [2, 1, 0, 1, 1, 0, 1, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
const maze3 = [
  [2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 2],
  [2, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 2],
  [2, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 2],
  [2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2],
];
const maze4 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3],
  [2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 2],
  [2, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 2],
  [4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const maze5 = [
  [2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2],
  [2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const maze6 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 2],
  [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2],
  [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const maze7 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2],
  [2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
const maze8 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2],
  [2, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
  [2, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2],
  [2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2],
  [2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 2],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 2],
  [2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2],
  [2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

function createGrid(rows, cols) {
  // Will generate a random number to use for the maze
  r = Math.floor(Math.random() * 3)
  // r = 2
  // Create a table element
  table = document.createElement('table');

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


      if (cols == 10) {
        if (r == 0) {
          // Looks if the number from the array in the array has the number 1
          if (maze0[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze0[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze0[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze0[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }
        if (r == 1) {
          // Looks if the number from the array in the array has the number 1
          if (maze1[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2

          if (maze1[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3

          if (maze1[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze1[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }
        if (r == 2) {
          // Looks if the number from the array in the array has the number 1
          if (maze2[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2

          if (maze2[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze2[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze2[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }
      } else if (cols == 15) {

        if (r == 0) {
          // Looks if the number from the array in the array has the number 1
          if (maze3[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze3[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze3[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze3[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }

        if (r == 1) {
          // Looks if the number from the array in the array has the number 1
          if (maze4[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze4[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze4[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze4[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }

        if (r == 2) {
          // Looks if the number from the array in the array has the number 1
          if (maze5[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze5[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze5[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze5[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }
      } else if (cols == 21) {
        if (r == 0) {
          // Looks if the number from the array in the array has the number 1
          if (maze6[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze6[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze6[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze6[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }

        if (r == 1) {
          // Looks if the number from the array in the array has the number 1
          if (maze7[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze7[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze7[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze7[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }

        if (r == 2) {
          // Looks if the number from the array in the array has the number 1
          if (maze8[j][i] == 1) {
            cell.setAttribute("class", "wall")
          }
          // Looks if the number from the array in the array has the number 2
          if (maze8[j][i] == 2) {
            cell.setAttribute("class", "permWall")
          }
          // Looks if the number from the array in the array has the number 3
          if (maze8[j][i] == 3) {
            cell.setAttribute("class", "exit")
          }
          // Looks if the number from the array in the array has the number 4
          if (maze8[j][i] == 4) {
            cell.setAttribute("class", "playerHead")
          }
        }
      }

      // Add the cell to the row
      row.appendChild(cell);

    }
    // Add the row to the table
    table.appendChild(row);
  }

  retry = document.createElement("button")
  retry.setAttribute("class", "retry-bas")
  retry.setAttribute("onclick", "home()")
  retry.innerHTML = "Home"
  container.appendChild(retry)

  // Add the table to the container
  container.appendChild(table);
}



function load() {
  movementFlag = true
  timeFlag = false
  let walls = document.querySelectorAll(".wall")
  playerPosition = +document.getElementsByClassName("playerHead")[0].id

  window.addEventListener("keydown", function (event) {
    // Looks for when the key d is pressed and if the movement that is about to perform will hit a div with the class wall and looks for the permanent walls that will stay visible also as long as the next movement that is about to run is going into the finish
    if ((event.key == "d" || event.key == "ArrowRight") && nextMoveD != 901 && this.document.getElementById(nextMoveD).classList.contains("wall") != true && this.document.getElementById(nextMoveD).classList.contains("permWall") != true && this.document.getElementById(nextMoveD).classList.contains("exit") != true) {

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
    } else if ((event.key == "d" || event.key == "ArrowRight") && this.document.getElementById(nextMoveD).classList.contains("exit") == true) {

      // These four lines will provide moving the player to the right and removing the exit class
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 100
      this.document.getElementById(playerPosition).classList.remove("exit")
      this.document.getElementById(playerPosition).classList.add("playerHead")
      // This wil state the date in miliseconds to later calculate the time that the player took to  finish
      // Display finish
      time2 = Date.now()
      result = time2 - time
      end()
    }
    // Looks for when the key a is pressed and looks if the provided move will not be hold back by a wall or a permWall
    if ((event.key == "a" || event.key == "ArrowLeft") && nextMoveA != 5 && (this.document.getElementById(nextMoveA).classList.contains("wall") != true && this.document.getElementById(nextMoveA).classList.contains("permWall") != true) && this.document.getElementById(nextMoveA) != 14) {

      // These three lines will provide moving the player to the left
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 100
      this.document.getElementById(playerPosition).classList.add("playerHead")

      // These four lines will update the next movement of the player on every step
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1

      // Here it will look for the d key to be pressed and when the exit is in the providing move
    } else if ((event.key == "a" || event.key == "ArrowLeft") && this.document.getElementById(nextMoveA).classList.contains("exit") == true) {

      // These four lines will provide moving the player to the right and removing the exit class
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 100
      this.document.getElementById(playerPosition).classList.remove("exit")
      this.document.getElementById(playerPosition).classList.add("playerHead")
      // This wil state the date in miliseconds to later calculate the time that the player took to  finish
      // Display finish
      time2 = Date.now()
      result = time2 - time
      end()
    }
    // Looks for when the key w is pressed and looks if the provided move will not be hold back by a wall or a permWall
    if ((event.key == "w" || event.key == "ArrowUp") && (nextMoveW > 105 && nextMoveW != 500 && nextMoveW != 800 && this.document.getElementById(nextMoveW).classList.contains("wall") != true && this.document.getElementById(nextMoveW).classList.contains("permWall") != true)) {

      // These three lines will provide moving the player up
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 1
      this.document.getElementById(playerPosition).classList.add("playerHead")

      // These four lines will update the next movement of the player on every step
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1

      // Here it will look for the d key to be pressed and when the exit is in the providing move
    } else if ((event.key == "w" || event.key == "ArrowUp") && this.document.getElementById(nextMoveW).classList.contains("exit") == true && this.document.getElementById(nextMoveW).classList.contains("wall") != true) {

      // These four lines will provide moving the player to the right and removing the exit class
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition - 1
      this.document.getElementById(playerPosition).classList.remove("exit")
      this.document.getElementById(playerPosition).classList.add("playerHead")
      // This wil state the date in miliseconds to later calculate the time that the player took to  finish
      // Display finish
      time2 = Date.now()
      result = time2 - time
      end()
    }
    // Looks for whhen the key s is pressed and looks if the provided move will not be hold back by a wall or a permWall
    if ((event.key == "s" || event.key == "ArrowDown") && this.document.getElementById(nextMoveS).classList.contains("wall") != true && this.document.getElementById(nextMoveS).classList.contains("permWall") != true && this.document.getElementById(nextMoveS).classList.contains("exit") == false) {

      // These three lines will provide moving the player down
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 1
      this.document.getElementById(playerPosition).classList.add("playerHead")

      // These four lines will update the next movement of the player on every step
      nextMoveD = playerPosition + 100
      nextMoveA = playerPosition - 100
      nextMoveW = playerPosition - 1
      nextMoveS = playerPosition + 1

      // Here it will look for the d key to be pressed and when the exit is in the providing move

    } else if ((event.key == "s" || event.key == "ArrowDown") && this.document.getElementById(nextMoveS).classList.contains("exit") == true) {

      // These four lines will provide moving the player to the right and removing the exit class
      this.document.getElementById(playerPosition).classList.remove("playerHead")
      playerPosition = playerPosition + 1
      this.document.getElementById(playerPosition).classList.remove("exit")
      this.document.getElementById(playerPosition).classList.add("playerHead")
      // This wil state the date in miliseconds to later calculate the time that the player took to  finish
      // Display finish
      time2 = Date.now()
      result = time2 - time
      end()
    }
    // Looks for when any button besides the spacebar is pressed
    if (event.key != " ") {
      // Loops for every single div with the class wall
      for (const wall of walls) {
        // Makes the walls invisible
        wall.classList.add("invisible")
      }
      walls = document.querySelectorAll(".invisible")

      if (timeFlag != true) {
        // This will state the date in miliseconds to later calculate how long it took for the player to finish
        time = Date.now()
        timeFlag = true
      }
    }
  })
}



// Nothing to touch here these are just here to select the difficulty and the home button and to end the game

function easyMode() {
  createGrid(10, 10)
  btn.style.display = "none"
  btn2.style.display = "none"
  btn3.style.display = "none"
  nextMoveD = 105 + 100
  nextMoveA = 105 - 100
  nextMoveW = 105 - 1
  nextMoveS = 105 + 1
  load()
}

function normalMode() {
  createGrid(15, 15)
  btn.style.display = "none"
  btn2.style.display = "none"
  btn3.style.display = "none"
  const tds = document.querySelectorAll("td")
  for (const td of tds) {
    td.style.width = "30px"
    td.style.height = "30px"
  }

  if (r == 0) {
    nextMoveD = 501 + 100
    nextMoveA = 501 - 100
    nextMoveW = 501 - 1
    nextMoveS = 501 + 1
  } else if (r == 1) {
    nextMoveD = 114 + 100
    nextMoveA = 114 - 100
    nextMoveW = 114 - 1
    nextMoveS = 114 + 1
  } else if (r == 2) {
    nextMoveD = 801 + 100
    nextMoveA = 801 - 100
    nextMoveW = 801 - 1
    nextMoveS = 801 + 1
  }
  load()
}

function hardMode() {
  createGrid(21, 21)
  btn.style.display = "none"
  btn2.style.display = "none"
  btn3.style.display = "none"
  const tds = document.querySelectorAll("td")
  for (const td of tds) {
    td.style.width = "22px" /*22px bij 22px */
    td.style.height = "22px"
  }

  if (r == 0) {
    nextMoveD = 1001 + 100
    nextMoveA = 1001 - 100
    nextMoveW = 1001 - 1
    nextMoveS = 1001 + 1
  } else if (r == 1) {
    nextMoveD = 102 + 100
    nextMoveA = 102 - 100
    nextMoveW = 102 - 1
    nextMoveS = 102 + 1
  } else if (r == 2) {
    nextMoveD = 2108 + 100
    nextMoveA = 2108 - 100
    nextMoveW = 2108 - 1
    nextMoveS = 2108 + 1
  }
  load()
}

function end() {
  text = document.createElement("h1")
  text.setAttribute("class", "result-bas")
  text.innerHTML = result + " ms"
  table.style.display = "none"
  container.appendChild(text)
}

function home() {
  location.reload()
}