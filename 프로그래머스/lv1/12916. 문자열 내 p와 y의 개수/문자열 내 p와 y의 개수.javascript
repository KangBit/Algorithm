function solution(s){
    let answer = true;
    
    let pMatch = s.match(/p/gi) || [];
    let yMatch = s.match(/y/gi) || [];
    
    if(pMatch.length !== yMatch.length ){
        answer = false
    }

    return answer;
}