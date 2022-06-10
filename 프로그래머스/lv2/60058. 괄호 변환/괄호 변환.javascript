const [openBracket, closeBracket] = ["(",")"];

function solution(p) {
  return step1(p);
}

const step1 = (v) => {
  let open = 0;
  let close = 0;

  if (v.length === 0) {
    return "";
  }

  for (let i = 0; i < v.length; i++) {
    if (v[i] === openBracket) {
      open += 1;
    } else {
      close += 1;
    }

    if (open === close) {
      if (v[0] === openBracket) {
        return v.slice(0, i + 1) + step1(v.slice(i + 1, v.length));
      } else {
        return (
          "(" + step1(v.slice(i + 1, v.length)) + ")" + step2(v.slice(0, i + 1))
        );
      }
    }
  }
};

const step2 = (p) => {
  let arr = p.substring(1, p.length - 1).split("");
  let reverse = arr.reduce((prev, curr) => {
    if (curr === openBracket) {
      prev += closeBracket;
    } else {
      prev += openBracket;
    }
    return prev;
  }, "");

  return reverse;
};