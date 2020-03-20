
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrayResult = [];
  if (matrix) {
  
    for (let i = 0; i < matrix.length; i++) {
      let matrixRow = i%2 ?  matrix[i].reverse() : matrix[i]; 
      for (let k = 0; k < matrixRow.length; k++) {
        arrayResult.push(matrixRow[k]);
      }   
    }
  return arrayResult;
  } else {
   return []
 }
 
}