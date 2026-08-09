function hIndex(citations) {
  let n = citations.length;
  let bucket = new Array(n + 1).fill(0);

  for (let c of citations) {
    bucket[Math.min(c, n)] += 1;
  }

  let papers = 0;

  for (let h = n; h >= 0; h--) {
    papers += bucket[h];
    if (papers >= h) {
      return h;
    }
  }
}
