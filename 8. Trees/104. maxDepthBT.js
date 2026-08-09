class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraverse(root) {
  const result = [root];
  while (result.length) {
    const node = result.shift();
    result.unshift(node.left);
    result.unshift(node.right);
  }
  return result;
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}
