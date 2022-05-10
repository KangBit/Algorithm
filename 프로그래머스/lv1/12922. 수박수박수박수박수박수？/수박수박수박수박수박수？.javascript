function solution(n) {
    let answer = '';
    for(let i = 0; i < n/2; i++){
        answer += '수박'
    }
    
    if(answer.length == n){
        return answer;
    }else {
        return answer.substring(0, answer.length-1)
    }
}