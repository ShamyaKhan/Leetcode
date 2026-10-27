function levelOrderTraversal(root) {
  const result = [];
  const queue = [root];

  while (queue[0]) {
    const level = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}
