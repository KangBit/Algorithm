function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;
    
    for(let i = 3; i <= total / 3; i++){
        if(total % i === 0){
            let h = total / i;
            let w = i;
            
            if((h-2)*(w-2) === yellow){
                return [h,w]
            }
        }
    }
    return answer;
}