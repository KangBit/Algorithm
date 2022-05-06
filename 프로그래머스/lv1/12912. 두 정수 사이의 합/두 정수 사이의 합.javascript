function solution(a, b) {
    if(a == b) {
        return a;
    }

    let answer = 0;

    if( (a+b)%2 == 0 ){
        answer += (a+b)/2
    }
    
    for(let i = 0; i < Math.ceil(Math.abs(b-a)/2) ; i++){
        answer += a+b
    }
    
    return answer
}