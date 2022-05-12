function solution(rows, columns, queries) {
  let matrix = getMatrix(rows, columns);
  let answer = [];

  queries.forEach((query) => {
    let afterSpin = spin(matrix, query);
    matrix = afterSpin.matrix;
    answer.push(afterSpin.minNum);
  });

  return answer;
}

const spin = (matrix, [x1, y1, x2, y2]) => {
  let copy = deepCopy(matrix);
  let stack = [];
  let move;

  for (let i = y1; i < y2; i++) {
    stack.push(copy[x1 - 1][i - 1]);
  }
  for (let i = x1; i < x2; i++) {
    stack.push(copy[i - 1][y2 - 1]);
  }
  for (let i = y2; i > y1; i--) {
    stack.push(copy[x2 - 1][i - 1]);
  }
  for (let i = x2; i > x1; i--) {
    stack.push(copy[i - 1][y1 - 1]);
  }

  stack.unshift(stack.pop());
  move = Math.min(...stack);

  for (let i = y1; i < y2; i++) {
    copy[x1 - 1][i - 1] = stack.shift();
  }
  for (let i = x1; i < x2; i++) {
    copy[i - 1][y2 - 1] = stack.shift();
  }
  for (let i = y2; i > y1; i--) {
    copy[x2 - 1][i - 1] = stack.shift();
  }
  for (let i = x2; i > x1; i--) {
    copy[i - 1][y1 - 1] = stack.shift();
  }

  return { matrix: copy, minNum: move };
};

const getMatrix = (rows, columns) => {
  let matrix = [];
  for (let row = 0; row < rows; row++) {
    matrix.push(
      [...new Array(columns)].map((_, i) => {
        return row * columns + i + 1;
      })
    );
  }

  return matrix;
};

const deepCopy = (arr) => {
  return arr.map((item) => {
    if (Array.isArray(item)) {
      return deepCopy(item);
    } else {
      return item;
    }
  });
};
