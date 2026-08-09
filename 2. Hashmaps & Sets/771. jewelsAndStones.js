function jewewlsAndStones(jewels, stones) {
  let count = 0;
  const jewelSet = new Set(jewels);

  for (let char of stones) {
    if (jewelSet.has(char)) {
      count++;
    }
  }

  return count;
}
