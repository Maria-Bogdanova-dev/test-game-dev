// 1). Create matrix
const rows = 10;
const cols = 10;
const min = -100;
const max = 100;

function createRundomBumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function creatMatrix(cols, rows, max, min) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(createRundomBumber(max, min));
    }
    matrix.push(row);
  }
  return matrix;
}

const myMatrix = creatMatrix(cols, rows, max, min);

// 2). show in console
// console.table(myMatrix);

// 3). decorete string with min number by star
function decoreteStrMin(matrix) {
  let min = Infinity;
  let strMin;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        strMin = i;
      }
    }
  }
  matrix[strMin][matrix[strMin].length] = "*";
  return matrix;
}

mutrixStar = decoreteStrMin(myMatrix);
// console.table(mutrixStar);

// 4). show min positive number
function showMinNumber(matrix, rows) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity;
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] < min && matrix[i][j] > 0) {
        min = matrix[i][j];
      }
    }
    matrix[i][rows + 2] = min;
  }
  return matrix;
}

mutrixMinNumbers = showMinNumber(myMatrix, rows);
// console.table(mutrixMinNumbers);

// 5).count repleced number
// This solution involves replacing the number with 0
function replaceNumbers(matrix, rows) {
  for (let i = 0; i < matrix.length; i++) {
    let counter = 0;
    for (let j = 0; j <= cols - 2; ) {
      let a = matrix[i][j];
      let b = matrix[i][j + 1];
      let c = matrix[i][j + 2];
      if ((a < 0 && b < 0 && c < 0) || (a > 0 && b > 0 && c > 0)) {
        counter++;
        j += 3;
      } else {
        j++;
      }
    }
    matrix[i][rows + 3] = counter;
  }
  return matrix;
}

mutrixWithCounter = replaceNumbers(myMatrix, rows);
console.table(mutrixWithCounter);
