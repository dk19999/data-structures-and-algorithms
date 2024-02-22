/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let count = (cur_count = 0);

  const chars = new Map();

  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (chars.get(char) == null) {
      cur_count += 1;
    } else {
      const characterIndex = chars.get(char);
      if (characterIndex < start) cur_count += 1;
      else {
        start = characterIndex + 1;
        cur_count = i - start + 1;
      }
    }

    chars.set(char, i);

    count = Math.max(count, cur_count);
  }

  return count;
};
