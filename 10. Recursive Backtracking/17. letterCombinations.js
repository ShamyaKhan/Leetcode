function letterCombinations(digits) {
  // time complexity O(n.4^n)
  // space complexity O(n)

  if (digits === "") {
    return [];
  }

  const result = [];

  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backtrack(i, currStr) {
    if (currStr.length === digits.length) {
      result.push(currStr);
      return;
    }

    for (let char of letters[digits[i]]) {
      backtrack(i + 1, currStr + char);
    }
  }

  backtrack(0, "");

  return result;
}
