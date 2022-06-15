function solution(name) {
  let arr = name.split("");

  if (!hasNextStep(arr)) {
    return 0;
  }

  let right = next(name, 0, false);
  let left = next(
    arr[0] + arr.slice(1, arr.length).reverse().join(""),
    0,
    false
  );

  let result = Math.min(left, right);

  return result;
}

const next = (str, count, canGoBack) => {
  let arr = str.split("");

  if (!hasNextStep(str.split(""))) {
    return count - 1;
  }

  let increase = charSelect(str[0]);
  let nextStr = {
    right: arr.slice(1, arr.length).join("") + "A",
    left: arr.slice(1, arr.length).reverse().join("") + "A",
  };

  if (str[0] !== "A") {
    return next(nextStr["right"], count + increase + 1, true);
  }

  if (!canGoBack) {
    return next(nextStr["right"], count + increase + 1, false);
  }

  let right = next(nextStr["right"], count + increase + 1, false);
  let left = next(nextStr["left"], count + increase - 1, false);

  return Math.min(left, right);
};

const charSelect = (char) => {
  let charCode = char.charCodeAt();
  return Math.min(charCode - 65, 91 - charCode);
};

const hasNextStep = (arr) => {
  return arr.join("").replace(/A/gi, "").length > 0;
};