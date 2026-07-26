function spiralMatrix(matrix) {
  const result = [];
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;

    if (!(left < right && top < bottom)) {
      break;
    }

    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
}
