function solution(n, left, right) {
    let answer = [];
    
    for(let i = left; i <= right; i++){
        let col = ~~(i/n)+1;
        let row = i%n + 1;
        
        answer.push(Math.max(col,row))
    }
    
    return answer;
}