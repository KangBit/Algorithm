function solution(s) {
    let numbers = s.split(" ").map(v => +v);
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    
    return `${min} ${max}`
}