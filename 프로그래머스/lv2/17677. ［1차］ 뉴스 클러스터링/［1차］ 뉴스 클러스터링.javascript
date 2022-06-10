function solution(str1, str2) {
  let answer = 1;

  let set1 = makeSet(str1);
  let set2 = makeSet(str2);

  let sumCount = countSumOfSet(set1, set2);
  let intersectionCount = countIntersection(set1, set2);

  if (sumCount !== 0) {
    answer = intersectionCount / sumCount;
  }

  return ~~(answer * 65536);
}

const makeSet = (str) => {
  let regx = /^[a-zA-Z]*$/;
  let set = [];

  for (let i = 0; i < str.length - 1; i++) {
    let char = str.slice(i, i + 2).toUpperCase();
    if (regx.test(char)) {
      set.push(char);
    }
  }
  return set;
};

const countSumOfSet = (set1, set2) => {
  let copySet = [...set2];

  return set1
    .reduce((prev, curr) => {
      if (copySet.includes(curr)) {
        copySet.splice(copySet.indexOf(curr), 1);
      }
      prev.push(curr);

      return prev;
    }, [])
    .concat(copySet).length;
};

const countIntersection = (arr1, arr2) => {
  let copySet = [...arr2];

  return arr1.reduce((prev, curr) => {
    if (copySet.includes(curr)) {
      copySet.splice(copySet.indexOf(curr), 1);
      prev.push(curr);
    }

    return prev;
  }, []).length;
};
