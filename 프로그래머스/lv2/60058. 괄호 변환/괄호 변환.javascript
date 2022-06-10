const [openBracket, closeBracket] = ["(", ")"];

function solution(p) {
  return step1(p);
}

const step1 = (v) => {
  let balance = 0;
  let pivot = 0;

  if (v.length === 0) {
    return "";
  }

  for (let i = 0; i < v.length; i++) {
    if (v[i] === openBracket) {
      balance += 1;
    } else {
      balance -= 1;
    }
    pivot = i;

    if (balance === 0) {
      break;
    }
  }

  if (v[0] === openBracket) {
    return v.slice(0, pivot + 1) + step1(v.slice(pivot + 1, v.length));
  } else {
    return (
      "(" +
      step1(v.slice(pivot + 1, v.length)) +
      ")" +
      step2(v.slice(0, pivot + 1))
    );
  }
};

const step2 = (p) => {
  let arr = p.substring(1, p.length - 1).split("");

  return arr.reduce((prev, curr) => {
    if (curr === openBracket) {
      prev += closeBracket;
    } else {
      prev += openBracket;
    }
    return prev;
  }, "");
};
