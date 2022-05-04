function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        let count = Object.values(factorization(i)).reduce((prev,curr,i)=>{
            return prev*(curr+1);
        },1);

        if(count%2 == 0){
            answer += i;
        }else {
            answer -= i;
        }
    }
    
    return answer;
}

const factorization = (num) => {
    let primeFactors = {};
    let i = 2;
    while(true){
        if(num % i == 0){
            primeFactors[i] = (primeFactors[i] || 0) + 1;
            num = num/i;
        }else {
            i++;
        }
        
        if(i > num){
            break;
        }
    }
    return primeFactors;
}