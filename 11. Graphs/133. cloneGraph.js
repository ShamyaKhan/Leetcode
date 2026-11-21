function cloneGraph(node) {
  const oldToNew = new Map();

  function dfs(node) {
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    const copy = new Node(node.val);

    oldToNew.set(node, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  }

  return node ? dfs(node) : null;
}
