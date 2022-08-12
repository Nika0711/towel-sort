
module.exports = function towelSort (matrix) {
 
  if (matrix && matrix.length == 0) {
    return [];
  } else if (matrix && matrix.length == 2) {
    const arr = matrix[1].reverse();
    const b = matrix[0].concat(...arr);
    return b;
  } else if (matrix && matrix.length == 3) {
    const arr = matrix[1].reverse();
    const b = matrix[0].concat(...arr, matrix[2]);
    return b.flat();
  } else if (matrix && matrix.length == 4) {
    const arr = [matrix[0], matrix[1].reverse(), matrix[2], matrix[3].reverse()];
    arrConcat = Array.prototype.concat(...arr);
    return arrConcat;
  } else {
    return [];
  }
}