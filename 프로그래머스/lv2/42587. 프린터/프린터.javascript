function solution(priorities, location) {
  let answer = 1;
  let copy = [...priorities];
  let pointer = location;

  while (copy.length > 0) {
    let max = Math.max(...copy);
    let maxValueIdx = copy.indexOf(max);

    if (maxValueIdx == pointer) {
      break;
    }

    for (let i = 0; i <= maxValueIdx; i++) {
      let left = copy.shift();

      if (i !== maxValueIdx) {
        copy.push(left);
      }

      if (pointer == 0) {
        pointer = copy.length - 1;
      } else {
        pointer = pointer - 1;
      }
    }

    answer += 1;
  }

  return answer;
}
