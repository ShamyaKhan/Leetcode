function groupAnagrams(strs) {
  const res = new Map();

  for (const s of strs) {
    const count = new Array(26).fill(0);

    for (const c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join(",");

    if (!res.has(key)) {
      res.set(key, []);
    }

    res.get(key).push(s);
  }

  return Array.from(res.values());
}
