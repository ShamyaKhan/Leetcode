function permutations(nums) {
  const result = [];
  const path = [];

  function backtrack() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (const n of nums) {
      if (!path.includes(n)) {
        path.push(n);
        backtrack();
        path.pop();
      }
    }
  }

  backtrack();

  return result;
}
