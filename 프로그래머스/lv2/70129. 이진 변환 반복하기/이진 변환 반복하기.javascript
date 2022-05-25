function solution(s) {
    let answer = [0,0];
    
    let str = s;
    while(str !== "1"){
        let zeros = str.replace(/1/gi,"");
        
        str = str.replace(/0/gi,"");
        str = str.length.toString(2);
        
        answer[0] += 1
        answer[1] += zeros.length
    }

    return answer;
}