function pathSum(root, targetSum) {
  function dfs(node, currentSum) {
    if (!node) {
      return false;
    }

    currentSum += node.val;

    if (!node.left && !node.right) {
      return currentSum === targetSum;
    }

    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  }

  return dfs(root, 0);
}
