function solution(queue1, queue2) {
    let answer = 0;
    
    let queue = queue1.concat(queue2);
    let sum1 = queue1.reduce((acc, curr) => acc + curr);
    let sum2 = queue2.reduce((acc, curr) => acc + curr);
    
    let [p1, p2] = [0, queue.length / 2];
    
    while(sum1 !== sum2){
        if(p1 === p2 || answer === queue.length * 3) {
            return -1;
        }
        
        if (sum1 > sum2) {
            sum1 -= queue[p1];
            sum2 += queue[p1];
            p1 = p1 + 1;
        }else if (sum1 < sum2) {
            sum1 += queue[p2];
            sum2 -= queue[p2];
            p2 = p2 + 1;
        }
        
        if(p1 >= queue.length){
            p1 = 0;
        }
        if(p2 >= queue.length){
            p2 = 0;
        }
        
        answer = answer + 1;
    }
        
    return answer;
}