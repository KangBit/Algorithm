function solution(numbers) {
    let answer = 0;
    
    Array.from({length: 10}, (v, i) => {
        if(!numbers.includes(i)){
            answer += i
        }
    });
    
    return answer;
}