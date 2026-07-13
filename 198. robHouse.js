function robHouseRecursive(nums) {
  // bottom up / tabular approach
  // time complexity O(2^n)
  // space complexity O(n)

  let n = nums.length;

  function helper(i) {
    if (i === 0) {
      return nums[i];
    }
    if (i === 1) {
      return Math.max(nums[0], nums[1]);
    }
    return Math.max(nums[i] + helper(i - 2), helper(i - 1));
  }

  return helper(n - 1);
}

function robHouseDP(nums) {
  // top down / memoized approach
  // time complexity O(n)
  // space complexity O(n)

  let n = nums.length;

  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let memo = {
    0: nums[0],
    1: Math.max(nums[0], nums[1]),
  };

  function helper(i) {
    if (i in memo) {
      return memo[i];
    } else {
      memo[i] = Math.max(nums[i] + helper(i - 2), helper(i - 1));
      return memo[i];
    }
  }

  return helper(n - 1);
}

function robHouseArray(nums) {
  // bottom up DP (tabular)
  // Time O(n)
  // Space O(n)

  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const dp = [0] * n;
  dp[0] = nums[0];
  dp[1] = nums[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
}

function robHouseConstant(nums) {
  // bottom up DP (tabulation)
  // Space O(1)
  // Time O(n)

  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let prev = nums[0];
  let curr = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    let temp = prev;
    prev = curr;
    curr = Math.max(nums[i] + temp, prev);
  }

  return curr;
}
