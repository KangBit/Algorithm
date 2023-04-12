function solution(elements) {
    let answer = new Set();
    for(let i = 1; i < elements.length ; i++) {
        elements.forEach((el, l) => {
            let sum = 0;
            for(let j = 0; j < i; j++) {
                sum = sum + elements[(l + j) % elements.length];
            }
            answer.add(sum);
        });
    }
    return answer.size + 1;
}