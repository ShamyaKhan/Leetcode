function averageOfLevels(root) {
  const result = [];
  const queue = [root];

  while (queue[0]) {
    let average = 0;
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      average += node.val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    average /= length;
    result.push(average);
  }

  return result;
}
