function solution(n) {
    let answer = 0;
    [...new Array(n)].map((_,i)=>{
        let num = i+1;
        if(n%num === 0){
            answer += num;
        }
    })
    return answer;
}