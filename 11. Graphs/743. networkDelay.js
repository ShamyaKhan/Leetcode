class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][0] <= this.heap[index][0]) {
        break;
      }

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

var networkDelayTime = function (times, n, k) {
  // Step 1: Build adjacency list
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  // Step 2: Initialize distances
  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;

  // Step 3: Initialize Min Heap
  const pq = new MinHeap();
  pq.push([0, k]); // [distance, node]

  // Step 4: Dijkstra's Algorithm
  while (!pq.isEmpty()) {
    const [currentDist, node] = pq.pop();

    // Skip outdated entries
    if (currentDist > dist[node]) continue;

    // Explore neighbors
    for (const [neighbor, weight] of graph[node]) {
      const newDist = currentDist + weight;

      if (newDist < dist[neighbor]) {
        dist[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }

  // Step 5: Find the maximum shortest distance
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) {
      return -1;
    }

    answer = Math.max(answer, dist[i]);
  }

  return answer;
};
