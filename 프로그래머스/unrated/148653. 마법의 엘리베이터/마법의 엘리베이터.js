function solution(storey) {
    let answer = 0;

    while(storey > 0) {
        const remain = storey % 10;
        storey = ~~(storey / 10);
        
        if(remain === 5) {
            if(storey % 10 >= 5) {
                answer += 10 - remain;
                storey += 1;    
            }else {
                answer += remain;
            }
        }else if(remain > 5) {
            answer += 10 - remain;
            storey += 1;
        }else {
            answer += remain;
        }
    }
    
    return answer;
}
