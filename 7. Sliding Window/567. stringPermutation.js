function stringPermutation(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1_count = new Array(26).fill(0);
  const s2_count = new Array(26).fill(0);

  const equal = (array1, array2) => {
    return array1.every((element, index) => {
      return element === array2[index];
    });
  };

  for (let i = 0; i < s1.length; i++) {
    s1_count[s1.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    s2_count[s2.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }

  if (equal(s1_count, s2_count)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    s2_count[s2.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    s2_count[s2.charCodeAt(i - s1.length) - "a".charCodeAt(0)] -= 1;

    if (equal(s1_count, s2_count)) {
      return true;
    }
  }

  return false;
}
