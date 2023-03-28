function solution(s) {
    let answer = 1;
    let acc = 1;
    let char = s[0];
    
    for(let i = 1; i < s.length; i++) {
        if (acc === 0) {
            answer += 1;
            char = s[i];
        }
        
        if(char === s[i]) {
            acc += 1;
        }else {
            acc -= 1;
        }
    }
    
    return answer;
}