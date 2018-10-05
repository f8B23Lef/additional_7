module.exports = function solveSudoku(matrix) {
  
  const possibleValues = [1,2,3,4,5,6,7,8,9];
    
  for(let row = 0; row < 9; row++) {
    for(let col = 0; col < 9; col++) {
      if(matrix[row][col] === 0) {
        for(let p = 0; p < possibleValues.length; p++) {
          if(checkRow(possibleValues[p], row, matrix) && (checkColumn(possibleValues[p], col, matrix)) && (checkBlock(possibleValues[p], row, col, matrix))) {
            matrix[row][col] = possibleValues[p];
            if(solveSudoku(matrix)) {
              return matrix;
            }
          }
        }
        matrix[row][col] = 0;
        return false;
      }
    }
  }
  return matrix;
}

function checkRow(num, row, matrix) {
  for(let col = 0; col < 9; col++) {
    if(matrix[row][col] === num) {
      return false;
    }
  }
  return true;
}

function checkColumn(num, col, matrix) {
  for(let row = 0; row < 9; row++) {
    if(matrix[row][col] === num) {
      return false;
    }
  }
  return true;
}

function checkBlock(num, row, col, matrix) {
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3;

  for (let i = blockRow; i < (blockRow + 3); i++) {
    for (let j = blockCol; j < (blockCol + 3); j++) {
      if(matrix[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}