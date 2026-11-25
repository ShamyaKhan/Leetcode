function townJudge(n, trust) {
  // step 1: create an array to track trust scores
  const trustCount = new Array(n + 1).fill(0);

  // step 2: process all trust relationships
  for (const [a, b] of trust) {
    trustCount[a]--;
    trustCount[b]++;
  }

  // step 3: find the town judge
  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === n - 1) {
      return i;
    }
  }

  return -1;
}
