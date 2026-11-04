function lastStoneWeight(stones) {
  const heap = [];

  // Insert into Max Heap
  function insert(value) {
    heap.push(value);

    let index = heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (heap[parent] >= heap[index]) break;

      [heap[parent], heap[index]] = [heap[index], heap[parent]];

      index = parent;
    }
  }

  // Remove the maximum element
  function extractMax() {
    if (heap.length === 0) return null;

    if (heap.length === 1) {
      return heap.pop();
    }

    const max = heap[0];

    heap[0] = heap.pop();

    let index = 0;

    while (true) {
      let largest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < heap.length && heap[left] > heap[largest]) {
        largest = left;
      }

      if (right < heap.length && heap[right] > heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [heap[index], heap[largest]] = [heap[largest], heap[index]];

      index = largest;
    }

    return max;
  }

  // Insert all stones
  for (let stone of stones) {
    insert(stone);
  }

  // Smash the two heaviest stones
  while (heap.length > 1) {
    let first = extractMax();
    let second = extractMax();

    if (first !== second) {
      insert(first - second);
    }
  }

  return heap.length === 0 ? 0 : heap[0];
}
