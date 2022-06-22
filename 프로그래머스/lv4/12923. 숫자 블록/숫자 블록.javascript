function solution(begin, end) {
    let max = 10_000_000;
    let answer = [];
    
    for(let i = begin; i <= end; i++){
        let board = 1;
        for(let j = 2; j * j <= i; j++){
            if(i % j === 0 && i / j <= max){
                board = i / j;
                break;
            }
        }
        
        if(i === 1){
            answer.push(0);
        }else {
            answer.push(board);
        }
    }
    
    return answer;
}