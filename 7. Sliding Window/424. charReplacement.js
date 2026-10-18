function characterReplacement(s, k) {
  const count = new Map();
  let result = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], 1 + (count.get(s[right]) || 0));

    while (right - left + 1 - Math.max(...count.values()) > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}
