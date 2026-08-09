function longestCommonPrefix(strs) {
  let result = "";
  // flower, flow, flight
  for (let i = 0; i < strs[0].length; i++) {
    for (let string of strs) {
      if (i === string.length || strs[0][i] !== string[i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
}
