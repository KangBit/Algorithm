function solution(strings, n) {
    let answer = [...strings];
    answer.sort((a,b) => {
        if( a[n] == b[n] ){
            return [a,b].sort()[0] !== a ? 1 : -1;    
        }
        
        return a[n] > b[n] ? 1 : -1
    })
    
    return answer;
}