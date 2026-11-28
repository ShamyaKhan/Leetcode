function climbStairs(n) {
  if (n <= 2) {
    return n;
  }

  let dp = new Array(n + 1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// how can you reach step n?
// only two possibilities
// you came from step n - 1 by taking 1 step
// you came from step n - 2 by taking 2 steps
// ways(n) = ways(n - 1) + ways(n - 2)
