function mergeStrings(word1, word2) {
  let result = "";
  let i = 0;

  while (i < word1.length) {
    result = result + word1[i] + (word2[i] ? word2[i] : "");
    i++;
  }

  while (i < word2.length) {
    result = result + word2[i];
    i++;
  }

  return result;
}
