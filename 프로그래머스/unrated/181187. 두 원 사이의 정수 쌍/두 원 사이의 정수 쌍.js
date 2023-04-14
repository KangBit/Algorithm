function solution(r1, r2) {
    let count = 0;
    
    for(let x = 1; x <= r2; x++) {
        let y1 = Math.sqrt(r1**2 - x**2);
        let y2 = Math.sqrt(r2**2 - x**2);

        if(x > r1) {
            y1 = 0;
        }
        
        if(!Number.isInteger(y1)) {
            y1 = Math.ceil(y1);
        }
        
        y2 = Math.floor(y2)
        
        count = count + y2 - y1 + 1
    }
    
    return count * 4;
}