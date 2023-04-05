function solution(s){
    let a = 0;
    
    for(let b of s) {
        let t = b === "(" ? 1 : -1;
        if(a + t < 0) {
            return false;
        }
        a = a + t;
    }
    
    return a === 0;
}