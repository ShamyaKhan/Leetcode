function ransomNoteConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const counts = new Map();

  for (const char of magazine) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const count = counts.get(char);

    if (!count) {
      return false;
    }

    if (count === 1) {
      counts.delete(char);
    } else {
      counts.set(char, count - 1);
    }
  }

  return true;
}
