function validPath(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  return dfs(graph, source, destination, visited);
}

function dfs(graph, source, destination, visited) {
  if (source === destination) {
    return true;
  }

  visited[source] = true;

  for (const neighbor of graph[source]) {
    if (!visited[neighbor] && dfs(graph, neighbor, destination, visited)) {
      return true;
    }
  }

  return false;
}
