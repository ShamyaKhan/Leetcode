function combinationSum(candidates, target) {
  const result = [];

  function backtrack(index, sum, path) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    if (index >= candidates.length || sum > target) {
      return;
    }

    path.push(candidates[index]);

    backtrack(index, sum + candidates[index], path);

    path.pop();

    backtrack(index + 1, sum, path);
  }

  backtrack(0, 0, []);

  return result;
}
