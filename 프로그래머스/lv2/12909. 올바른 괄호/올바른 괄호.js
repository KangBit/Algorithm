function solution(s){
    let a = 0;
    
    for(let i = 0; i < s.length; i++) {
        let t = s[i] === "(" ? 1 : -1;
        if(a + t < 0) {
            return false;
        }
        a = a + t;
    }
    
    return a === 0;
}