var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  let fresh = 0;

  // step 1: find all rotten and fresh oranges
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }

      if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  // if there are no fresh oranges
  if (fresh === 0) return 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let minutes = 0;
  let head = 0;

  // step 2: multi-source BFS
  while (head < queue.length && fresh > 0) {
    // number of rotten oranges at current level
    const size = queue.length - head;

    // process all oranges at this level
    for (let k = 0; k < size; k++) {
      const [row, col] = queue[head++];

      // check all four directions
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // check boundaries and fresh orange
        if (
          newRow >= 0 &&
          newRow < m &&
          newCol >= 0 &&
          newCol < n &&
          grid[newRow][newCol] === 1
        ) {
          // make fresh orange rotten
          grid[newRow][newCol] = 2;

          // add it to the queue
          queue.push([newRow, newCol]);

          // decrease fresh orange count
          fresh--;
        }
      }
    }

    // one minute passed
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
};
