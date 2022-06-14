// 1. 왼쪽 오른쪽 두가지 경우의 수 계산 - 실패 ( A가 모여있을 경우 중간에 역방향으로 진행하는게 도움이 될 때가 있음)
// 2. l,r 포인터를 두고, A를 만나면 돌아갈지 안돌아갈지 분기, l과 r이 만나면 반환
// 3. 각 시행마다 왼쪽 오른쪽 최적의 경우를 계산.

function solution(name) {
  let arr = name.split("");

  if (!hasNextStep(arr)) {
    return 0;
  }

  let right = foo(false, 0, arr, 0, true);
  let left = foo(true, 0, arr, 0, true);

  let result = Math.min(left, right);

  return result;
}

const foo = (reverse, p, arr, count, flag) => {
  if (p === arr.length) {
    p = 0;
  }
  if (p < 0) {
    p = arr.length - 1;
  }

  let newArr = [...arr];
  if (!hasNextStep(arr)) {
    return count - 1;
  }

  if (reverse) {
    // 왼쪽으로 진행중일 경우
    let increase = foo2(arr[p]);
    newArr.splice(p, 1, "A");

    if (increase !== 0) {
      let left = foo(true, p - 1, newArr, count + increase + 1, false);
      return left;
    } else {
      if (flag) {
        let left = foo(true, p - 1, newArr, count + 1, true);
        return left;
      } else {
        let left = foo(true, p - 1, newArr, count + 1, true);
        let right = foo(false, p + 1, newArr, count - 1, true);

        return Math.min(left, right);
      }
    }
  } else {
    // 오른쪽으로 진행중일 경우
    let increase = foo2(arr[p]);
    newArr.splice(p, 1, "A");

    // A가 아닐경우
    if (increase !== 0) {
      let right = foo(false, p + 1, newArr, count + increase + 1, false);
      return right;
    } else {
      // A일경우
      if (flag) {
        let right = foo(false, p + 1, newArr, count + 1, true);
        return right;
      } else {
        let left = foo(true, p - 1, newArr, count - 1, true);
        let right = foo(false, p + 1, newArr, count + 1, true);
        return Math.min(left, right);
      }
    }
  }
};

const foo2 = (char) => {
  let charCode = char.charCodeAt();
  return Math.min(charCode - 65, 91 - charCode);
};

const hasNextStep = (arr) => {
  return arr.join("").replace(/A/gi, "").length > 0;
};
