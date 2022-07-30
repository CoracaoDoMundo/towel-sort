module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix.length == 0) {
  return []
} else {
  const newMatrix = matrix.map((_, i, newMatrix) => {
    i % 2 !== 0 ? matrix[i] == matrix[i].reverse() : matrix[i] == matrix[i]
  })

const result = matrix.flat();
return result;
}
}
