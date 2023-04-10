function solution(k, tangerine) {
    let map = tangerine.reduce((acc, curr)=>{
        if (acc[curr]){
            acc[curr] = acc[curr] + 1;
        }else {
            acc[curr] = 1;
        }
        
        return acc;
    },{});
    
    let arr = Object.values(map).sort((a, b) => a-b);
    let answer = 0;
    
    while(k > 0) {
        answer += 1;
        k -= arr.pop();
    }
    
    return answer;
}