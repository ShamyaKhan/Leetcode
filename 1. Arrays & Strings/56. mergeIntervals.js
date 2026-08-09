function mergeIntervals(intervals) {
  // [[1, 3], [2, 6], [8, 10], [15, 18]]
  // [[1, 6], [8, 10], [15, 18]]

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let [start, end] of intervals) {
    let lastEnd = result[result.length - 1][1];

    if (start <= lastEnd) {
      result[result.length - 1][1] = Math.max(lastEnd, end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
}
