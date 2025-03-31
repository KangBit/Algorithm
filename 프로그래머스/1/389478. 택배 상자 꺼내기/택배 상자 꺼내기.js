function solution(n, w, num) {
    const t = num % w || w;

    let answer = 0;
    let gap = (2 * w) - (2 * t) + 1;
    let climb = num;
    
    while(climb <= n) {
        answer = answer + 1;
        climb = climb + gap;
        gap = 2 * w - gap;
    }
    
    return answer;
}