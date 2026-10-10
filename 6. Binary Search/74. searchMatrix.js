function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;
  let row = -1;

  while (top <= bottom) {
    const mid = Math.floor((top + bottom) / 2);

    if (target < matrix[mid][0]) {
      bottom = mid - 1;
    } else if (target > matrix[mid][cols - 1]) {
      top = mid + 1;
    } else {
      row = mid;
      break;
    }
  }

  if (row === -1) {
    return false;
  }

  let left = 0;
  let right = cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < matrix[row][mid]) {
      right = mid - 1;
    } else if (target > matrix[row][mid]) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}
