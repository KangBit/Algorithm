const arr = ["4", "1", "2"];

function solution(n) {
    var answer = toDigit(n);
    
    return answer;
}

let toDigit = (n) => {
  let quotient = ~~(n / 3);
  let remainder = n % 3;

  if (n == 0) {
    return "";
  }

  if (remainder == 0) {
    return toDigit(quotient - 1) + arr[remainder];
  } else {
    return toDigit(quotient) + arr[remainder];
  }
};