/*
Tic Tac Toe javascript. X's will be odd moves. O's will be even moves. Make a table
through javascript with an array like this: [[row1], [row2], [row3]] all with values
of " ", "X", or "O".
*/

// Each box in the table
var blocks = Array.prototype.slice.call(document.getElementsByTagName('td'));

// The turn number
var count = 0;

// Put X's and O's for a click and show the winner. This is basically the render board function.
function playerMoves() {
  for (i = 0; i < 9; i++) {
    function clicks(i) {
      blocks[i].addEventListener('click', function() {
        if (count === 8 && !checkBoard()) {
          alert("blah")
        }
        if (count % 2 === 0 && blocks[i].innerHTML === "") {
          blocks[i].innerHTML = "x"
          checkBoard()
        } else if (count % 2 !== 0 && blocks[i].innerHTML === ""){
          blocks[i].innerHTML = "o"
          checkBoard()
        } else {
          alert("Stop. Please just stop.")
          count++
        }
        count++
      })
    }
    clicks(i)
  }

  if (count === 8) {
    alert("blah")
  }
}

playerMoves();

// Clears the board and starts a new game.
document.getElementById('new-game').addEventListener('click', function() {
  for (i = 0; i < blocks.length; i++) {
    blocks[i].innerHTML = ""
  }
  count = 0;
})

// player X wins. Shoutout to my boy Tom though.
function winnerX(first, second, third) {
  if (blocks[first].innerHTML === "x") {
    if (blocks[second].innerHTML === "x") {
      if (blocks[third].innerHTML === "x") {
        alert("Player X wins! Player O, you suck at Tic-Tac-Toe!")
        // clears the board
        for (i = 0; i < blocks.length; i++) {
          blocks[i].innerHTML = ""
        }
        count = 0;
      }
    }
  }
}

// player O wins
function winnerO(first, second, third) {
  if (blocks[first].innerHTML === "o") {
    if (blocks[second].innerHTML === "o") {
      if (blocks[third].innerHTML === "o") {
        alert("Player O wins! Player X, you suck at Tic-Tac-Toe!")
        // clears the board
        for (i = 0; i < blocks.length; i++) {
          blocks[i].innerHTML = ""
        }
        count = 0;
      }
    }
  }
}

// Check for any winners or if there's a tie(no more moves left)
function checkBoard() {
  // Row 1, left column
  if (blocks[0].innerHTML === "x") {
    winnerX(0, 1, 2)
    winnerX(0, 3, 6)
    winnerX(0, 4, 8)
  } else if (blocks[0].innerHTML === "o") {
    winnerO(0, 1, 2)
    winnerO(0, 3, 6)
    winnerO(0, 4, 8)
  }

  // Row 1, right column
  if (blocks[2].innerHTML === "x") {
    winnerX(2, 1, 0)
    winnerX(2, 5, 8)
    winnerX(2, 4, 6)
  } else if (blocks[2].innerHTML === "o") {
    winnerO(2, 1, 0)
    winnerO(2, 5, 8)
    winnerO(2, 4, 6)
  }

  // Row 3, left column
  if (blocks[6].innerHTML === "x") {
    winnerX(6, 3, 0)
    winnerX(6, 4, 2)
    winnerX(6, 7, 8)
  } else if (blocks[6].innerHTML === "o") {
    winnerO(6, 3, 0)
    winnerO(6, 4, 2)
  }

  // Row 1, middle column
  if (blocks[1].innerHTML === "x") {
    winnerX(1, 4, 7)
  } else if (blocks[1].innerHTML === "o") {
    winnerO(1, 4, 7)
  }

  // Row 3, middle column
  if (blocks[7].innerHTML === "x") {
    winnerX(7, 4, 1)
  } else if (blocks[7].innerHTML === "o") {
    winnerO(7, 4, 1)
  }

  // Row 2
  if (blocks[3].innerHTML === "x") {
    winnerX(3, 4, 5)
  } else if (blocks[3].innerHTML === "o") {
    winnerO(3, 4, 5)
  }

  // Row 3, right column
  if (blocks[8].innerHTML === "x") {
    winnerX(8 ,7, 6)
  } else if (blocks[8].innerHTML === "o") {
    winnerO(8, 7, 6)
  }
}

winning = [[0, 1, 2], []]
