function solution(n, k) {
    let answer = [];
    let arr = [...new Array(n)].map((_,i)=> i+1);
    k = k-1;
    
    while( n > 0 ){
        let f = factorial(n-1);
        answer.push(...arr.splice(~~(k/f),1));
        
        k = k%f;    
        n -= 1;
    }
    
    return answer;
}

const factorial = (n) => {
    let r = 1;
    while (n > 1){
        r *= n;
        n -= 1;
    }
    
    return r;
}