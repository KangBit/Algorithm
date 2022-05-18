function solution(number, k) {
  let times = k;
  let numbers = number.split("");

  let answer = numbers.reduce((prev, num, i) => {
    while (num > prev[prev.length - 1] && times > 0) {
      prev.pop();
      times -= 1;
    }
    prev.push(num);

    return prev;
  }, []);

  return answer.join("").slice(0, number.length - k);
}