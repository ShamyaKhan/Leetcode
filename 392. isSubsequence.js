function isSubsequence(s, t) {
  // s = bczn
  // t = abcxyzmbn

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
}
