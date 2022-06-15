function solution(name) {
  if (!hasNextStep(name)) {
    return 0;
  }

  let arr = name.split("");
    
  let rightStr = name;
  let leftStr = arr[0] + arr.slice(1, arr.length).reverse().join("");

  let right = next(rightStr, 0, false);
  let left = next(leftStr, 0, false);

  let result = Math.min(left, right);

  return result;
}

const next = (str, count, canGoBack) => {
  if (!hasNextStep(str)) {
    return count - 1;
  }

  let arr = str.split("");
  let increase = charSelect(arr[0]);
  let nextStr = {
    right: arr.slice(1, arr.length).join("") + "A",
    left: arr.reverse().join(""),
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

const hasNextStep = (str) => {
  let arr = str.split("");
  return arr.join("").replace(/A/gi, "").length > 0;
};