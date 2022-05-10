function solution(n) {
    let answer = `${n}`.split("").reverse().map((str)=>{ 
        return +str; 
    });
    return answer;
}