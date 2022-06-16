function solution(clothes) {
    let counts = clothes.reduce((prev,curr)=>{
        let key = curr[1];
        
        if(prev[key] === undefined){
            prev[key] = 1;
        }else {
            prev[key] = prev[key] + 1;
        }
        
        return prev;
    }, {});
    
    let answer = Object.values(counts).reduce((prev,curr)=>{
        return prev * (curr + 1);
    },1) - 1;
    
    return answer;
}