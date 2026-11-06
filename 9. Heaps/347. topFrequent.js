function topKFrequent(nums, k) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const heap = [];

  function swap(i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  function heapifyUp() {
    let index = heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (heap[parent][0] <= heap[index][0]) {
        break;
      }

      swap(index, parent);
      index = parent;
    }
  }

  function heapifyDown() {
    let index = 0;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      let smallest = index;

      if (left < heap.length && heap[left][0] < heap[smallest][0]) {
        smallest = left;
      }

      if (right < heap.length && heap[right][0] < heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === index) break;

      swap(index, smallest);

      index = smallest;
    }
  }

  function extractMin() {
    if (heap.length === 1) {
      return heap.pop();
    }

    const min = heap[0];

    heap[0] = heap.pop();

    heapifyDown();

    return min;
  }

  for (let [num, freq] of map) {
    heap.push([freq, num]);

    heapifyUp();

    if (heap.length > k) {
      extractMin();
    }
  }

  return heap.map((item) => item[1]);
}
