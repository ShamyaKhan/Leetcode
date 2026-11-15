function wordSearch(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const path = new Set();

  function dfs(r, c, i) {
    if (i === word.length) {
      return true;
    }

    if (r < 0 || c < 0 || r >= rows || c >= cols || word[i] !== board[r][c]) {
      return false;
    }

    const key = `${r},${c}`;

    if (path.has(key)) {
      return false;
    }

    path.add(key);

    const result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    path.delete(key);

    return result;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
}
