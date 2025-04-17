const chars = [" ", "A", "E", "I", "O", "U"];

function solution(word) {
  const dict = [...makeWords("")].sort();
  return dict.indexOf(word);
}

const makeWords = (str) => {
  const trimmedStr = str.trim();
  if (str.length === 5 || trimmedStr.length !== str.length) {
    return new Set([trimmedStr]);
  }

  return chars.reduce((acc, char) => {
    return union(acc, makeWords(str + char));
  }, new Set());
};

const union = (setA, setB) => new Set([...setA, ...setB]);
