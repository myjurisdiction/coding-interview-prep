/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * s = "anagram", t = "nagaram"
 * s = "rat", t = "car"
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const smap = new Map();
  const tmap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (smap.has(s[i])) {
      const current = smap.get(s[i]);
      smap.set(s[i], current + 1);
    } else {
      smap.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tmap.has(t[i])) {
      const current = tmap.get(t[i]);
      tmap.set(t[i], current + 1);
    } else {
      tmap.set(t[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (smap.has(s[i]) && tmap.has(s[i]) && smap.get(s[i]) === tmap.get(s[i])) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
