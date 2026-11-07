function kClosest(points, k) {
  const maxHeap = [];

  // Calculate squared distance
  const getDistance = (point) => {
    return point[0] * point[0] + point[1] * point[1];
  };

  // Insert into Max Heap
  const push = (point) => {
    maxHeap.push(point);

    let index = maxHeap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (getDistance(maxHeap[parent]) >= getDistance(maxHeap[index])) {
        break;
      }

      [maxHeap[parent], maxHeap[index]] = [maxHeap[index], maxHeap[parent]];

      index = parent;
    }
  };

  // Remove the largest element
  const pop = () => {
    const largest = maxHeap[0];
    const last = maxHeap.pop();

    if (maxHeap.length > 0) {
      maxHeap[0] = last;

      let index = 0;

      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largestIndex = index;

        if (
          left < maxHeap.length &&
          getDistance(maxHeap[left]) > getDistance(maxHeap[largestIndex])
        ) {
          largestIndex = left;
        }

        if (
          right < maxHeap.length &&
          getDistance(maxHeap[right]) > getDistance(maxHeap[largestIndex])
        ) {
          largestIndex = right;
        }

        if (largestIndex === index) break;

        [maxHeap[index], maxHeap[largestIndex]] = [
          maxHeap[largestIndex],
          maxHeap[index],
        ];

        index = largestIndex;
      }
    }

    return largest;
  };

  // Process all points
  for (const point of points) {
    push(point);

    if (maxHeap.length > k) {
      pop();
    }
  }

  return maxHeap;
}
