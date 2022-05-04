function solution(s) {
    let length = s.length;
    let start = length/2;
    
    if(length % 2 === 0){
        return s.substr(start-1, 2);
    }else {
        return s.substr(Math.floor(start), 1)
    }
}