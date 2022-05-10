function solution(n) {
    let str = `${n}`.split("").sort().reverse().join("");
    return +str;
}