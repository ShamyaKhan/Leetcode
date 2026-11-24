function connectPoints(points) {
  const n = points.length;

  const visited = new Array(n).fill(false);
  const minDist = new Array(n).fill(Infinity);

  minDist[0] = 0;

  let result = 0;

  for (let i = 0; i < n; i++) {
    let minCost = Infinity;
    let minIndex = -1;

    // Find the unvisited point with minimum distance
    for (let j = 0; j < n; j++) {
      if (!visited[j] && minDist[j] < minCost) {
        minCost = minDist[j];
        minIndex = j;
      }
    }

    // Add this point to the MST
    visited[minIndex] = true;
    result += minCost;

    // Update distances to all unvisited points
    const [x1, y1] = points[minIndex];

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        const [x2, y2] = points[j];

        const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);

        minDist[j] = Math.min(minDist[j], distance);
      }
    }
  }

  return result;
}
