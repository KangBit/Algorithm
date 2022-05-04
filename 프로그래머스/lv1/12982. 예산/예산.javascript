function solution(d, budget) {
    let answer = 0;
    let cumulative = 0;
    d.sort((a,b) => a-b).forEach((m)=>{
        if(cumulative + m <= budget){
            cumulative += m;
            answer += 1;
        }
    });
    
    
    return answer;
}